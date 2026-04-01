/**
 * @file artisan-controller.js
 * @description Récupération de données à transmettre au fichier "artisan-route.js"
 */
const artisanService = require("../services/artisan-service");

/**
 * @async
 * @function infoArtisans
 * @description Renvoie les données correspondantes aux champs associés à la Primary Key
 * @param {Object} req - Primary Key transmise via req.query.id
 * @param {Object} res - réponse serveur
 * @returns {Promise<void>} JSON contenant les données liées à la Primary Key (champ1, champ2, ...)
 */
const infoArtisan = async (req, res) => {
  try {
    // récupère l'id de l'artisan demandé via la valeur de "?id="
    const id = req.query.id;

    const artisanData = await artisanService(id);

    if (!artisanData) {
      return res.status(404).json({
        message: "Artisan introuvable",
      });
    }

    res.status(200).json({
      message: "Succès : Données obtenues",
      artisanData,
    });
  } catch (err) {
    res.status(500).json({
      message: "Erreur : Données non obtenues :",
      error: err.message,
    });
  }
};

module.exports = infoArtisan;
