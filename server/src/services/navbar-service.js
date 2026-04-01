/**
 * @file navbar-service.js
 * @description Liste les artisans correspondant à la catégorie
 */
const { Artisan, Ville, Specialite, Categorie } = require("../models");

// nécessaire pour utiliser Op.like (permet des recherches avec des catégories écrites de manière semblable à celles de la database)
const { Op } = require("sequelize");

/**
 * @async
 * @function navbarService
 * @param {String} categorie
 * @returns {Promise<Object|null>}
 * @description Retourne l'objet relatif à la catégorie || null
 */
const navbarService = async (categorie) => {
  let filter = {};
  /*
    s'il y a une catégorie précisée dans l'url ("?cat=") -> on la sélectionne pour les résultats de recherche
    sinon on prend le nom et l'id de chaque catégorie pour les liens de la navbar
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

  return { catList };
};

module.exports = navbarService;
