/**
 * @file search-service.js
 * @description Liste les artisans correspondant à la recherche
 */
const { Artisan, Ville, Specialite } = require("../models");

// nécessaire pour utiliser Op.like (permet des recherches avec des noms écrits partiellement)
const { Op } = require("sequelize");

/**
 * @async
 * @function searchService
 * @param {String} search
 * @returns {Promise<Object|null>}
 * @description Retourne l'objet relatif à la recherche || null
 */
const searchService = async (search) => {
  const research = await Artisan.findAll({
    where: {
      // [Op.like]: `%${search}%` -> on recherche un nom semblable à ce que l'utilisateur a écrit (s'il écrit le début, par exemple)
      nom_artisan: { [Op.like]: `%${search}%` },
    },
    include: [Ville, Specialite],
    order: [["nom_artisan", "ASC"]],
  });

  return { research };
};

module.exports = searchService;
