import { Helmet } from "react-helmet-async";

import "../Legal.scss";

export default function Cookies() {
  return (
    <>
      <Helmet>
        <title>Cookies</title>
        <meta name="description" content="Page dédiée aux cookies" />
      </Helmet>
      <main>
        <section>
          <h1 className="construct">Page en construction...</h1>
        </section>
      </main>
    </>
  );
}
