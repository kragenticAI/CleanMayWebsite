'use client';

import Image from 'next/image';
import { ReactNode } from 'react';
import PrimaryButton from '../buttons/PrimaryButton';

interface SafetyCardProps {
    description: string;
    icon: {
        src: string;
        alt: string;
    };
   
    className?: string
}

export default function SafetyCard({
    description,
    icon,
    className = "",
}: SafetyCardProps) {

    return (
        <div className={`bg-[#fff] rounded-[12px] py-12 px-6  shadow-sm p-6 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.1)] text-center
 ${className}`}>

            {/* Icon Wrapper */}
                <div className="relative w-12 h-12 mb-4 text-blue-700 m-auto mb-5 ">
                <Image
                    src={icon.src}
                    alt={icon.alt}
                    fill
                    className="object-contain height: auto max-width: 100% "
                    priority


                />
            </div>
             <p className="text-[24px] text-[#171717]  leading-[140%] mb-2 tracking-[0.03em] ">
                {description}
            </p>           
        </div>
    );
}
