import PrimaryButton from "@/components/buttons/PrimaryButton";
import servicesData from "@/Data/servicesData";
// import HeroImage from "@/components/hero/HeroImage";
// import Image from "next/image";
import Link from "next/link";
import ImageServiceCard from "@/components/cards/ServiceCardAndImage";
import NeighborhoodLinks from "../../NeighborhoodLinks";
import LeafletMap from "@/components/Map/LeafletMapComponent";
import { locationsMenu } from "@/Data/locationsData";
import NAP from "@/components/NAP";

interface CityProps {
    params: {
        state : string;
        city: string;
    }
}


export default async function CityPage({ params }: CityProps) {
    const { state, city } = await params

        // Get state object (TX, FL, etc)
    const stateData = locationsMenu[state.toUpperCase()];
    
    if (!stateData) {
        return <p>No State Found</p>;
    }

    // Extract all cities under this state
    const allCities = stateData.cities || [];

    // Find exact matching city using href
    const location = allCities.find((c: any) =>
        c.href.endsWith(`/${city}`)
    );

    if (!location) {
        return <p>No Map Data Found for This Location</p>;
    }

    const latitude = Number(location.latitude);
    const longitude = Number(location.longtitude); // your key spelling

    return (
        <>
            <section className="relative overflow-hidden z-[11] py-10">

                <div className="container mx-auto pt-10 lg:pt-0 flex flex-col lg:flex-row gap-12 lg:min-h-[80vh]">
                    {/* Left Content */}
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
                                    className='text-white hover:underline'>
                                    BOOK CLEANING
                                </PrimaryButton>
                            </Link>
                        </div>
                    </div>
                {/* Right Area : MAP and NAP Section */}

                {/* Map Area */}
                {/* <h1 className="text-3xl font-bold mb-6">{city.toUpperCase()}</h1> */}
                    <div className="w-full max-w-[50%] flex flex-col items-center">
                        <div> 

                            <LeafletMap
                                latitude={latitude}
                                longitude={longitude}
                                title={location.name}
                            />  

                        </div>
                        {/* NAP BELOW MAP */}
                        <div className="mt-6">
                            <NAP />
                        </div>
                    </div>

                   

                    

                    
                    
                </div>
            </section>
            
           

            <NeighborhoodLinks
                stateCode={state.toUpperCase()}
                citySlug={city}
                />



            {servicesData.map((item, index) => (
                <ImageServiceCard
                    key={index}
                    // title={card.title}

                    path="/images/lady3.png"
                    data={item}
                    reverse={index % 2 === 0} // optional: alternate layout
                />
            ))}

        </>
    );

}