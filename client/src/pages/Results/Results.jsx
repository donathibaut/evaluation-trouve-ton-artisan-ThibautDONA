import { Link } from "react-router-dom";

export default function Results() {
  return (
    <main>
      <section className="searchWord">
        <h1>Résultats pour ""</h1>
      </section>
      <section className="listResults">
        <Link to="/artisan">
          <ul>
            <li>
              <h2>Artisan</h2>
            </li>
            <li>note</li>
            <li>spécialité</li>
            <li>localisation</li>
          </ul>
        </Link>
        <Link to="/artisan">
          <ul>
            <li>
              <h2>Artisan</h2>
            </li>
            <li>note</li>
            <li>spécialité</li>
            <li>localisation</li>
          </ul>
        </Link>
        <Link to="/artisan">
          <ul>
            <li>
              <h2>Artisan</h2>
            </li>
            <li>note</li>
            <li>spécialité</li>
            <li>localisation</li>
          </ul>
        </Link>
      </section>
    </main>
  );
}
