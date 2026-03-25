import { Helmet } from "react-helmet-async";
import error404 from "../../../assets/img/error404.png";

import "./Error404.scss";

export default function Error404() {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
        <meta name="description" content="Erreur 404 : Not Found" />
      </Helmet>
      <main className="errorMain">
        <section className="error">
          <img src={error404} alt="erreur 404" />
          <h1>Page non trouvée</h1>
        </section>
      </main>
    </>
  );
}
