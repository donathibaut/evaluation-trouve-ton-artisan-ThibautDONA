import { useSearchParams } from "react-router-dom";
import NavbarArtisans from "../../components/Artisans/NavbarArtisans";
import useNavbarArtisans from "../../services/Artisans/useNavbarArtisans";

export default function Results() {
  // récupère le paramètre "?cat=" de l'URL contenu dans le <Link> de la navbar
  const [searchParams] = useSearchParams();
  const chosenCat = searchParams.get("cat");

  const { cat, loading } = useNavbarArtisans(chosenCat);

  // récupère le nom de la catégorie pour indiquer le résultat à l'utilisateur
  const catName = cat[0]?.nom_cat;
  return (
    <main>
      <section className="searchWord">
        <h1>Résultats pour "{catName}"</h1>
      </section>
      <section className="listResults">
        <NavbarArtisans cat={cat} loading={loading}></NavbarArtisans>
      </section>
    </main>
  );
}
