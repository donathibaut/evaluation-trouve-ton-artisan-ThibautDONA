/**
 * @file app.js
 * @description Mise en place du module express
 */

const express = require("express");
const cors = require("cors");

/**
 * Initialisation d'Express
 * @module app
 */
const app = express();

const artisanRoute = require("./routes/artisan-route");
const topRoute = require("./routes/top-route");
const searchRoute = require("./routes/search-route");
const navbarRoute = require("./routes/navbar-route");
const route404 = require("./middlewares/route404");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/artisan", artisanRoute);
app.use("/api/top", topRoute);
app.use("/api/search", searchRoute);
app.use("/api/nav", navbarRoute);

// middlewares
app.use(route404);

module.exports = app;
