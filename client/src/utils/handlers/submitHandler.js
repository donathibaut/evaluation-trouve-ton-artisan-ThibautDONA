/**
 * @file submitHandler.js
 * @description Renvoie une alerte à la soumission du formulaire
 */

/**
 * @function submitHandler
 * @param {SubmitEvent} event - soumission du formulaire
 * @returns {void}
 * @description Renvoie une alerte à la soumission du formulaire
 */
export default function submitHandler(event) {
  event.preventDefault();
  alert("Envoi de mails non paramétré");
}
