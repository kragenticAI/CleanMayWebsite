"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

// --- 1. Predefined Breadcrumb Map for Service Pages ---
const BREADCRUMB_MAP: Record<string, { label: string; href?: string | null }[]> = {
  "/service/residential/regularcleaning": [{ label: "Regular Cleaning" }],
  "/service/residential/deepcleaning": [{ label: "Deep Cleaning" }],
  "/service/residential/movingcleaning": [{ label: "Moving Cleaning" }],
  "/service/residential/postconstructioncleaning": [{ label: "Post-Construction Cleaning" }],
  "/service/residential/onetimecleaning": [{ label: "One-Time Cleaning" }],
  "/service/residential/recurringcleaning": [{ label: "Recurring Cleaning" }],

  "/service/commercial/endoftenancycleaning": [{ label: "End of Tenancy Cleaning" }],
  "/service/commercial/officespace": [{ label: "Office Space" }],
  "/service/commercial/educationalinstitutions": [{ label: "Educational Institutions" }],
  "/service/commercial/healthcaresettings": [{ label: "Healthcare Settings" }],

  "/service/special/yachtcleaning": [{ label: "Yacht Cleaning" }],
};

// --- 2. Utility → Format label nicely ---
const toLabel = (segment: string) =>
  segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

// --- 3. Create dynamic breadcrumbs safely ---
const createDynamicCrumbs = (segments: string[]) => {
  const crumbs: { label: string; href: string | null }[] = [];
  let builtPath = "";

  segments.forEach((seg, index) => {
    builtPath += `/${seg}`;
    const isLast = index === segments.length - 1;

    crumbs.push({
      label: toLabel(seg),
      href: isLast ? null : builtPath,
    });
  });

  return crumbs;
};

export default function Breadcrumb() {
  const pathname = usePathname();
  if (!pathname) return null;

  // split → remove empty entries
  const segments = pathname.split("/").filter(Boolean);

  // If homepage → no breadcrumb
  if (segments.length === 0) return null;

  // --- 4. Try fixed map first (services) ---
  const mapped = BREADCRUMB_MAP[pathname];

  // --- 5. Build crumbs (service mapped OR dynamic) ---
  const crumbs = mapped || createDynamicCrumbs(segments);

  return (
    <div className="bg-[#f4f4f4]">
      <div className="container mx-auto max-w-7xl px-4">
        <nav className="flex items-center text-sm text-gray-500 py-8">
          
          {/* Home Link */}
          <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
            Home
          </Link>

          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />

          {/* Dynamic Breadcrumbs */}
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;

            return (
              <div key={index} className="flex items-center">
                {isLast || !crumb.href ? (
                  <span className="text-gray-800 font-semibold">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="text-gray-600 hover:text-blue-600">
                    {crumb.label}
                  </Link>
                )}

                {!isLast && (
                  <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                )}
              </div>
            );
          })}

        </nav>
      </div>
    </div>
  );
}
