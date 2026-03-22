/**
 * @file artisan-route.js
 * @description Routes liées aux données de l'artisan
 */
const express = require("express");
const router = express.Router();

// import du controller
const infoArtisan = require("../controllers/artisan-controller");

// appel du controller
router.get("/", infoArtisan);

module.exports = router;
