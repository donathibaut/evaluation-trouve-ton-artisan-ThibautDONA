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
    const categorie = req.query.cat;

    let filter = {};
    /*
     *  s'il y a une catégorie précisée dans l'url ("?cat=") -> on la sélectionne pour les résultats de recherche
     *  sinon on prend le nom et l'id de chaque catégorie pour les liens de la navbar
     */
    if (categorie) {
      filter = {
        where: {
          nom_cat: { [Op.like]: `%${categorie}%` },
        },
        include: [
          {
            model: Specialite,
            include: [
              {
                model: Artisan,
                include: [{ model: Ville }],
              },
            ],
          },
        ],
        order: [[Specialite, Artisan, "nom_artisan", "ASC"]],
      };
    } else {
      filter = {
        attributes: ["ID_CATEGORIE", "nom_cat"],
        order: [["nom_cat", "ASC"]],
      };
    }

    const catList = await Categorie.findAll(filter);

    res.status(200).json({
      message: "Succès",
      catList,
    });
  } catch (err) {
    console.error("Erreur Backend :", err);
    res.status(500).json({
      message: "Erreur serveur",
      error: err.message,
    });
  }
};

module.exports = catArtisans;
