import { Helmet } from "react-helmet-async";

import "../Legal.scss";

export default function Accessibilite() {
  return (
    <>
      <Helmet>
        <title>Accessibilité</title>
        <meta name="description" content="Page dédiée à l'accessibilité" />
      </Helmet>
      <main>
        <section>
          <h1 className="construct">Page en construction...</h1>
        </section>
      </main>
    </>
  );
}
