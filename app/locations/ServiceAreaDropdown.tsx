"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { LocationCity } from "@/Data/locationsData";

interface Props {
  cities: LocationCity[];
}

export default function ServiceAreaDropdown({ cities }: Props) {
  const [open, setOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // Sort cities based on current sort order
  const sortedCities = useMemo(() => {
    const sorted = [...cities].sort((a, b) =>
      a.name.localeCompare(b.name, "en", { sensitivity: "base" })
    );
    return sortOrder === "asc" ? sorted : sorted.reverse();
  }, [cities, sortOrder]);

  return (
    <div className="w-full my-10">
      {/* Dropdown Header */}
      <div className="bg-[#2937b1] text-white px-10 py-6 rounded-md">
        <div className="flex justify-start items-center cursor-pointer" onClick={() => setOpen(!open)}>
          <span className="font-semibold uppercase">See All Areas We Are Serving</span>
          <span className="text-xl px-3">{open ? "▲" : "▼"}</span>
        </div>


      </div>

      {/* Dropdown Content */}
      {open && (
        <div className="border border-gray-300 bg-white p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {sortedCities.map((city) => (
            <Link
              key={city.href}
              href={city.href}
              className="text-black font-bold gap-5 hover:underline text-sm"
            >
              {city.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
