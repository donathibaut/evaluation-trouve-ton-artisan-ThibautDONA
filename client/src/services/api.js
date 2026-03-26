/**
 * @file api.js
 * @description Relie REACT et Express
 */

const isProd = window.location.hostname !== "localhost";

const apiURL = isProd
  ? "https://api-trouve-ton-artisan-hbm0.onrender.com/api"
  : "http://localhost:3001/api";

/**
 * @async
 * @function fetchArtisanRoute
 * @param {Number} id - ID_ARTISAN
 * @returns {Promise<Object>} Renvoie le résultat du controller `infoArtisan` de l'api
 */
export const fetchArtisanRoute = async (id) => {
  const res = await fetch(`${apiURL}/artisan?id=${id}`);
  return await res.json();
};

/**
 * @async
 * @function fetchTopRoute
 * @returns {Promise<Object>}
 * @description Renvoie le résultat du controller `topArtisans` de l'api
 */
export const fetchTopRoute = async () => {
  const res = await fetch(`${apiURL}/top`);
  return await res.json();
};

/**
 * @async
 * @function fetchSearchRoute
 * @param {String} search - nom_artisan
 * @returns {Promise<Object>}
 * @description Renvoie le résultat du controller `searchArtisans` de l'api
 */
export const fetchSearchRoute = async (search) => {
  const res = await fetch(`${apiURL}/search?artisan=${search}`);
  return await res.json();
};

/**
 * @async
 * @function fetchNavbarRoute
 * @param {String} chosenCat - nom_cat choisi
 * @returns {Promise<Object>}
 * @description Renvoie le résultat du controller `catArtisans` de l'api
 */
export const fetchNavbarRoute = async (chosenCat) => {
  const url = chosenCat
    ? `${apiURL}/results?cat=${chosenCat}`
    : `${apiURL}/results`;
  const res = await fetch(url);
  return await res.json();
};
