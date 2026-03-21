/**
 * @file search-controller.js
 * @description Récupération de données à transmettre au fichier "search-route.js"
 */
const { Artisan, Ville, Specialite } = require("../models");

// nécessaire pour utiliser Op.like (permet des recherches avec des noms écrits partiellement)
const { Op } = require("sequelize");

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

    const research = await Artisan.findAll({
      where: {
        // [Op.like]: `%${search}%` -> on recherche un nom semblable à ce que l'utilisateur a écrit (s'il écrit le début, par exemple)
        nom_artisan: { [Op.like]: `%${search}%` },
      },
      include: [Ville, Specialite],
      order: [["nom_artisan", "ASC"]],
    });

    if (research.length === 0) {
      return res.status(404).json({
        message: "Artisans introuvables",
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
