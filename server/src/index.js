/**
 * @file index.js
 * @description Connexion de l'API avec Sequelize
 */

const app = require("./app");
const sequelize = require("./config/config");

// Récupération des modèles
const models = require("./models");

/**
 * Lancement de l'API
 * @async
 * @returns {Promise<void>}
 */
const initApi = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connecté à mysql !");

    await sequelize.sync();
    console.log("Synchronisation réussie !");

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log("Serveur lancé ! Port :", port);
    });
  } catch (err) {
    console.log("Erreur de lancement du serveur :", err.message);
  }
};

initApi();
