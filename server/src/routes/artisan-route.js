/**
 * @file artisan-route.js
 * @description Routes liées aux données de l'artisan
 */
const express = require("express");
const router = express.Router();

// import du controller
const infoArtisan = require("../controllers/artisan-controller");

// récupération de l'id -> appel du controller
router.get("/:id", infoArtisan);

module.exports = router;
