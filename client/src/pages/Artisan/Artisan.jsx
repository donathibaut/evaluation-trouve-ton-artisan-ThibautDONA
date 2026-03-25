import { Helmet } from "react-helmet-async";

import { useSearchParams } from "react-router-dom";
import useArtisan from "../../services/Artisans/useArtisan";
import ArtisanCard from "../../components/Artisans/ArtisanCard";

import "./Artisan.scss";

export default function Artisan() {
  const [searchParams] = useSearchParams();
  const chosenId = searchParams.get("id");

  const { artisan, loading } = useArtisan(chosenId);
  return (
    <>
      <Helmet>
        <title>{artisan ? artisan?.nom_artisan : "..."}</title>
        <meta
          name="description"
          content={artisan ? artisan?.a_propos : "..."}
        />
      </Helmet>
      <main className="cardMain">
        <ArtisanCard artisan={artisan} loading={loading}></ArtisanCard>
      </main>
    </>
  );
}
