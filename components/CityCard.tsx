// components/CityCard.tsx
import Link from 'next/link';
import { LocationCity } from '@/data/locationsData'; // Import the type
import { ChevronRight } from 'lucide-react';

interface CityCardProps {
  city: LocationCity;
}

export default function CityCard({ city }: CityCardProps) {
  return (
    <Link 
      href={city.href} 
      className="hover:underline"
    >
     
        <h3 className="text-xl font-semibold text-gray-900">{city.name}</h3>
        {/* <ChevronRight className="h-5 w-5 text-gray-400" /> */}
    
    </Link>
  );
}