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

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("API is working !"));

module.exports = app;
