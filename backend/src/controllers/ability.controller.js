const Ability = require('../models/Ability.model');

// Buscar todas as habilidades
exports.getAllAbilities = async (req, res) => {
  try {
    const abilities = await Ability.find().populate('champion', 'name title');
    res.json(abilities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Buscar habilidades por campeão (nome)
exports.getAbilitiesByChampion = async (req, res) => {
  try {
    const abilities = await Ability.find({
      championName: { $regex: new RegExp(req.params.championName, 'i') }
    })
    .sort('order')
    .populate('champion', 'name title');

    res.json(abilities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Buscar habilidades por campeão (ID)
exports.getAbilitiesByChampionId = async (req, res) => {
  try {
    const abilities = await Ability.find({ champion: req.params.championId })
      .sort('order')
      .populate('champion', 'name title');

    res.json(abilities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Buscar habilidades por tecla (P, Q, W, E, R)
exports.getAbilitiesByKey = async (req, res) => {
  try {
    const abilities = await Ability.find({ key: req.params.key.toUpperCase() })
      .populate('champion', 'name title role');

    res.json(abilities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Buscar habilidade por ID
exports.getAbilityById = async (req, res) => {
  try {
    const ability = await Ability.findById(req.params.id)
      .populate('champion', 'name title role');

    if (!ability) {
      return res.status(404).json({ message: 'Habilidade não encontrada' });
    }

    res.json(ability);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Criar nova habilidade
exports.createAbility = async (req, res) => {
  try {
    // Verificar se já existe habilidade com mesma key para o mesmo campeão
    const existingAbility = await Ability.findOne({
      champion: req.body.champion,
      key: req.body.key
    });

    if (existingAbility) {
      return res.status(400).json({
        message: `Já existe uma habilidade com a tecla ${req.body.key} para este campeão`
      });
    }

    const ability = new Ability(req.body);
    const newAbility = await ability.save();

    res.status(201).json(newAbility);
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ message: messages.join(', ') });
    }
    res.status(400).json({ message: error.message });
  }
};

// Atualizar habilidade
exports.updateAbility = async (req, res) => {
  try {
    const ability = await Ability.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!ability) {
      return res.status(404).json({ message: 'Habilidade não encontrada' });
    }

    res.json(ability);
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ message: messages.join(', ') });
    }
    res.status(400).json({ message: error.message });
  }
};

// Deletar habilidade
exports.deleteAbility = async (req, res) => {
  try {
    const ability = await Ability.findByIdAndDelete(req.params.id);

    if (!ability) {
      return res.status(404).json({ message: 'Habilidade não encontrada' });
    }

    res.json({ message: 'Habilidade deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Deletar todas as habilidades de um campeão
exports.deleteAbilitiesByChampion = async (req, res) => {
  try {
    const result = await Ability.deleteMany({ champion: req.params.championId });

    res.json({
      message: `${result.deletedCount} habilidades deletadas com sucesso`,
      deletedCount: result.deletedCount
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};