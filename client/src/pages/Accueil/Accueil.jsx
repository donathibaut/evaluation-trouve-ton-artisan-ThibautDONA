import { Helmet } from "react-helmet-async";

import TopArtisansList from "../../components/Artisans/TopArtisansList";
import useTopArtisans from "../../services/Artisans/useTopArtisans";

export default function Accueil() {
  const { top, loading } = useTopArtisans();
  return (
    <>
      <Helmet>
        <title>Trouve ton artisan !</title>
        <meta
          name="description"
          content="Sur ce site, vous pourrez trouvez l'artisan que vous cherchez dans la région Auvergne-Rhône-Alpes !"
        />
      </Helmet>
      <main>
        <section className="guide">
          <h1>Comment trouver mon artisan ?</h1>
          <ol>
            <li>Choisir la catégorie d’artisanat dans le menu.</li>
            <li>Choisir un artisan.</li>
            <li>Le contacter via le formulaire de contact.</li>
            <li>Une réponse sera apportée sous 48h.</li>
          </ol>
        </section>
        <section className="list">
          <TopArtisansList top={top} loading={loading}></TopArtisansList>
        </section>
      </main>
    </>
  );
}
