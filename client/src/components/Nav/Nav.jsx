import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src="" alt="Trouve ton artisan !" />
        </Link>
        <ul>
          <li>
            <Link to="/results">loupe</Link>
          </li>
          <li>
            <ul>
              {/** remplacer par données du tableau de BDD */}
              <li>
                <Link to="/results">Bâtiment</Link>
              </li>
              <li>
                <Link to="/results">Sevices</Link>
              </li>
              <li>
                <Link to="/results">Fabrication</Link>
              </li>
              <li>
                <Link to="/results">Alimentation</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
