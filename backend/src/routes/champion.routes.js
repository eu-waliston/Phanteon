const express = require("express");
const router = express.Router();
const championController = require("../controllers/champion.controller");
const { auth, isAdmin } = require("../middleware/auth");
const upload = require("../middleware/upload");

// Rotas públicas
router.get("/", championController.getAllChampions);
router.get("/active", championController.getActiveChampions);
router.get("/featured", championController.getFeaturedChampions);
router.get("/search", championController.searchChampions);
router.get("/role/:role", championController.getChampionsByRole);
router.get("/name/:name", championController.getChampionByName);
router.get("/:id", championController.getChampionById);

// Rotas protegidas (admin)
router.post(
  "/",
  auth,
  isAdmin,
  upload.fields([
    { name: "splashArt", maxCount: 1 },
    { name: "icon", maxCount: 1 },
  ]),
  championController.createChampion
);

router.put(
  "/:id",
  auth,
  isAdmin,
  upload.fields([
    { name: "splashArt", maxCount: 1 },
    { name: "icon", maxCount: 1 },
  ]),
  championController.updateChampion
);

router.delete("/:id", auth, isAdmin, championController.deleteChampion);
router.patch(
  "/:id/toggle-active",
  auth,
  isAdmin,
  championController.toggleActive
);
router.patch(
  "/:id/toggle-featured",
  auth,
  isAdmin,
  championController.toggleFeatured
);

module.exports = router;
