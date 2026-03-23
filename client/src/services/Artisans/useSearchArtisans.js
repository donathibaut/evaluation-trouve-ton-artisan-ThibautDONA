/**
 * @file useSearchArtisans.js
 * @description Retourne les artisans correspondant à la recherche
 */

import { useState, useEffect } from "react";
import { fetchSearchRoute } from "../api";

/**
 * @function useSearchArtisans
 * @param {String} userSearch - recherche de l'utilisateur
 * @returns {Object}
 * @returns {Array} search - artisan correspondant
 * @returns {Boolean} searchLoading - retourne l'état du chargement
 * @description Retourne les artisans correspondant à la recherche
 */
export default function useSearchArtisans(userSearch) {
  // gestion de l'état de la recherche d'artisan
  const [search, setSearch] = useState([]);
  // gestion de l'état du message de chargement des données
  const [searchLoading, setSearchLoading] = useState(false);
  // message en cas de recherche vide
  const [message, setMessage] = useState("");

  useEffect(() => {
    /**
     * @async
     * @function getName
     * @returns {Promise<void>}
     * @description Fournit l'artisan correspondant à `search`
     */
    const getName = async () => {
      try {
        setMessage("");
        // s'il n'y a pas de recherche
        if (!userSearch) {
          return;
        }

        // s'il n'y a pas assez de caractères inscrits dans la searchbar
        if (userSearch.length < 2) {
          setMessage("Veuillez entrer un nom d'artisan valide");
          setSearch([]);
          return;
        }

        setSearchLoading(true);
        const data = await fetchSearchRoute(userSearch);
        // vérifie data.research et si longueur > 0 ?
        if (data?.research && data.research.length > 0) {
          setMessage("");
          setSearch(data.research);
        } else {
          setMessage("Aucun artisan trouvé");
          setSearch([]);
        }
      } catch (err) {
        console.error("La requête n'a pas abouti :", err);
      }
      setSearchLoading(false);
    };
    getName();
  }, [userSearch]);

  return { search, searchLoading, message };
}
