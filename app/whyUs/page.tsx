"use client";
import React from 'react';
import { CheckCircle2, Star, Download, Play, Apple } from 'lucide-react';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import { useRouter } from 'next/navigation';
import { ReactNode } from "react";

// You can replace these with Next.js <Image> components if you're using them
// const PlaceholderImage = ({ className, alt }) => (
//   <div
//     className={`bg-gray-200 rounded-lg flex items-center justify-center ${className}`}
//   >
//     <span className="text-gray-500">{alt}</span>
//   </div>
// );

// Individual Testimonial Card Component
interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  location?: string; // Optional if sometimes missing
}
const TestimonialCard : React.FC<TestimonialCardProps> = ({ name, role, text, location }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
        <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
        </div>
        <p className="text-gray-600 mb-4 flex-grow">"{text}"</p>
        <div>
            <p className="font-bold text-gray-900">{name}</p>
            <p className="text-sm text-gray-500">{role}</p>
            <p className="text-sm text-gray-500 mt-1">{location}</p>
        </div>
    </div>
);

// List Item Component for Company/Staff sections
interface FeatureListItemProps {
  children: ReactNode;
}
const FeatureListItem : React.FC<FeatureListItemProps> = ({ children }) => (
    <li className="flex items-start space-x-3">
        <div className="flex-shrink-0">
            <CheckCircle2 className="h-6 w-6 text-indigo-500" />
        </div>
        <span className="text-gray-700">{children}</span>
    </li>
);

// App Store Button Component
interface AppStoreButtonProps {
  store: 'Google Play' | 'App Store'; // or simply string if dynamic
  href: string;
}
const AppStoreButton : React.FC<AppStoreButtonProps> = ({ store, href }) => {
    const isGooglePlay = store === 'Google Play';
    return (
        <a
            href={href}
            className="bg-black text-white rounded-lg px-4 py-3 flex items-center space-x-3 hover:bg-gray-800 transition-colors"
        >
            {isGooglePlay ? (
                <Play className="h-8 w-8" />
            ) : (
                <Apple className="h-8 w-8" />
            )}
            <div className="text-left">
                <p className="text-xs uppercase">
                    {isGooglePlay ? 'GET IT ON' : 'Download on the'}
                </p>
                <p className="text-xl font-semibold">{store}</p>
            </div>
        </a>
    );
};

// Main "Why Us" Page Component
export default function WhyUsPage() {
    const router = useRouter();
    const handleNavigation = () => {
        router.push('/bookNow');
    };

    return (
        <div className="bg-gray-50 font-sans">
            {/* --- Hero/Mission Section --- */}
            <section className="container mx-auto px-6 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Why US
                        </h1>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Our mission
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            To provide an unmatched housekeeping service to clients across the
                            US without all the hassle of traditional cleaning companies. The
                            quote you get is what you pay - no surprise fees or charges! Our
                            services save valuable time for busy people.
                        </p>
                        {/* <a
              href="#book"
              className="inline-block bg-indigo-600 text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors"
            >
              BOOK CLEANING
            </a> */}

                        <PrimaryButton
                            onClick={handleNavigation}
                            className="text-white hover:underline"
                        >
                            BOOK CLEANING
                        </PrimaryButton>
                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* <PlaceholderImage
              className="h-96 w-full object-cover"
              alt="Housekeeper cleaning a counter"
            />
            <PlaceholderImage
              className="h-96 w-full object-cover mt-8"
              alt="Housekeeper smiling"
            /> */}
                    </div>
                </div>
            </section>

            {/* --- Company/Staff Benefits Section --- */}
            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* Our Company */}
                        <div>
                            <h3 className="text-4xl font-bold text-gray-900 mb-6">
                                Our Company
                            </h3>
                            <ul className="space-y-4 text-lg">
                                <FeatureListItem>Easy last-minute bookings</FeatureListItem>
                                <FeatureListItem>Web & Mobile App access</FeatureListItem>
                                <FeatureListItem>
                                    Top notch customer service 7 days a week
                                </FeatureListItem>
                            </ul>
                        </div>

                        {/* Our Staff */}
                        <div>
                            <h3 className="text-4xl font-bold text-gray-900 mb-6">
                                Our Staff
                            </h3>
                            <ul className="space-y-4 text-lg">
                                <FeatureListItem>
                                    Fully vetted and background-checked
                                </FeatureListItem>
                                <FeatureListItem>Friendly and enthusiastic</FeatureListItem>
                                <FeatureListItem>
                                    Experienced and thoroughly trained
                                </FeatureListItem>
                                <FeatureListItem>Insured up to $2,000,000</FeatureListItem>
                                <FeatureListItem>
                                    Equipped with all supplies and equipment
                                </FeatureListItem>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Features & App Promo Section --- */}
            <section className="bg-gray-50 py-16 md:py-24">
                <div className="container mx-auto px-6">
                    {/* Features */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-center text-xl font-semibold text-gray-800 mb-20">
                        <span>Secure online reservations</span>
                        <span className="hidden md:block text-gray-300">|</span>
                        <span>Featured on Hoarders</span>
                    </div>

                    {/* App Promo */}
                    <div className="bg-white p-8 md:p-16 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="text-center md:text-left">
                            <h3 className="text-4xl font-bold text-gray-900 mb-4">
                                Easily manage your bookings with the mobile app!
                            </h3>
                            <p className="text-lg text-gray-600 max-w-lg">
                                The Pro Housekeepers app is a user-friendly way to manage your
                                cleaning services and communicate with Pros.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4">
                            <AppStoreButton store="Google Play" href="#google-play" />
                            <AppStoreButton store="App Store" href="#app-store" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Testimonials Section --- */}
            <section className=" py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Real client testimonials!
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <TestimonialCard
                            name="Taz A."
                            role="Vacation Rental Investor"
                            text="Great service, great value and always available to help. They go above and beyond regularly great partner for Airbnb cleans!"
                            location="Cincinnati, OH"
                        />
                        <TestimonialCard
                            name="Holly I."
                            role="Partner Success Operations Lead"
                            text="I had the pleasure of working with Pro Housekeepers as our vendor. Their teams are as good as it gets."
                            location="Austin, TX"
                        />
                        <TestimonialCard
                            name="Amanda W."
                            role="Hospitality & Operations Specialist"
                            text="We absolutely appreciate working with Pro Housekeepers! Our clients continue to req them week by week."
                            location="Seattle, WA"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
