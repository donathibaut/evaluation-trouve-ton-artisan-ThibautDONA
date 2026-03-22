/**
 * @file navbar-controller.js
 * @description Récupération de données à transmettre au fichier "navbar-route.js"
 */
const { Artisan, Ville, Specialite, Categorie } = require("../models");

// nécessaire pour utiliser Op.like (permet des recherches avec des catégories écrites de manière semblable à celles de la database)
const { Op } = require("sequelize");

/**
 * @async
 * @function catArtisans
 * @description Permet de lister les artisans correspondant à la catégorie recherchée
 * @param {Object} req - req.query.cat -> catégorie recherchée depuis les `<Link>` de la navbar
 * @param {Object} res - réponse serveur
 * @returns {Promise<void>} JSON contenant les artisans correspondant à la catégorie
 */
const catArtisans = async (req, res) => {
  try {
    // récupère la catégorie demandée par le <Link> de la navbar via la valeur de "?categorie="
    const categorie = req.query.categorie;

    const catList = await Categorie.findAll({
      where: {
        // [Op.like]: `%${categorie}%` -> on recherche un nom semblable à ce que l'utilisateur a choisi
        nom_cat: { [Op.like]: `%${categorie}%` },
      },
      include: [
        {
          model: Specialite,
          include: [
            {
              model: Artisan,
              include: [
                {
                  model: Ville,
                },
              ],
            },
          ],
        },
      ],
      order: [[Specialite, Artisan, "nom_artisan", "ASC"]],
    });

    res.status(200).json({
      message: "Succès : Données obtenues",
      catList,
    });
  } catch (err) {
    res.status(500).json({
      message: "Erreur : Données non obtenues :",
      error: err.message,
    });
  }
};

module.exports = catArtisans;
