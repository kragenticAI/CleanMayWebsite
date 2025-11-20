import PrimaryButton from "@/components/buttons/PrimaryButton";
import servicesData from "@/Data/servicesData";
import HeroImage from "@/components/hero/HeroImage";
import Image from "next/image";
import Link from "next/link";
import ImageServiceCard from "@/components/cards/ServiceCardAndImage";
interface CityProps {
    params: {
        city: string;
    }
}



export default async function CityPage({ params }: CityProps) {
    const res = await params

    return (
        <>
            <section className="relative overflow-hidden z-[11]">

                <div className="container mx-auto pt-10 lg:pt-0 flex flex-col lg:flex-row gap-12 lg:min-h-[80vh]">

                    <div className=" flex-1 space-y-6 px-[10px] lg:max-w-[50%] ">
                        <h1 className="text-[28px] font-bold leading-tight sm:text-[36px] lg:text-[48px]">
                            Premier Choice
                            for Professional Cleaning Services
                        </h1>


                        <p className="text-lg mt-4">
                            Choose Clean May—the trusted leader in spotless home and office cleaning. Whether you need routine maintenance or a complete deep-clean transformation, our expert team uses advanced tools and techniques to deliver exceptional results. With Clean May, enjoy a fresher, healthier, and perfectly clean space every time.
                        </p>

                        <div className="flex flex-col px-[10px] sm:flex-row gap-4 mt-8">
                            <Link href="/service/residential/deepcleaning">
                                <PrimaryButton
                                    className='text-white hover:underline'
                                // onClick={() =>
                                //   document.getElementById('bookingForm')?.scrollIntoView({
                                //     behavior: 'smooth',
                                //   })
                                // }
                                >
                                    BOOK CLEANING
                                </PrimaryButton>
                            </Link>


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
                        map
                    </div>
                </div>
            </section>
            {/* <div className=" space-y-6 px-[10px] mt-[40px] mb-[40px] ">

                <div className="flex justify-evenly flex-wrap border border-[#eee] py-[15px] ">
            {stateData.cities.map((city) => (
              <CityCard key={city.name} city={city} />
            ))}
          </div>
            </div> */}
            {servicesData.map((item, index) => (
                <ImageServiceCard
                    key={index}
                    path="/images/lady3.png"
                    data={item}
                    reverse={index % 2 === 0} // optional: alternate layout
                />
            ))}




        </>
    );

}