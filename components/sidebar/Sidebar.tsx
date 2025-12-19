"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import servicesData from '@/data/servicesData'; // Assuming this data is structured correctly as { title, link, services: [{name, link}, ...] }


// --- Corrected TypeScript Types ---

interface IconData {
  src: string;
  alt: string;
}

// Defines the structure of a single service link object (same as Navbar)
interface ServiceLink {
  name: string;
  link: string; // The specific URL for this service
}

// Defines the structure of the imported data (CORRECTED)
interface ServiceSection {
  title: string;
  icon: IconData;
  link: string; // Base path or category path
  services: ServiceLink[]; // ✅ Now correctly defined as an array of objects
}

// Defines the structure for the final sidebar item
interface SidebarLink {
  name: string;
  fullPath: string;
}

interface SidebarSection {
  title: string;
  basePath: string;
  links: SidebarLink[];
}


// --- Corrected Helper Function to Transform Data ---

/**
 * Transforms the imported data to the structure needed by the sidebar.
 * It uses the 'link' property from the service objects directly as the 'fullPath'.
 */
function transformServicesDataForSidebar(data: ServiceSection[]): SidebarSection[] {
  return data.map(section => {
    // Determine the Base Path for category matching
    // If your section.link is '/residentialservices', this just uses that.
    // Since the service links are already full paths, we just need the category link.
    const basePath = section.link;

    return {
      title: section.title,
      basePath: basePath,
      // Generate links: simply map name and use the existing link as fullPath
      links: section.services.map(service => ({
        name: service.name,
        fullPath: service.link, // ✅ Use the 'link' property directly from the data
      })),
    };
  });
}

// Cast servicesData to the corrected type for safety
const servicesDataTyped = servicesData as ServiceSection[];
const sidebarNavItems = transformServicesDataForSidebar(servicesDataTyped);


export default function Sidebar() {
  const pathname = usePathname();

  // Function to find the active section title based on the current fullPath (pathname)
  function getTitleFromPath(currentPath: string) {
    // Find the link whose fullPath matches the currentPath exactly
    const activeSection = sidebarNavItems.find(section =>
      section.links.some(link => link.fullPath === currentPath)
    );
    return activeSection?.title || 'Unknown';
  }

  const activeTitle = getTitleFromPath(pathname);

  return (
    <aside className="w-full shrink-0 rounded-lg bg-white p-6 shadow-sm md:w-[312px]">
      <nav>
        {sidebarNavItems.map((section) => (
          <div key={section.title} className="mb-6">
            {/* The section title is bold if ANY link in this section is active */}
            <h3 className={`mb-3 text-[20px] ${activeTitle === section.title ? 'font-bold text-[#00084c]' : ''}`}>
              {section.title}
            </h3>
            <ul className="ml-2 list-outside list-disc space-y-2 pl-6">
              {section.links.map((link) => {
                const fullPath = link.fullPath;
                const isActive = pathname === fullPath;

                return (
                  <li key={link.name}>
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