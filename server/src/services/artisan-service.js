/**
 * @file artisan-service.js
 * @description Récupération des données de l'artisan
 */
const { Artisan, Ville, Specialite, Categorie } = require("../models");

// nécessaire pour utiliser Op.eq (Operator = ...)
const { Op } = require("sequelize");

/**
 * @async
 * @function artisanService
 * @param {Number} id
 * @returns {Promise<Object|null>}
 * @description Retourne l'objet relatif à l'artisan || null
 */
const artisanService = async (id) => {
  return await Artisan.findOne({
    where: {
      ID_ARTISAN: { [Op.eq]: id },
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
};

module.exports = artisanService;
