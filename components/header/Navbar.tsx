'use client';

import React, { useState } from 'react'; // Added React
// import Image from 'next/image'; // Replaced with <img> for preview compatibility
// import Link from 'next/link'; // Replaced with <a> for preview compatibility
// import PrimaryButton from '../buttons/PrimaryButton'; // Replaced with <button> for preview
import { ChevronDown, Menu, X } from 'lucide-react'; // Added icons
import PrimaryButton from '../buttons/PrimaryButton';

// Re-usable Link component for the dropdown, using <a>
const DropdownLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="block p-2 -mx-2 rounded-lg text-gray-700 hover:underline"
  >
    {children}
  </a>
);

// Data for the services mega-menu
const servicesMenu = {
  residential: [
    { name: 'Regular Cleaning', href: '#' },
    { name: 'Deep Cleaning', href: '#' },
    { name: 'Moving Cleaning', href: '#' },
    { name: 'Post-Construction Cleaning', href: '#' },
  ],
  shortTermRentals: [
    { name: 'Turnover Service', href: '#' },
    { name: 'Inventory Management', href: '#' },
    { name: 'Laundry Service', href: '#' },
  ],
  commercialCleaning: [
    { name: 'Office space', href: '#' },
    { name: 'End of tenancy cleaning', href: '#' },
    { name: 'Educational institutions', href: '#' },
    { name: 'Healthcare settings', href: '#' },
  ],
  other: [
    { name: 'Organizing Help', href: '#' },
    { name: 'Hoarder Cleanup', href: '#' },
    { name: 'Disinfection', href: '#' },
    { name: 'Yacht Cleaning', href: '#' },
  ],
};


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // --- NEW: State for mobile services dropdown ---
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    // Added relative positioning for the mobile menu
    <div className=" bg-white ">
      <nav className="flex items-center justify-between overflow-hidden   ">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2 ">
          <img
            src="./images/logo.webp
            "
            alt="Pro Housekeepers"
            width="full"
            // width={50}
            // height={50}
            className="h-18 w-auto"
            // Using placeholder, replace with your /logo.svg
            // src="/logo.svg" 
          />
          {/* <span className="text-sm font-bold leading-none">PRO<br />HOUSEKEEPERS</span> */}
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <a href="/whyUs" className="text-[14px] lg:text-[18px] font-semibold hover:underline">Why us</a>
          
          {/* --- Services Mega-Menu (Desktop) --- */}
          <div className="relative group">
            <button className="text-[14px] lg:text-[18px] font-semibold hover:underline flex items-center ">
              <span>Services</span>
              <ChevronDown className="ml-1 h-5 w-5 " />
            </button>

            {/* Dropdown Panel */}
            <div className="absolute z-20 top-full ml-[200px] mt-[20px] w-screen max-w-4xl transform opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out left-1/2 -translate-x-1/2 ">
              <div className="overflow-hidden rounded-lg shadow-lg  ">
                <div className="relative grid gap-8 bg-white p-8 grid-cols-4 ">
                  {/* Residential */}
                  <div>
                    <h3 className="text-sm font-semibold tracking-wide text-gray-900 uppercase">
                      Residential
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {servicesMenu.residential.map((item) => (
                        <li key={item.name}>
                          <DropdownLink href={item.href}>{item.name}</DropdownLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Short-Term Rentals */}
                  <div>
                    <h3 className="text-sm font-semibold tracking-wide text-gray-900 uppercase">
                      Short-Term Rentals
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {servicesMenu.shortTermRentals.map((item) => (
                        <li key={item.name}>
                          <DropdownLink href={item.href}>{item.name}</DropdownLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Commercial Cleaning */}
                  <div>
                    <h3 className="text-sm font-semibold tracking-wide text-gray-900 uppercase">
                      Commercial Cleaning
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {servicesMenu.commercialCleaning.map((item) => (
                        <li key={item.name}>
                          <DropdownLink href={item.href}>{item.name}</DropdownLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Other */}
                  <div>
                    <h3 className="text-sm font-semibold tracking-wide text-gray-900 uppercase">
                      Other
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {servicesMenu.other.map((item) => (
                        <li key={item.name}>
                          <DropdownLink href={item.href}>{item.name}</DropdownLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* --- End Services Mega-Menu --- */}

          <div className="relative group">
            <a href="/pricingPage" className="text-[14px] lg:text-[18px] font-semibold hover:underline flex items-center">
              Pricing
            </a>
          </div>
          <a href="/contactForm" className="text-[14px] lg:text-[18px] font-semibold hover:underline">Contact Us</a>
        </div>
        
        <div className='hidden md:flex justify-center items-center gap-[15px]'>
          {/* Replaced PrimaryButton with a styled <button> to fix import error */}
          <PrimaryButton className='text-white hover:underline'> Login</PrimaryButton>
          {/* <button className='text-white bg-blue-600 hover:bg-blue-700 font-semibold py-2 px-4 rounded-md shadow-sm'>
            
          </button> */}
          <div className="text-[#2937b1] font-semibold text-[14px] lg:text-[18px] cursor-pointer hover:underline">
            CALL NOW (844) 242-9464
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <X className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="block h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-20 border-t border-gray-200">
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="/whyUs"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:underline"
            >
              Why us
            </a>
            
            {/* --- MODIFIED: Changed <a> to <button> to toggle mobile services --- */}
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex items-center justify-between w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:underline"
            >
              <span>Services</span>
              <ChevronDown 
                className={`h-5 w-5 transform transition-transform ${isMobileServicesOpen ? 'rotate-180' : 'rotate-0'}`} 
              />
            </button>

            {/* --- NEW: Conditionally rendered mobile services menu --- */}
            {isMobileServicesOpen && (
              <div className="pl-8 pr-4 pb-2 space-y-3 bg-gray-50">
                {/* Residential */}
                <div>
                  <h4 className="text-sm font-semibold tracking-wide text-gray-900 uppercase pt-3">
                    Residential
                  </h4>
                  <ul className="mt-2 space-y-1">
                    {servicesMenu.residential.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="block py-1 text-gray-700 hover:underline">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Short-Term Rentals */}
                <div>
                  <h4 className="text-sm font-semibold tracking-wide text-gray-900 uppercase mt-3">
                    Short-Term Rentals
                  </h4>
                  <ul className="mt-2 space-y-1">
                    {servicesMenu.shortTermRentals.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="block py-1 text-gray-700 hover:underline">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Commercial Cleaning */}
                <div>
                  <h4 className="text-sm font-semibold tracking-wide text-gray-900 uppercase mt-3">
                    Commercial Cleaning
                  </h4>
                  <ul className="mt-2 space-y-1">
                    {servicesMenu.commercialCleaning.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="block py-1 text-gray-700 hover:underline">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Other */}
                <div>
                  <h4 className="text-sm font-semibold tracking-wide text-gray-900 uppercase mt-3">
                    Other
                  </h4>
                  <ul className="mt-2 space-y-1">
                    {servicesMenu.other.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="block py-1 text-gray-700 hover:underline">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {/* --- END: Mobile services menu --- */}

            <a
              href="./pricingPage"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:underline"
            >
              Pricing
            </a>
            <a
              href="./contactForm"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:underline"
            >
              Contact Us
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            {/* We can't use PrimaryButton here easily without props, so used <a> styled as a button */}
            {/* <a
              href="#"
              className="block w-full text-left px-4 py-2 text-base font-medium text-blue-600 hover:bg-gray-50"
            >
             
            </a> */}
            <PrimaryButton className='text-white'> Login</PrimaryButton>
            <a
              href="#"
              className="block w-full text-left px-4 py-2 text-base font-medium text-[#2937b1] hover:underline"
            >
              CALL NOW (844) 242-9464
            </a>
          </div>
        </div>
      )}
    </div>
  );
}