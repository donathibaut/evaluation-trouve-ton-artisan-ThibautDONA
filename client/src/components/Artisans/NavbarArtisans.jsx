import { Link } from "react-router-dom";

import ArtisanRating from "./Rating/ArtisanRating";

/**
 * @function NavbarArtisans
 * @param {Object} props
 * @param {Array} props.cat - tableau contenant la liste des artisans correspondant à la catégorie recherchée
 * @param {Boolean} props.loading - permet de définir l'état du chargement
 * @returns {JSX.Element}
 * @description Gestion du chargement et préparation de l'affichage des résultats
 */
export default function NavbarArtisans({ cat, loading }) {
  if (loading) {
    return <p className="loading">Chargement en cours...</p>;
  }

  // vérifie si les données sont récupérées
  if (!cat || cat?.length === 0 || !cat[0]?.specialites) {
    return <p className="noMatch">Une erreur est survenue</p>;
  }

  return cat[0]?.specialites.map((spe) => {
    return spe.artisans?.map((artisan) => {
      return (
        <Link
          // si ("top" : false) -> background rouge
          className={`result card resultCard ${artisan.top ? "" : "notTop"}`}
          to={`/artisan?id=${artisan.ID_ARTISAN}`}
          key={artisan.ID_ARTISAN}
        >
          <ul className="card-body cardList">
            <li>
              <h2>{artisan.nom_artisan}</h2>
            </li>
            <li>
              <ArtisanRating note={artisan.note}></ArtisanRating>
            </li>
            <li className="detailText">{spe.nom_spe}</li>
            <li className="detailText">{artisan.ville?.nom_ville}</li>
          </ul>
        </Link>
      );
    });
  });
}
