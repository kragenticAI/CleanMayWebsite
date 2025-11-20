'use client';

import Image from 'next/image';
import { ReactNode } from 'react';
import PrimaryButton from '../buttons/PrimaryButton';
import Link from 'next/link';


interface ServiceCardProps {
    title: string;
    icon: {
        src: string;
        alt: string;
    };
    services: string[];
    ctaText?: string;
    onLearnMore?: () => void;
    className?: string;
    link?: string; 
}

export default function ServiceCard({
    title,
    icon,
    services,
    ctaText = "LEARN MORE",
    onLearnMore,
    className = "",
    link=""
}: ServiceCardProps) {

    return (
        <div className={`bg-[#fff] rounded-[12px] py-12 px-6 w-[278px] shadow-sm p-6 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.1)]
 ${className}`}>

            {/* Icon Wrapper */}
            <div className="relative w-12 h-12 mb-4 text-blue-700">
                <Image
                    src={icon.src}
                    alt={icon.alt}
                    fill
                    className="object-contain height: auto max-width: 100% "
                    priority

                />
            </div>

            {/* Title */}
            <h3 className="text-[24px] text-[#171717] font-bold leading-[140%] mb-2 tracking-[0.03em]">
                {title}
            </h3>

            {/* Services List */}
            <ul className="list-disc list-inside space-y-2 mb-6 marker:text-[#000000] marker:text-[14px] marker:font-medium marker:leading-[164%] marker:tracking-[0.03em]">
                {services.map((service, index) => (
                    <li
                        key={index}
                        className="text-[#000000] text-[14px] font-medium leading-[164%] tracking-[0.03em]"
                    >
                        {service}
                    </li>
                ))}
            </ul>

            {/* CTA */}
            <div className="text-center">
                <Link href={link}>
                <PrimaryButton  className="py-3 px-11  text-white hover:underline ">
                    {ctaText}
                </PrimaryButton>
                </Link>
              
            </div>
        </div>
    );
}
