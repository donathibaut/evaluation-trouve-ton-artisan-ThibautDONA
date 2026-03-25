import { Link, useNavigate } from "react-router-dom";
import useNavbarArtisans from "../../services/Artisans/useNavbarArtisans";
import cleanUrl from "../../utils/cleanUrl";
import searchHandler from "../../utils/handlers/searchHandler";
import { useState } from "react";

import Logo from "../../assets/img/Logo.png";
import "./Nav.scss";

export default function Nav() {
  const { cat, loading } = useNavbarArtisans();

  // nécessaire pour le fonctionnement de la searchbar
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <Link className="logoLink navbar-brand" to="/">
            <img className="logo" src={Logo} alt="Trouve ton artisan !" />
          </Link>
          <div>
            <div className="bsMenus">
              {/* Ouvrir le menu loupe */}
              {isOpen ? (
                <button
                  className="navbar-toggler"
                  type="button"
                  style={{ pointerEvents: "none" }}
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasSearchBar"
                  aria-controls="offcanvasNavbar"
                  aria-label="Toggle navigation"
                >
                  <i
                    className="bi bi-search"
                    style={{ visibility: "hidden" }}
                  ></i>
                </button>
              ) : (
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasSearchBar"
                  aria-controls="offcanvasNavbar"
                  aria-label="Toggle navigation"
                >
                  <i className="bi bi-search"></i>
                </button>
              )}
              {/* Ouvrir le menu burger */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <i className="bi bi-x-lg"></i>
                ) : (
                  <i className="bi bi-justify-left"></i>
                )}
              </button>
            </div>
            {/* Pour la Barre de recherches */}
            <div className="catNSearch">
              <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="offcanvasSearchBar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-body">
                  {/* Barre de recherche */}
                  <form
                    className="searchBar"
                    onSubmit={(event) => searchHandler(event, input, navigate)}
                  >
                    <input
                      className="searchBar"
                      type="text"
                      placeholder="Nom de l'artisan..."
                      // mise à jour dynamique quand l'utilisateur écrit
                      value={input}
                      onChange={(event) => setInput(event.target.value)}
                      required
                    />
                    <button type="submit">
                      <i className="bi bi-search"></i>
                    </button>
                  </form>
                </div>
              </div>
              {/* Pour les Catégories */}
              <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-body">
                  <ul className="categories navbar-nav justify-content-end flex-grow-1 pe-3">
                    {/* La database alimente les liens de navigation sur le site */}
                    {loading ? (
                      <li className="nav-item">Chargement en cours...</li>
                    ) : (
                      cat.map((categorie) => {
                        return (
                          <li
                            data-bs-dismiss="offcanvas"
                            className="nav-item"
                            key={categorie.ID_CATEGORIE}
                          >
                            <Link
                              className="nav-link active"
                              onClick={() => setIsOpen(!isOpen)}
                              to={{
                                pathname: "/results",
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
