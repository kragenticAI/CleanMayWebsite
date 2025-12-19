"use client"; // <--- THIS IS REQUIRED HERE

import React, { useState } from "react";

 

export default function ServiceAreas({otherServiceAreas}: {otherServiceAreas: string[]}) {
    const [isOpen, setIsOpen] = useState(false);
    console.log("Other Service Areas:", otherServiceAreas);
   

    return (
        // ... paste the dropdown JSX code I gave you earlier here ...

        <div className="space-y-6 px-[10px] mt-[40px] mb-[40px] ">

            {/* 1. The Trigger Button (Red Bar) */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between bg-[#2937b1] text-white px-6 py-4 m-0 "
                aria-expanded={isOpen}
            >
                <span className="text-xl font-normal tracking-wide">
                    See All Areas We Are Serving
                </span>

                {/* Custom Triangle Icon */}
                <div className={`transform transition-transform duration-200 ${isOpen ? "rotate-90" : "rotate-0"}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        {/* A solid triangle pointing right by default */}
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
            </button>

            {/* 2. The Dropdown Content */}
            {/* We use a conditional render or a hidden class. 
          For smooth animations, you could use a library, but standard React conditional is fastest. */}
            {isOpen && (
                <div className="bg-white p-8 border border-gray-200 shadow-sm">
                    {/* CRITICAL: 'columns-4' is used here. 
             This makes the list flow Downwards first, then to the next column,
             exactly matching your screenshot (Adkins -> Buda -> Cedar Creek).
             Flex or Grid would flow Left -> Right.
          */}
                    <ul className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-x-12 space-y-2">
                        {otherServiceAreas.map((city, index) => (
                            <li key={index} className="break-inside-avoid">
                                <a
                                    href={`/otherserviceareas/${city.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="text-gray-900 text-[15px] hover:underline decoration-gray-400 "
                                >
                                    {city}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}












