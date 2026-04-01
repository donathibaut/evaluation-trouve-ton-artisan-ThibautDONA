/**
 * @file top-controller.js
 * @description Récupération de données à transmettre au fichier "top-route.js"
 */
const topService = require("../services/top-service");

/**
 * @async
 * @function topArtisans
 * @description Renvoie les 3 artisans les mieux notés
 * @param {Object} req - requête express
 * @param {Object} res - réponse serveur
 * @returns {Promise<void>} JSON contenant les artisans ayant les notes les plus élevées
 */
const topArtisans = async (req, res) => {
  try {
    const { top } = await topService();

    if (top.length === 0) {
      return res.status(404).json({
        message: "Artisans introuvables",
      });
    }

    res.status(200).json({
      message: "Succès : Données obtenues",
      top,
    });
  } catch (err) {
    res.status(500).json({
      message: "Erreur : Données non obtenues :",
      error: err.message,
    });
  }
};

module.exports = topArtisans;
