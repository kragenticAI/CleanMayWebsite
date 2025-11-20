'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

// --- 1. Define your breadcrumb routes ---
const BREADCRUMB_MAP: Record<string, { label: string; href?: string | null }[]> = {
  '/service/residential/regularcleaning': [{ label: 'Regular Cleaning' }],
  '/service/residential/deepcleaning': [{ label: 'Deep Cleaning' }],
  '/service/residential/movingcleaning': [{ label: 'Moving Cleaning' }],
  '/service/residential/postconstructioncleaning': [{ label: 'Postconstruction Cleaning' }],
  '/service/residential/onetimecleaning': [{ label: 'Onetime Cleaning' }],
  '/service/residential/recurringcleaning': [{ label: 'Recurring Cleaning' }],

  '/service/commercial/endoftenancycleaning': [{ label: 'End of tenancy cleaning' }],
  '/service/commercial/officespace': [{ label: 'Office Space' }],
  '/service/commercial/educationalinstitutions': [{ label: 'Educational Institutions' }],
  '/service/commercial/healthcaresettings': [{ label: 'HealthCare Settings' }],

  '/service/special/yachtcleaning': [{ label: 'Yatch Cleaning' }],
};

// --- 2. Create default breadcrumbs for unmapped routes ---
const createDefaultCrumbs = (segments: string[]) => {
  console.log("segments",segments);
  return segments.map((segment, index) => {
    const label = segment
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
      console.log("label",label);

    const isLast = index === segments.length - 1;

    // Build the URL for each segment
    const href = "/" + segments.slice(0, index + 1).join("/");

    return {
      label,
      href: isLast ? null : href, // last one is NOT clickable
    };
  });
};


export default function Breadcrumb({color}:any) {
  const pathname = usePathname();
  const basePath = "/" + pathname.split("/")[1];
  console.log("basepath",basePath);

  // split path → remove empty segments
  const segments = pathname.split('/').filter(Boolean);

  // --- 3. Find mapped crumbs or fallback to default ---
  let crumbs = BREADCRUMB_MAP[pathname] || createDefaultCrumbs(segments);
  console.log("crumbs",crumbs);

  // --- 4. Render breadcrumbs ---
  const breadcrumbs = crumbs.map((crumb, index) => {
    const isLast = index === crumbs.length - 1;

    return (
      <div key={index} className="flex items-center">
        {isLast || !crumb.href ? (
          <span className={isLast ? 'text-gray-800 font-semibold' : 'text-gray-600'}>
            {crumb.label}
          </span>
        ) : (
          <Link
            href={crumb.href}
            className="text-gray-600 hover:text-[#2937b1] transition-colors"
          >
            {crumb.label}
          </Link>
        )}

        {!isLast && <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />}
      </div>
    );
  });

  return (
    <div className={basePath==='/locations'?'bg-transparent':'bg-[#f4f4f4]'}>
      <div className="container mx-auto max-w-7xl px-4">
        {pathname !== '/' && pathname !== '/bookNow' && (
          <nav className="flex items-center text-sm text-gray-500 py-8 mx-auto">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </Link>

            {crumbs.length > 0 && (
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            )}

            {breadcrumbs}
          </nav>
        )}
      </div>
    </div>
  );
}
