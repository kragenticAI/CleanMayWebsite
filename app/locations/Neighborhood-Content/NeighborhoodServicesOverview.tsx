// components/location/NeighborhoodServicesOverview.tsx

interface NeighborhoodServicesProps {
  city: string;
  neighborhood: string;
}

export default function NeighborhoodServicesOverview({
  city,
  neighborhood
}: NeighborhoodServicesProps) {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-4">
        Cleaning Services Available in {neighborhood}, {city}
      </h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Standard Home Cleaning</li>
        <li>Deep Cleaning & Heavy-Duty Cleaning</li>
        <li>Move-In / Move-Out Cleaning</li>
        <li>Airbnb & Short-Term Rental Turnovers</li>
        <li>Kitchen & Appliance Cleaning</li>
        <li>Bathroom Sanitization</li>
        <li>Pet-Friendly & Eco-Safe Cleaning</li>
        <li>Custom Cleaning Packages Designed for {neighborhood} Homes</li>
      </ul>

      <p className="mt-4 text-gray-700">
        Our cleaning plans are built to match the needs of {neighborhood} households, 
        offering unmatched reliability, attention to detail, and customer satisfaction.
      </p>
    </section>
  );
}
