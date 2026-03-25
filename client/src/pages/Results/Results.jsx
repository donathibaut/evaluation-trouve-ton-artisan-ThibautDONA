import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import NavbarArtisans from "../../components/Artisans/NavbarArtisans";
import SearchArtisans from "../../components/Artisans/SearchArtisans";
import useNavbarArtisans from "../../services/Artisans/useNavbarArtisans";
import useSearchArtisans from "../../services/Artisans/useSearchArtisans";

import "./Results.scss";

export default function Results() {
  // récupère le paramètre "?cat=" de l'URL contenu dans le <Link> de la navbar (Nav.jsx)
  const [searchParams] = useSearchParams();
  const chosenCat = searchParams.get("cat");
  const { cat, loading } = useNavbarArtisans(chosenCat);

  // récupère le paramètre "?artisan=" de l'URL (se référer à la fonction ../../services/utils/handlers/searchHandler.js)
  const chosenArtisan = searchParams.get("artisan");
  const { search, searchLoading, message } = useSearchArtisans(chosenArtisan);

  // récupère le nom de la catégorie/artisan pour indiquer le résultat à l'utilisateur
  const keyWord = chosenCat ? cat[0]?.nom_cat : chosenArtisan;
  return (
    <>
      <Helmet>
        <title>{keyWord ? `"${keyWord}"` : "..."}</title>
        <meta
          name="description"
          content={keyWord ? `Résultats pour : ${keyWord}` : "..."}
        />
      </Helmet>
      <main className="resultats">
        <section className="searchWord">
          <h1 className="searchWordTitle">Résultats pour "{keyWord}"</h1>
        </section>
        <section className="listResults">
          {chosenArtisan && (
            <SearchArtisans
              artisan={search}
              loading={searchLoading}
              message={message}
            ></SearchArtisans>
          )}

          {chosenCat && (
            <NavbarArtisans cat={cat} loading={loading}></NavbarArtisans>
          )}
        </section>
      </main>
    </>
  );
}
