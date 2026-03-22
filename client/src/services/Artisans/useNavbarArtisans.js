/**
 * @file useNavbarArtisans.js
 * @description Fournit la catégorie d'artisans
 */

import { useState, useEffect } from "react";
import { fetchNavbarRoute } from "../api";

/**
 * @function useNavbarArtisans
 * @returns {Object}
 * @returns {Array} cat - retourne la catégorie sous forme de tableau
 * @returns {Boolean} loading - retourne l'état du chargement
 * @description Fournit la catégorie d'artisans
 */
export default function useNavbarArtisans(chosenCat) {
  // gestion de l'état de la catégorie
  const [cat, setCat] = useState([]);
  // gestion de l'état du message de chargement des données
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /**
     * @async
     * @function getCat
     * @returns {Promise<void>}
     * @description Fournit la catégorie des artisans à `cat`
     */
    const getCat = async () => {
      try {
        const data = await fetchNavbarRoute(chosenCat);
        if (data.catList) {
          setCat(data.catList);
        } else {
          setCat([]);
        }
        setLoading(false);
      } catch (err) {
        console.error("La requête n'a pas abouti :", err);
        setLoading(false);
      }
    };
    getCat();
  }, [chosenCat]);

  return { cat, loading };
}
