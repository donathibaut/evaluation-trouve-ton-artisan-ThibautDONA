/**
 * @file searchHandler.js
 * @description Redirige l'utilisateur à partir de sa recherche
 */

/**
 * @function searchHandler
 * @param {SubmitEvent} event - soumission de la recherche
 * @param {String} value - écrit par l'utilisateur
 * @param {Function} redirect - fonction de navigation
 * @returns {void}
 * @description Redirige l'utilisateur à partir de sa recherche
 */
export default function searchHandler(event, value, redirect) {
  event.preventDefault();
  // supprime les espaces entrés par mégarde dans la searchbar
  const artisan = value.trim();

  if (artisan) {
    redirect(`/results?artisan=${artisan}`);
  }
}
