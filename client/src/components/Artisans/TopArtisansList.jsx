/**
 * @function TopArtisansList
 * @param {Object} props
 * @param {Array} props.top - tableau contenant les artisans les mieux notés
 * @param {Boolean} props.loading - permet de définir l'état du chargement
 * @returns {JSX.Element}
 * @description Gestion du chargement et préparation de l'affichage du classement des artisans
 */
export default function TopArtisansList({ top, loading }) {
  return loading ? (
    <p className="topLoading">Chargement en cours...</p>
  ) : (
    top.map((artisan) => {
      return (
        <ul className="topList" key={artisan.ID_ARTISAN}>
          <li>
            <h2>{artisan.nom_artisan}</h2>
          </li>
          <li>{artisan.note}</li>
          <li>{artisan.specialite?.nom_spe}</li>
          <li>{artisan.ville?.nom_ville}</li>
        </ul>
      );
    })
  );
}
