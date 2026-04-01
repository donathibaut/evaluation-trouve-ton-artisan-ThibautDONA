/**
 * @file search-controller.js
 * @description Récupération de données à transmettre au fichier "search-route.js"
 */
const searchService = require("../services/search-service");

/**
 * @async
 * @function searchArtisans
 * @description Permet de rechercher les artisans par nom
 * @param {Object} req - requête express
 * @param {Object} res - réponse serveur
 * @returns {Promise<void>} JSON contenant les artisans correspondant à la recherche
 */
const searchArtisans = async (req, res) => {
  try {
    // récupère la valeur de "?artisan=" lorsque la recherche est soumise
    const search = req.query.artisan;

    if (!search) {
      return res.status(400).json({
        message: "Veuillez formuler une demande valide",
      });
    }

    const { research } = await searchService(search);

    if (research.length === 0) {
      return res.status(200).json({
        message: "Aucun résultat pour ce nom",
        research: [],
      });
    }

    res.status(200).json({
      message: "Succès : Données obtenues",
      research,
    });
  } catch (err) {
    res.status(500).json({
      message: "Erreur : Données non obtenues :",
      error: err.message,
    });
  }
};

module.exports = searchArtisans;
