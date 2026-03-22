import { Link } from "react-router-dom";

export default function Nav() {
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
              {/** remplacer par données du tableau de BDD */}
              <li>
                <Link to={{ pathname: "/results", search: "?cat=batiment" }}>
                  Bâtiment
                </Link>
              </li>
              <li>
                <Link to={{ pathname: "/results", search: "?cat=services" }}>
                  Sevices
                </Link>
              </li>
              <li>
                <Link to={{ pathname: "/results", search: "?cat=fabrication" }}>
                  Fabrication
                </Link>
              </li>
              <li>
                <Link
                  to={{ pathname: "/results", search: "?cat=alimentation" }}
                >
                  Alimentation
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
