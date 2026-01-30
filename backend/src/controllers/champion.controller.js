const Champion = require('../models/Champion.model');
const Skin = require('../models/Skin.model');
const Ability = require('../models/Ability.model');

// Buscar todos os campeões
exports.getAllChampions = async (req, res) => {
  try {
    const { limit = 50, page = 1, sort = 'name', order = 'asc' } = req.query;

    const sortOrder = order === 'desc' ? -1 : 1;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const champions = await Champion.find()
      .sort({ [sort]: sortOrder })
      .skip(skip)
      .limit(parseInt(limit))
      .populate('skins abilities');

    const total = await Champion.countDocuments();

    res.json({
      champions,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Buscar campeões ativos
exports.getActiveChampions = async (req, res) => {
  try {
    const champions = await Champion.find({ active: true })
      .sort({ name: 1 })
      .populate('skins');

    res.json(champions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Buscar campeões em destaque
exports.getFeaturedChampions = async (req, res) => {
  try {
    const champions = await Champion.find({ featured: true, active: true })
      .sort({ updatedAt: -1 })
      .populate('skins');

    res.json(champions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Buscar campeão por ID
exports.getChampionById = async (req, res) => {
  try {
    const champion = await Champion.findById(req.params.id)
      .populate('skins')
      .populate('abilities');

    if (!champion) {
      return res.status(404).json({ message: 'Campeão não encontrado' });
    }

    res.json(champion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Buscar campeão por nome
exports.getChampionByName = async (req, res) => {
  try {
    const champion = await Champion.findOne({
      name: { $regex: new RegExp(req.params.name, 'i') }
    })
    .populate('skins')
    .populate('abilities');

    if (!champion) {
      return res.status(404).json({ message: 'Campeão não encontrado' });
    }

    res.json(champion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Buscar campeões por papel (role)
exports.getChampionsByRole = async (req, res) => {
  try {
    const champions = await Champion.find({
      role: req.params.role,
      active: true
    })
    .sort({ name: 1 })
    .populate('skins');

    res.json(champions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Buscar campeões (search)
exports.searchChampions = async (req, res) => {
  try {
    const { q, role, minDifficulty, maxDifficulty } = req.query;

    let query = { active: true };

    if (q) {
      query.$or = [
        { name: { $regex: q, $options: 'i' } },
        { title: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } }
      ];
    }

    if (role) {
      query.role = role;
    }

    if (minDifficulty) {
      query.difficulty = { $gte: parseInt(minDifficulty) };
    }

    if (maxDifficulty) {
      query.difficulty = { ...query.difficulty, $lte: parseInt(maxDifficulty) };
    }

    const champions = await Champion.find(query)
      .sort({ name: 1 })
      .populate('skins');

    res.json(champions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Criar novo campeão
exports.createChampion = async (req, res) => {
  try {
    const championData = { ...req.body };

    // Processar upload de imagens
    if (req.files) {
      if (req.files['splashArt']) {
        championData.splashArt = `/uploads/${req.files['splashArt'][0].filename}`;
      }
      if (req.files['icon']) {
        championData.icon = `/uploads/${req.files['icon'][0].filename}`;
      }
    }

    // Validar se já existe campeão com este nome
    const existingChampion = await Champion.findOne({ name: championData.name });
    if (existingChampion) {
      return res.status(400).json({ message: 'Já existe um campeão com este nome' });
    }

    const champion = new Champion(championData);
    const newChampion = await champion.save();

    res.status(201).json(newChampion);
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ message: messages.join(', ') });
    }
    res.status(400).json({ message: error.message });
  }
};

// Atualizar campeão
exports.updateChampion = async (req, res) => {
  try {
    const championData = { ...req.body };

    // Processar upload de imagens
    if (req.files) {
      if (req.files['splashArt']) {
        championData.splashArt = `/uploads/${req.files['splashArt'][0].filename}`;
      }
      if (req.files['icon']) {
        championData.icon = `/uploads/${req.files['icon'][0].filename}`;
      }
    }

    const champion = await Champion.findByIdAndUpdate(
      req.params.id,
      championData,
      { new: true, runValidators: true }
    );

    if (!champion) {
      return res.status(404).json({ message: 'Campeão não encontrado' });
    }

    res.json(champion);
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ message: messages.join(', ') });
    }
    res.status(400).json({ message: error.message });
  }
};

// Deletar campeão
exports.deleteChampion = async (req, res) => {
  try {
    // Primeiro, deletar skins e habilidades relacionadas
    await Skin.deleteMany({ champion: req.params.id });
    await Ability.deleteMany({ champion: req.params.id });

    // Depois deletar o campeão
    const champion = await Champion.findByIdAndDelete(req.params.id);

    if (!champion) {
      return res.status(404).json({ message: 'Campeão não encontrado' });
    }

    res.json({
      message: 'Campeão e dados relacionados deletados com sucesso',
      champion
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Alternar status ativo
exports.toggleActive = async (req, res) => {
  try {
    const champion = await Champion.findById(req.params.id);

    if (!champion) {
      return res.status(404).json({ message: 'Campeão não encontrado' });
    }

    champion.active = !champion.active;
    await champion.save();

    res.json({
      message: `Campeão ${champion.active ? 'ativado' : 'desativado'} com sucesso`,
      champion
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Alternar status featured
exports.toggleFeatured = async (req, res) => {
  try {
    const champion = await Champion.findById(req.params.id);

    if (!champion) {
      return res.status(404).json({ message: 'Campeão não encontrado' });
    }

    champion.featured = !champion.featured;
    await champion.save();

    res.json({
      message: `Campeão ${champion.featured ? 'adicionado aos' : 'removido dos'} destaques`,
      champion
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};