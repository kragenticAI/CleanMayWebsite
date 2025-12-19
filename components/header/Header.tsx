'use client';

import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 ">
      <div className="container mx-auto px-4 py-4 overflow-hidden">
        <Navbar />
      </div>
    </header>
  );
}