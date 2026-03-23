import { Link } from "react-router-dom";

/**
 * @function SearchArtisans
 * @param {Object} props
 * @param {Array} props.artisan - tableau contenant les résultats de la recherche
 * @param {Boolean} props.loading - permet de définir l'état du chargement
 * @param {String} props.message - message pour guider l'utilisateur
 * @returns {JSX.Element}
 * @description Gestion du chargement et préparation de l'affichage des résultats
 */
export default function SearchArtisans({ artisan, loading, message }) {
  if (loading) {
    return <p className="loading">Chargement en cours...</p>;
  }

  // en cas d'entrée non valide (pas de tableau artisan récupéré || tableau vide)
  if (message && (!artisan || artisan?.length === 0)) {
    return <p className="noMatch">{message}</p>;
  }

  return artisan.map((element) => {
    return (
      <Link
        className="result"
        to={`/artisan?id=${element.ID_ARTISAN}`}
        key={element.ID_ARTISAN}
      >
        <ul>
          <li>
            <h2>{element.nom_artisan}</h2>
          </li>
          <li>{element.note}</li>
          <li>{element.specialite?.nom_spe}</li>
          <li>{element.ville?.nom_ville}</li>
        </ul>
      </Link>
    );
  });
}
