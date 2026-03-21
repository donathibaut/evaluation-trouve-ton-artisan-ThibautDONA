/**
 * @file models/index.js
 * @description Déclaration des modèles + associations
 */

// Déclaration des modèles
const Artisan = require("./Artisan");
const Categorie = require("./Categorie");
const Specialite = require("./Specialite");
const Ville = require("./Ville");

// Déclaration des associations entre les tables
//Specialite
Categorie.hasMany(Specialite, { foreignKey: "ID_CATEGORIE" });
Specialite.belongsTo(Categorie, { foreignKey: "ID_CATEGORIE" });
// Artisan
Ville.hasMany(Artisan, { foreignKey: "ID_VILLE" });
Artisan.belongsTo(Ville, { foreignKey: "ID_VILLE" });
Specialite.hasMany(Artisan, { foreignKey: "ID_SPECIALITE" });
Artisan.belongsTo(Specialite, { foreignKey: "ID_SPECIALITE" });

module.exports = {
  Ville,
  Categorie,
  Specialite,
  Artisan,
};
