import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src="" alt="Trouve ton artisan !" />
        </Link>
        <ul>
          <li>loupe</li>
          <li>
            <ul>
              {/** remplacer par données du tableau de BDD */}
              <li>
                <Link to="qdsd">Bâtiment</Link>
              </li>
              <li>
                <Link>Sevices</Link>
              </li>
              <li>
                <Link>Fabrication</Link>
              </li>
              <li>
                <Link>Alimentation</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
