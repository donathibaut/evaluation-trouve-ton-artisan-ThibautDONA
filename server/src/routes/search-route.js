/**
 * @file search-route.js
 * @description Routes liées à la recherche
 */
const express = require("express");
const router = express.Router();

// import du controller
const searchArtisans = require("../controllers/search-controller");

// appel du controller
router.get("/", searchArtisans);

module.exports = router;
