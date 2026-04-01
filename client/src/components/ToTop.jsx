/**
 * @file ToTop.js
 * @description Contient un composant renvoyant l'utilisateur en haut de la page en cas de changement de route
 */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Renvoie en haut de la page en cas de changement de route
 * @component
 * @returns {null} window.scrollTo(0, 0)
 */
export default function ToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
