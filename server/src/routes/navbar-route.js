/**
 * @file navbar-route.js
 * @description Routes liées aux Liens de la navbar
 */
const express = require("express");
const router = express.Router();

// import du controller
const catArtisans = require("../controllers/navbar-controller");

// appel du controller
router.get("/", catArtisans);

module.exports = router;
