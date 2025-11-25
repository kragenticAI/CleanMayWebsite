import { locationsMenu } from "@/Data/locationsData";
import { notFound } from "next/navigation";
import NeighborhoodHero from "@/app/locations/Neighborhood-Content/NeighborhoodHero";
import NeighborhoodSEOSection from "@/app/locations/Neighborhood-Content/NeighborhoodSEOSection";
import NeighborhoodServicesOverview from "@/app/locations/Neighborhood-Content/NeighborhoodServicesOverview";

interface NeighborhoodPageProps {
  params: Promise<{
    state: string;
    city: string;
    neighborhood: string;
  }>;
}

export default async function NeighborhoodPage({ params }: NeighborhoodPageProps) {
  // IMPORTANT: unwrap params
  const { state, city, neighborhood } = await params;

  const stateCode = state.toUpperCase();
  const stateData = locationsMenu[stateCode];

  if (!stateData) return notFound();

  const normalizedCity = city.replace(/-/g, " ").toLowerCase();

  const cityData = stateData.cities.find(
    (c) => c.name.toLowerCase() === normalizedCity
  );
  if (!cityData) return notFound();

  const normalizedNeighborhood = neighborhood.replace(/-/g, " ").toLowerCase();

  const neighborhoodData = cityData.neighborhoods?.find(
    (n) => n.name.toLowerCase() === normalizedNeighborhood
  );

  if (!neighborhoodData) return notFound();

  return (
    <div className="container mx-auto py-10">
      <NeighborhoodHero
        city={cityData.name}
        neighborhood={neighborhoodData.name}
      />

      <NeighborhoodSEOSection
        city={cityData.name}
        neighborhood={neighborhoodData.name}
      />

      <NeighborhoodServicesOverview
        city={cityData.name}
        neighborhood={neighborhoodData.name}
      />
    </div>
  );
}
