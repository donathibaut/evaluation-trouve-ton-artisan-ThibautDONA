import TopArtisansList from "../../components/Artisans/TopArtisansList";
import useTopArtisans from "../../services/topArtisans/useTopArtisans";

export default function Accueil() {
  const { top, loading } = useTopArtisans();
  return (
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
        <TopArtisansList top={top} loading={loading} />
      </section>
    </main>
  );
}
