import ExtLink from "../ExtLink";

export default function Footer() {
  return (
    <footer>
      <address>
        <ul>
          <li>
            <ExtLink href="https://maps.app.goo.gl/4yyKiW7mV9J8knXPA">
              101 cours Charlemagne CS 20033 69269 LYON CEDEX 02 France
            </ExtLink>
          </li>
          <li>
            <ExtLink href="tel:0426734000">+33 (0)4 26 73 40 00</ExtLink>
          </li>
        </ul>
      </address>
      <ul>
        <li>
          <ExtLink href="">Mentions légales</ExtLink>
        </li>
        <li>
          <ExtLink href="">Données personnelles</ExtLink>
        </li>
        <li>
          <ExtLink href="">Accessibilité</ExtLink>
        </li>
        <li>
          <ExtLink href="">Cookies</ExtLink>
        </li>
      </ul>
    </footer>
  );
}
