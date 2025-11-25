'use client';

import Link from "next/link";
import { locationsMenu } from "@/Data/locationsData";

interface Props {
  stateCode: string;   // ex: "TX"
  citySlug: string;    // ex: "the-woodlands"
}

export default function NeighborhoodLinks({ stateCode, citySlug }: Props) {
  if (!stateCode || !citySlug) return null;

  const state = locationsMenu[stateCode];
  if (!state) return null;

  // Convert URL slug → readable city name
  const normalized = citySlug.replace(/-/g, " ").toLowerCase();

  // Find matching city data
  const city = state.cities.find(
    (c) => c.name.toLowerCase() === normalized
  );

  if (!city || !city.neighborhoods) return null;

  const neighborhoods = city.neighborhoods;

  return (
    <div className="w-full py-8 sm:ml-30 lm:ml-60 ">
         <h1 className="text-[28px] font-bold leading-tight sm:text-[36px] lg:text-[48px] pb-5">
                Premier Choice for Professional Cleaning Services
            </h1>
      <h2 className="text-2xl font-semibold mb-4">
        Neighborhoods We Serve in {city.name}
      </h2>

      <div className="flex  flex-wrap pt-5 gap-3">
        {neighborhoods.map((n) => (
          <Link
            key={n.href}
            href={n.href}
            className="px-4 py-2 rounded-full hover:bg-gray-200 text-1xl"
          >
            {n.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
