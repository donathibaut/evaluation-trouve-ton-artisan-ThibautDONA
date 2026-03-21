/**
 * @file top-controller.js
 * @description Récupération de données à transmettre au fichier "top-route.js"
 */
const { Artisan, Ville, Specialite } = require("../models");

// nécessaire pour utiliser Op.gt ("opérateur supérieur à ...")
const { Op } = require("sequelize");

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
    // récupération des artisans
    const topListArtisans = await Artisan.findAll({
      where: {
        // [Op.gt]: 4.7 -> Operator greater than 4.7
        note: { [Op.gt]: 4.7 },
        top: true,
      },
      include: [Ville, Specialite],
      // Artisans -> listés dans l'ordre desc selon la note (max: 3 artisans listés)
      order: [["note", "DESC"]],
      limit: 3,
    });

    if (topListArtisans.length === 0) {
      return res.status(404).json({
        message: "Artisans introuvables",
      });
    }

    res.status(200).json({
      message: "Succès : Données obtenues",
      topListArtisans,
    });
  } catch (err) {
    res.status(500).json({
      message: "Erreur : Données non obtenues :",
      error: err.message,
    });
  }
};

module.exports = topArtisans;
