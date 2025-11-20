'use client';

import React, { useState } from 'react';
import { locationsMenu } from '@/Data/locationsData';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import PrimaryButton from '../buttons/PrimaryButton';
import Image from 'next/image';

// --- TypeScript Types ---

// Type for a single link item
interface MenuItem {
  name: string;
  href: string;
}

// Type for the Services menu structure
interface ServicesMenu {
  residential: MenuItem[];
  shortTermRentals: MenuItem[];
  commercialCleaning: MenuItem[];
  special: MenuItem[];
}

// Type for the Locations menu structure


// Type for DropdownLink props
interface DropdownLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

// --- Components ---

const DropdownLink: React.FC<DropdownLinkProps> = ({ href, children, onClick }) => (
 
  <Link
    href={href}
    className="block p-3 -mx-2 rounded-lg text-gray-700 font-medium hover:underline" // Updated style
    onClick={onClick}
  >
    {children}
  </Link>
);

// --- Data ---

// Data for the services mega-menu
const servicesMenu: ServicesMenu = {
  residential: [
    { name: 'Regular Cleaning', href: '/service/residential/regularcleaning' },
    { name: 'Deep Cleaning', href: '/service/residential/deepcleaning' },
    { name: 'Moving Cleaning', href: '/service/residential/movingcleaning' },
    { name: 'Post-Construction Cleaning', href: '/service/residential/postconstructioncleaning' },
    { name: 'One Time Cleaning', href: '/service/residential/onetimecleaning' },
    { name: 'Recurring Cleaning', href: '/service/residential/recurringcleaning' },
  ],
  shortTermRentals: [
    { name: 'Turnover Service', href: '/service/shortTerm/turnovercleaning' },
    { name: 'Inventory Management', href: '#' },
    { name: 'Laundry Service', href: '#' },
  ],
  commercialCleaning: [
    { name: 'Office space', href: '/service/commercial/officespace' },
    { name: 'End of tenancy cleaning', href: '/service/commercial/endoftenancycleaning' },
    { name: 'Educational institutions', href: '/service/commercial/educationalinstitutions' },
    { name: 'Healthcare settings', href: '/service/commercial/healthcaresettings' },
  ],
  special: [
    { name: 'Organizing Help', href: '/service/special/organizinghelp' },
    { name: 'Yacht Cleaning', href: '/service/special/yachtcleaning' },
  ],
};




// --- Main Navbar Component ---

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const [isMobileLocationsOpen, setIsMobileLocationsOpen] = useState(false);
  const [isDesktopLocationsOpen, setIsDesktopLocationsOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileLocationsOpen(false);
  };

  return (
    <div className=" bg-white ">
      <nav className="flex items-center justify-between ">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 ">
          <Image
            src="/images/websitelogo.png"
            alt="CleaningMay"
            width={50}
            height={50}
            className="h-18 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <Link href="/whyUs" className="text-[14px] lg:text-[18px] font-semibold hover:underline">Why us</Link>

          {/* --- Services Mega-Menu (Desktop) --- */}
          <div
            className="relative"
            onMouseEnter={() => setIsDesktopServicesOpen(true)}
            onMouseLeave={() => setIsDesktopServicesOpen(false)}
          >
            <button className="text-[14px] lg:text-[18px] font-semibold hover:underline flex items-center ">
              <span>Services</span>
              <ChevronDown className="ml-1 h-5 w-5 " />
            </button>

            {/* Dropdown Panel */}
            <div className={`absolute z-20 top-full mt-[20px] w-screen max-w-4xl transform transition-all duration-300 ease-in-out left-1 -translate-x-1  ${isDesktopServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
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
                          <DropdownLink href={item.href} onClick={() => setIsDesktopServicesOpen(false)}>
                            {item.name}
                          </DropdownLink>
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
                          <DropdownLink href={item.href} onClick={() => setIsDesktopServicesOpen(false)}>
                            {item.name}
                          </DropdownLink>
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
                          <DropdownLink href={item.href} onClick={() => setIsDesktopServicesOpen(false)}>
                            {item.name}
                          </DropdownLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Special */}
                  <div>
                    <h3 className="text-sm font-semibold tracking-wide text-gray-900 uppercase">
                      Special
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {servicesMenu.special.map((item) => (
                        <li key={item.name}>
                          <DropdownLink href={item.href} onClick={() => setIsDesktopServicesOpen(false)}>
                            {item.name}
                          </DropdownLink>
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
            <Link href="/pricingPage" className="text-[14px] lg:text-[18px] font-semibold hover:underline flex items-center">
              Pricing
            </Link>
          </div>

          {/* <-- MODIFIED: Locations Simple Dropdown (Desktop) --> */}
          <div
            className="relative"
            onMouseEnter={() => setIsDesktopLocationsOpen(true)}
            onMouseLeave={() => setIsDesktopLocationsOpen(false)}
          >
            <button className="text-[14px] lg:text-[18px] font-semibold hover:underline flex items-center ">
              <span>Locations</span>
              <ChevronDown className="ml-1 h-5 w-5 " />
            </button>

            {/* Dropdown Panel */}
            <div
              className={`absolute z-20 top-full mt-[20px] w-screen max-w-xs transform transition-all duration-300 ease-in-out left-1/2 -translate-x-1/2 ${isDesktopLocationsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
            >

              <div className="overflow-hidden rounded-lg shadow-lg">
                <div className="relative bg-white p-4">

                  {/* This just lists the states. */}
                  <ul className="space-y-1">
                    {/* Because we typed locationsMenu, stateCode is a string */}
                    {Object.keys(locationsMenu).map((stateCode) => {
                      // and state is a LocationState
                      console.log("statecode", stateCode);
                      const state = locationsMenu[stateCode];
                      console.log("state", state);
                      return (
                        <li key={state.stateName}>
                          {/* This link goes to the new page, e.g., /locations/tx */}
                          <DropdownLink
                            href={`/locations/${stateCode.toLowerCase()}`}
                            onClick={() => setIsDesktopLocationsOpen(false)}
                          >
                            {state.stateName}
                          </DropdownLink>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <-- MODIFIED: End Locations Menu --> */}


          <Link href="/contactForm" className="text-[14px] lg:text-[18px] font-semibold hover:underline">Contact Us</Link>
        </div>

        <div className='hidden md:flex justify-center items-center gap-[15px]'>
          <PrimaryButton className='text-white hover:underline'> Login</PrimaryButton>
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
            <Link
              href="/whyUs"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:underline"
              onClick={closeMobileMenu}
            >
              Why us
            </Link>

            {/* Services (Mobile) */}
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex items-center justify-between w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:underline"
            >
              <span>Services</span>
              <ChevronDown
                className={`h-5 w-5 transform transition-transform ${isMobileServicesOpen ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
            {isMobileServicesOpen && (
              <div className="pl-8 pr-4 pb-2 space-y-3 bg-gray-50">
                {/* ... (all your mobile services lists) ... */}
              </div>
            )}


            {/* <-- MODIFIED: Locations (Mobile) --> */}
            <button
              onClick={() => setIsMobileLocationsOpen(!isMobileLocationsOpen)}
              className="flex items-center justify-between w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:underline"
            >
              <span>Locations</span>
              <ChevronDown
                className={`h-5 w-5 transform transition-transform ${isMobileLocationsOpen ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
            {isMobileLocationsOpen && (
              <div className="pl-8 pr-4 pb-2 space-y-1 bg-gray-50">
                <ul className="mt-2 space-y-1">
                  {Object.keys(locationsMenu).map((stateCode) => {
                    const state = locationsMenu[stateCode];
                    return (
                      <li key={state.stateName}>
                        <Link
                          href={`/locations/${stateCode.toLowerCase()}`}
                          className="block py-1 text-gray-700 hover:underline"
                          onClick={closeMobileMenu}
                        >
                          {state.stateName}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {/* <-- MODIFIED: End Locations (Mobile) --> */}


            <Link
              href="./pricingPage"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:underline"
              onClick={closeMobileMenu}
            >
              Pricing
            </Link>
            <Link
              href="./contactForm"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:underline"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <PrimaryButton
              className='text-white'
              onClick={closeMobileMenu}
            >
              Login
            </PrimaryButton>
            <Link
              href="#"
              className="block w-full text-left px-4 py-2 text-base font-medium text-[#2937b1] hover:underline"
              onClick={closeMobileMenu}
            >
              CALL NOW (844) 242-9464
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}