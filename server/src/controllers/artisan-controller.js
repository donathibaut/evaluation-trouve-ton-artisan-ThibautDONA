/**
 * @file artisan-controller.js
 * @description Récupération de données à transmettre au fichier "artisan-route.js"
 */
const { Artisan, Ville, Specialite, Categorie } = require("../models");

/**
 * @async
 * @function infoArtisans
 * @description Renvoie les données correspondantes aux champs associés à la Primary Key
 * @param {Object} req - Primary Key transmise via req.params.id
 * @param {Object} res - réponse serveur
 * @returns {Promise<void>} JSON
 */
const infoArtisan = async (req, res) => {
  try {
    // récupération de l'artisan
    const artisan = await Artisan.findOne({
      where: {
        ID_ARTISAN: req.params.id,
      },
      include: [
        { model: Ville },
        {
          model: Specialite,
          include: [
            {
              model: Categorie,
            },
          ],
        },
      ],
    });

    if (!artisan) {
      return res.status(404).json({
        message: "Artisan introuvable",
      });
    }

    res.status(200).json({
      message: "Succès : Données obtenues",
      artisan,
    });
  } catch (err) {
    res.status(500).json({
      message: "Erreur : Données non obtenues :",
      error: err.message,
    });
  }
};

module.exports = infoArtisan;
