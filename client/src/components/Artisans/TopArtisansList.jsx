/**
 *
 * @returns
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
