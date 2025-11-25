// components/location/NeighborhoodHero.tsx

interface NeighborhoodHeroProps {
  city: string;
  neighborhood: string;
}

export default function NeighborhoodHero({ city, neighborhood }: NeighborhoodHeroProps) {
  return (
    <section className="py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
        {neighborhood} Cleaning Services in {city}, Texas
      </h1>

      <p className="mt-4 text-lg text-gray-700 max-w-3xl">
        Clean May proudly provides professional, reliable, and eco-friendly home cleaning 
        services throughout {neighborhood}, one of the most recognized areas in {city}. 
        Our trained cleaners deliver spotless, detail-oriented results tailored to your home’s 
        layout, lifestyle, and cleaning needs.
      </p>
    </section>
  );
}
