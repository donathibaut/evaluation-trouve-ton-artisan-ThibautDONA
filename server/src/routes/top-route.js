/**
 * @file top-route.js
 * @description Routes liées au classement des artisans
 */
const express = require("express");
const router = express.Router();

// import du controller
const topArtisans = require("../controllers/top-controller");

// appel du controller
router.get("/", topArtisans);

module.exports = router;
