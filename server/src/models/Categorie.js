/**
 * @file Categorie.js
 * @description Modèle Categorie
 */

const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

/**
 * @module Categorie
 * @description Modèle de la table "Categorie"
 */
const Categorie = sequelize.define(
  "categorie",
  {
    ID_CATEGORIE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nom_cat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
);

module.exports = Categorie;
