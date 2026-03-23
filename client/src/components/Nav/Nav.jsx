import { Link } from "react-router-dom";
import useNavbarArtisans from "../../services/Artisans/useNavbarArtisans";
import cleanUrl from "../../utils/cleanUrl";

export default function Nav() {
  const { cat, loading } = useNavbarArtisans();
  return (
    <header>
      <nav>
        <Link to="/">
          <img alt="Trouve ton artisan !" />
        </Link>
        <ul>
          <li>
            <Link to="/results">loupe</Link>
          </li>
          <li>
            <ul>
              {/*La database alimente les liens de navigation sur le site*/}
              {loading ? (
                <li>Chargement en cours...</li>
              ) : (
                cat.map((categorie) => {
                  return (
                    <li key={categorie.ID_CATEGORIE}>
                      <Link
                        to={{
                          pathname: "/results",
                          // On utilise bien nom_cat et on sécurise avec ?.
                          search: `?cat=${cleanUrl(categorie.nom_cat)}`,
                        }}
                      >
                        {categorie.nom_cat}
                      </Link>
                    </li>
                  );
                })
              )}
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
