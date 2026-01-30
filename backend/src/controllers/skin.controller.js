const Skin = require('../models/Skin.model');

// Buscar todas as skins
exports.getAllSkins = async (req, res) => {
  try {
    const skins = await Skin.find().populate('champion', 'name');
    res.json(skins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Buscar skins por campeão
exports.getSkinsByChampion = async (req, res) => {
  try {
    const skins = await Skin.find({ championName: req.params.championName });
    res.json(skins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Buscar uma skin específica
exports.getSkinById = async (req, res) => {
  try {
    const skin = await Skin.findById(req.params.id);
    if (!skin) {
      return res.status(404).json({ message: 'Skin não encontrada' });
    }
    res.json(skin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Criar nova skin
exports.createSkin = async (req, res) => {
  try {
    const skinData = {
      ...req.body,
      splashArt: req.file ? `/uploads/${req.file.filename}` : req.body.splashArt
    };

    const skin = new Skin(skinData);
    const newSkin = await skin.save();
    res.status(201).json(newSkin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Atualizar skin
exports.updateSkin = async (req, res) => {
  try {
    const skinData = { ...req.body };

    if (req.file) {
      skinData.splashArt = `/uploads/${req.file.filename}`;
    }

    const skin = await Skin.findByIdAndUpdate(
      req.params.id,
      skinData,
      { new: true, runValidators: true }
    );

    if (!skin) {
      return res.status(404).json({ message: 'Skin não encontrada' });
    }

    res.json(skin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Deletar skin
exports.deleteSkin = async (req, res) => {
  try {
    const skin = await Skin.findByIdAndDelete(req.params.id);

    if (!skin) {
      return res.status(404).json({ message: 'Skin não encontrada' });
    }

    res.json({ message: 'Skin deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};