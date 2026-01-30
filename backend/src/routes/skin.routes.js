const express = require('express');
const router = express.Router();
const skinController = require('../controllers/skin.controller');
const upload = require('../middleware/upload');

// Rotas para skins
router.get('/', skinController.getAllSkins);
router.get('/champion/:championName', skinController.getSkinsByChampion);
router.get('/:id', skinController.getSkinById);
router.post('/', upload.single('splashArt'), skinController.createSkin);
router.put('/:id', upload.single('splashArt'), skinController.updateSkin);
router.delete('/:id', skinController.deleteSkin);

module.exports = router;