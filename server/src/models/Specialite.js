/**
 * @file Specialite.js
 * @description Modèle Specialite
 */

const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

/**
 * @module Specialite
 * @description Modèle de la table "ville"
 */
const Specialite = sequelize.define(
  "specialite",
  {
    ID_SPECIALITE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nom_spe: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // Foreign Keys
    ID_CATEGORIE: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
);

module.exports = Specialite;
