/**
 * @function cleanUrl
 * @param {String} url - à nettoyer des accents
 * @returns {String}
 * @description nettoie les URL des accents
 */
export default function cleanUrl(url) {
  return url
    ?.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}
