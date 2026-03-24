/**
 * @file Artisan.js
 * @description Modèle Artisan
 */

const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

/**
 * @module Artisan
 * @description Modèle de la table "artisan"
 */
const Artisan = sequelize.define(
  "artisan",
  {
    ID_ARTISAN: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nom_artisan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    note: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    a_propos: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    site_web: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    top: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    // Foreign Keys
    ID_SPECIALITE: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ID_VILLE: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
);

module.exports = Artisan;
