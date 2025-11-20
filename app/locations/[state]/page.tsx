// app/locations/[state]/page.tsx
// "use client"
import Link from 'next/link';

import { locationsMenu } from '@/Data/locationsData';
import { notFound } from 'next/navigation';
import CityCard from '@/components/CityCard'; // Import your new reusable component
import PrimaryButton from '@/components/buttons/PrimaryButton';
import SecondaryButton from '@/components/buttons/SecondaryButton';
import HeroImage from '@/components/hero/HeroImage';

import servicesData from '@/Data/servicesData';
import ServiceCard from '@/components/cards/ServiceCard';

// This tells Next.js what props to expect from the URL

interface StatePageProps {
  params: {
    state: string; // This 'state' must match the folder name '[state]'
  };
}

// This is the page component
export default  async function StatePage({ params }: StatePageProps) {

  const res = await params
   console.log("RAW params:", res);
// console.log("STRINGIFIED params:", JSON.stringify(params));


  // 1. Get the state code from the URL and format it
  // Example: 'tx' becomes 'TX' to match our data keys
  const stateCode = res.state.toUpperCase();
  
  // // 2. Find the correct data from our imported object
  const stateData = locationsMenu[stateCode];

  // // 3. Handle 404
  // // If no data exists (e.g., user visits /locations/florida), show a 404 page
  if (!stateData) {
    notFound();
  }

  // 4. Render the page with the correct data


  return ( 
    <>
    <section className="relative overflow-hidden z-[11]">
  
              <div className="container mx-auto pt-10 lg:pt-0 flex flex-col lg:flex-row gap-12 lg:min-h-[80vh]">
      
                <div className=" flex-1 space-y-6 px-[10px] lg:max-w-[50%] ">
                  <h1 className="text-[28px] font-bold leading-tight sm:text-[36px] lg:text-[48px]">
                   {stateData.stateName}'s Premier Choice
                    for Professional Cleaning Services
                  </h1>
                 
      
                  <p className="text-lg mt-4">
                    Choose Clean May—the trusted leader in spotless home and office cleaning. Whether you need routine maintenance or a complete deep-clean transformation, our expert team uses advanced tools and techniques to deliver exceptional results. With Clean May, enjoy a fresher, healthier, and perfectly clean space every time.
                  </p>
      
                  <div className="flex flex-col px-[10px] sm:flex-row gap-4 mt-8">
                 
                      <PrimaryButton
                      className='text-white hover:underline'
        
                    >
                      BOOK CLEANING
                    </PrimaryButton>
                   
                  
      
                    {/* <SecondaryButton>
                      <span className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A6 6 0 007 10c0 1.954.744 3.688 1.955 4.902a4 4 0 003.045 1.105 4 4 0 003.045-1.105A6 6 0 0013 10c0-1.954-.744-3.688-1.955-4.902A4 4 0 008 4a4 4 0 003.045 1.105z"
                            clipRule="evenodd"
                          />
                        </svg>
                        How To Book
                      </span>
                    </SecondaryButton> */}
                  </div>
                </div>
      
                <div className=" flex-1 lg:absolute right-0 bottom-0 top-0 lg:max-h-[90vh] lg:max-w-[50%] z-[-1]">
                  <HeroImage />
                </div>
              </div>
            </section>
    <div className=" space-y-6 px-[10px] mt-[40px] mb-[40px] ">

      <div className="flex justify-evenly flex-wrap border border-[#eee] py-[15px] ">
        {stateData.cities.map((city) => (
          <CityCard key={city.name} city={city} />
        ))}
      </div>
    </div>
    <section className='container mx-auto px-4'>
        <h2 className="max-w-[540px] font-bold text-[28px] sm:text-[36px] lg:text-[48px]">
                  Cleaning services for just about anyone
                </h2>
      
                <div className="flex flex-wrap justify-center gap-6 pb-[30px] pt-[30px]">
                  {servicesData.map((card, index) => (
                    <ServiceCard
                      key={index}
                      title={card.title}
                      icon={card.icon}
                      services={card.services}
                      // onLearnMore={() => alert(`Learn more about ${card.title}`)}
                      className="w-full sm:w-[284px]"
                    />
                  ))}
                </div>
    </section>
    </>
  );
}