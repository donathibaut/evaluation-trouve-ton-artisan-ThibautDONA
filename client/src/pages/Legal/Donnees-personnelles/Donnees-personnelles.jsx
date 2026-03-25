import { Helmet } from "react-helmet-async";

import "../Legal.scss";

export default function DonneesPersonnelles() {
  return (
    <>
      <Helmet>
        <title>Données personnelles</title>
        <meta
          name="description"
          content="Page dédiée aux données personnelles"
        />
      </Helmet>
      <main>
        <section>
          <h1 className="construct">Page en construction...</h1>
        </section>
      </main>
    </>
  );
}
