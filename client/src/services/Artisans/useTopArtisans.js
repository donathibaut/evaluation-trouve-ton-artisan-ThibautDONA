/**
 * @file useTopArtisans.js
 * @description Fournit le classement des artisans
 */

import { useState, useEffect } from "react";
import { fetchTopRoute } from "../api";

/**
 * @function useTopArtisans
 * @returns {Object}
 * @returns {Array} top - retourne le classement sous forme de tableau
 * @returns {Boolean} loading - retourne l'état du chargement
 * @description Fournit le classement des artisans
 */
export default function useTopArtisans() {
  // gestion de l'état de la liste des artisans
  const [top, setTop] = useState([]);
  // gestion de l'état du message de chargement des données
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /**
     * @async
     * @function getTop
     * @returns {Promise<void>}
     * @description Fournit le classement des artisans à `top`
     */
    const getTop = async () => {
      try {
        const data = await fetchTopRoute();
        if (data.topListArtisans) {
          setTop(data.topListArtisans);
        } else {
          setTop([]);
        }
        setLoading(false);
      } catch (err) {
        console.error("La requête n'a pas abouti :", err);
        setLoading(false);
      }
    };
    getTop();
  }, []);

  return { top, loading };
}
