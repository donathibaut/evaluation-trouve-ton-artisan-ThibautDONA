import { useSearchParams } from "react-router-dom";
import useArtisan from "../../services/Artisans/useArtisan";
import ArtisanCard from "../../components/Artisans/ArtisanCard";

export default function Artisan() {
  const [searchParams] = useSearchParams();
  const chosenId = searchParams.get("id");

  const { artisan, loading } = useArtisan(chosenId);
  return (
    <main>
      <ArtisanCard artisan={artisan} loading={loading}></ArtisanCard>
    </main>
  );
}
