import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar'; // Adjust path if needed

/**
 * This layout applies to all pages inside app/service/residential/
 * It renders a Sidebar next to the specific page content (children).
 */
export default function ResidentialServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f4f4f4] font-sans text-gray-900">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          
          {/* Reusable Sidebar */}
          <Sidebar />
          
          {/* Page Content */}
          {/* This 'children' prop will be the regularCleaning/page.tsx */}
          <main className="flex-1">
            {children}
          </main>
          
        </div>
      </div>
    </div>
  );
}