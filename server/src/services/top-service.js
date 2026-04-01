/**
 * @file top-service.js
 * @description Liste les top artisans
 */
const { Artisan, Ville, Specialite } = require("../models");

// nécessaire pour utiliser Op.gt ("opérateur supérieur à ...")
const { Op } = require("sequelize");

/**
 * @async
 * @function topService
 * @returns {Promise<Object|null>}
 * @description Retourne l'objet relatif aux meilleurs artisans || null
 */
const topService = async () => {
  // récupération des artisans
  const top = await Artisan.findAll({
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

  return { top };
};

module.exports = topService;
