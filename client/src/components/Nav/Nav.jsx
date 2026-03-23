import { Link, useNavigate } from "react-router-dom";
import useNavbarArtisans from "../../services/Artisans/useNavbarArtisans";
import cleanUrl from "../../utils/cleanUrl";
import searchHandler from "../../utils/handlers/searchHandler";
import { useState } from "react";

export default function Nav() {
  const { cat, loading } = useNavbarArtisans();

  // nécessaire pour le fonctionnement de la searchbar
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  return (
    <header>
      <nav>
        <Link to="/">
          <img alt="Trouve ton artisan !" />
        </Link>
        <ul>
          <li>
            {/* Barre de recherche */}
            <form
              className="searchBar"
              onSubmit={(event) => searchHandler(event, input, navigate)}
            >
              <input
                type="text"
                placeholder="Nom de l'artisan..."
                // mise à jour dynamique quand l'utilisateur écrit
                value={input}
                onChange={(event) => setInput(event.target.value)}
                required
              />
              <button type="submit">loupe</button>
            </form>
          </li>
          <li>
            <ul>
              {/* La database alimente les liens de navigation sur le site */}
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
