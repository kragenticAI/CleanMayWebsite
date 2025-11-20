"use client";

import React from 'react';
import Link from 'next/link'; // <-- Import Link
import { usePathname } from 'next/navigation';

// --- Data for the Sidebar ---
// In a real app, you might import this from a central data file
const sidebarNavItems = [
  {
    title: 'Residential',
    basePath: '/service/residential',
    links: [
      { name: 'Deep Cleaning', path: '/deepcleaning' },
       { name: 'Moving Cleaning', path: '/movingcleaning' },
       { name: 'Post Construction / Renovation Cleaning', path: '/postconstructioncleaning' },
         { name: 'Recurring Cleaning', path: '/recurringcleaning' },
      { name: 'Regular Cleaning', path: '/regularcleaning'},
      { name: 'Standard House Cleaning (One-Time)', path: '/onetimecleaning' },
      
    ],
  },
  {
    title: 'Short-Term / Airbnb',
    basePath: '/service/shortTerm', // Example, adjust as needed
    links: [
      { name: 'Turnover Service', path: '/turnovercleaning' },
      { name: 'Inventory Management', path: '/inventory-management' },
      { name: 'Laundry Service', path: '/laundry-service' },
    ],
  },
  {
    title: 'Commercial',
    basePath: '/service/commercial', // Example, adjust as needed
    links: [
      { name: 'End of tenancy cleaning', path: '/endoftenancycleaning' },
      { name: 'Office space', path: '/officespace' },
      { name: 'Educational institutions', path: '/educationalinstitutions'},
      { name: 'Healthcare settings', path: '/healthcaresettings' },
    ],
  },
  {
    title: 'Special',
    basePath: '/service/special', // Example, adjust as needed
    links: [
      { name: 'Hoarder Cleanup', path: '/hoardercleanup' },
      { name: 'Organizing Help', path: '/organizinghelp' },
    ],
  },
];


export default function Sidebar() {


//   const pathname = '/service/residential/regularCleaning';
const pathname=usePathname();
console.log("pathname",pathname);
    function getTitleFromPath(fullPath:any) {
  return sidebarNavItems.find(item =>
    fullPath.startsWith(item.basePath)
  )?.title || 'Unknown';
}

  return (
    <aside className="w-full shrink-0 rounded-lg bg-white p-6 shadow-sm md:w-[312px]">
      <nav>
        
        {sidebarNavItems.map((section) => (
          <div key={section.title} className="mb-6">
        <h3 className={`mb-3 text-[20px] ${getTitleFromPath(pathname)===section.title&&'font-bold text-[#00084c]'}`}>
              {section.title}
            </h3>
            <ul className="ml-2 list-outside list-disc space-y-2 pl-6">
              {section.links.map((link) => {
                const fullPath = section.basePath + link.path;
                const isActive = pathname === fullPath;

                return (
                  <li key={link.name}  >
            
                    {/* Changed <a> to <Link> */}
                    <Link
                      href={fullPath}
                      className={`
                        cursor-pointer text-left
                        ${isActive ? 'font-bold text-[#00084c]' : ''}
                      `}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}