import ExtLink from "../ExtLink";

export default function Nav() {
  return (
    <header>
      <nav>
        <ExtLink href="">
          <img src="" alt="Trouve ton artisan !" />
        </ExtLink>
        <ul>
          <li>loupe</li>
          <li>
            <ul>
              {/** remplacer par données du tableau de BDD */}
              <li>
                <ExtLink href="">Bâtiment</ExtLink>
              </li>
              <li>
                <ExtLink href="">Sevices</ExtLink>
              </li>
              <li>
                <ExtLink href="">Fabrication</ExtLink>
              </li>
              <li>
                <ExtLink href="">Alimentation</ExtLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
