// components/location/NeighborhoodSEOSection.tsx

interface NeighborhoodSEOProps {
  city: string;
  neighborhood: string;
}

export default function NeighborhoodSEOSection({
  city,
  neighborhood
}: NeighborhoodSEOProps) {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-4">
        Why {neighborhood} Residents Choose Clean May
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Residents of {neighborhood} in {city}, Texas trust Clean May for reliable and 
        top-quality cleaning services. Whether you live in a luxury home, apartment, new 
        development, or historic property, our cleaners follow a detailed checklist that 
        ensures every room looks refreshed, sanitized, and beautifully maintained.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        We specialize in recurring housekeeping, deep cleaning, move-in and move-out 
        cleanings, seasonal refreshes, and short-term rental turnovers. Each service is 
        performed with high-efficiency tools, eco-friendly products, and attention to detail 
        that keeps your home consistently spotless.
      </p>

      <p className="text-gray-700 leading-relaxed">
        With flexible scheduling, transparent pricing, and a customer-first approach, Clean 
        May is the preferred choice for homeowners and renters across {neighborhood} and the 
        greater {city} region.
      </p>
    </section>
  );
}
