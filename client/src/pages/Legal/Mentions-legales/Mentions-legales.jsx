import { Helmet } from "react-helmet-async";

import "../Legal.scss";

export default function MentionsLegales() {
  return (
    <>
      <Helmet>
        <title>Mentions légales</title>
        <meta name="description" content="Page dédiée aux mentions légales" />
      </Helmet>
      <main>
        <section>
          <h1 className="construct">Page en construction...</h1>
        </section>
      </main>
    </>
  );
}
