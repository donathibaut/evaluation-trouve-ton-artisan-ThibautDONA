/**
 * @file navbar-controller.js
 * @description Récupération de données à transmettre au fichier "navbar-route.js"
 */
const navbarService = require("../services/navbar-service");

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

    const { catList } = await navbarService(categorie);

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
