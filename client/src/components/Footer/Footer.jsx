import ExtLink from "../ExtLink";
import { Link } from "react-router-dom";

import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <address>
        <ul>
          <li>
            <ExtLink
              className="loc"
              href="https://maps.app.goo.gl/4yyKiW7mV9J8knXPA"
            >
              101 cours Charlemagne<br></br>CS 20033 69269<br></br>LYON CEDEX 02
              <br></br>France
            </ExtLink>
          </li>
          <li>
            <ExtLink href="tel:0426734000">+33 (0)4 26 73 40 00</ExtLink>
          </li>
        </ul>
      </address>
      <ul className="legalList">
        <li>
          <Link to="/mentions-legales">Mentions légales</Link>
        </li>
        <li>
          <Link to="/donnees-personnelles">Données personnelles</Link>
        </li>
        <li>
          <Link to="/accessibilite">Accessibilité</Link>
        </li>
        <li>
          <Link to="/cookies">Cookies</Link>
        </li>
      </ul>
    </footer>
  );
}
