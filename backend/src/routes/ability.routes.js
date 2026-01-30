const express = require('express');
const router = express.Router();
const abilityController = require('../controllers/ability.controller');
const { auth, isAdmin } = require('../middleware/auth');

// Rotas públicas
router.get('/', abilityController.getAllAbilities);
router.get('/champion/:championName', abilityController.getAbilitiesByChampion);
router.get('/champion-id/:championId', abilityController.getAbilitiesByChampionId);
router.get('/key/:key', abilityController.getAbilitiesByKey);
router.get('/:id', abilityController.getAbilityById);

// Rotas protegidas (admin)
router.post('/', auth, isAdmin, abilityController.createAbility);
router.put('/:id', auth, isAdmin, abilityController.updateAbility);
router.delete('/:id', auth, isAdmin, abilityController.deleteAbility);
router.delete('/champion/:championId', auth, isAdmin, abilityController.deleteAbilitiesByChampion);

module.exports = router;