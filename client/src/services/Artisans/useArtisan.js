/**
 * @file useArtisan.js
 * @description Fournit les données de l'artisan
 */

import { useState, useEffect } from "react";
import { fetchArtisanRoute } from "../api";

/**
 * @function useArtisan
 * @param {Number} chosenId - id utilisateur
 * @returns {Object}
 * @returns {Array} artisan - retourne les données de l'artisan sous forme de tableau
 * @returns {Boolean} loading - retourne l'état du chargement
 * @description Fournit les données de l'artisan
 */
export default function useArtisan(chosenId) {
  // gestion de l'artisan sélectionné
  const [artisan, setArtisan] = useState([]);
  // gestion de l'état du message de chargement des données
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /**
     * @async
     * @function getArtisan
     * @returns {Promise<void>}
     * @description Fournit les données de l'artisan
     */
    const getArtisan = async () => {
      try {
        const data = await fetchArtisanRoute(chosenId);
        if (data.artisanData) {
          setArtisan(data.artisanData);
        } else {
          setArtisan([]);
        }
        setLoading(false);
      } catch (err) {
        console.error("La requête n'a pas abouti :", err);
        setLoading(false);
      }
    };
    getArtisan();
  }, [chosenId]);

  return { artisan, loading };
}
