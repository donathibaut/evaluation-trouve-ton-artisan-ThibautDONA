/**
 * @file route404.js
 * @description Middleware destiné à gérer une ressource introuvable
 */
const express = require("express");
const router = express.Router();

router.use((req, res) => {
  res.status(404).json({
    message: "Erreur Serveur : Pas de correspondance",
  });
});

module.exports = router;
