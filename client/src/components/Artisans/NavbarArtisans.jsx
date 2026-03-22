import { Link } from "react-router-dom";

/**
 * @function NavbarArtisans
 * @param {Object} props
 * @param {Array} props.cat - tableau contenant la liste des artisans correspondant à la catégorie recherchée
 * @param {Boolean} props.loading - permet de définir l'état du chargement
 * @returns {JSX.Element}
 * @description Gestion du chargement et préparation de l'affichage des résultats
 */
export default function NavbarArtisans({ cat, loading }) {
  return loading ? (
    <p className="resultsLoading">Chargement en cours...</p>
  ) : (
    cat[0]?.specialites.map((spe) => {
      return spe.artisans.map((artisan) => {
        return (
          <Link
            className="result"
            to={`/artisan?id=${artisan.ID_ARTISAN}`}
            key={artisan.ID_ARTISAN}
          >
            <ul>
              <li>
                <h2>{artisan.nom_artisan}</h2>
              </li>
              <li>{artisan.note}</li>
              <li>{spe.nom_spe}</li>
              <li>{artisan.ville?.nom_ville}</li>
            </ul>
          </Link>
        );
      });
    })
  );
}
