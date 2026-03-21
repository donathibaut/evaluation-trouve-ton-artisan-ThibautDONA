/**
 * @file Ville.js
 * @description Modèle Ville
 */

const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

/**
 * @module Ville
 * @description Modèle de la table "ville"
 */
const Ville = sequelize.define(
  "ville",
  {
    ID_VILLE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nom_ville: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
);

module.exports = Ville;
