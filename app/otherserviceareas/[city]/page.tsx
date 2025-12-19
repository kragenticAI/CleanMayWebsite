import PrimaryButton from "@/components/buttons/PrimaryButton";
import { otherServiceAreas } from "../../../data/otherServices";
import { notFound } from "next/navigation";

// This interface defines what 'params' looks like
interface PageProps {
  params: {
    city: string;
  };
}

export default async function CityPage({ params }: PageProps) {
  // 1. Get the slug from the URL (e.g., "san-antonio")
  const res = await params
  console.log("RAW params:", res);
  const slug = res.city;
  console.log("City Slug:", slug);

  // 2. Find the data that matches this slug
  const data = otherServiceAreas[slug];
  console.log("City Data:", data);

  // 3. If the city isn't in your data file, show a 404 page
  if (!data) {
    // Alternatively, you could show a generic "We serve [City Name]" page here
    // by formatting the slug back to a title casing.
    return notFound();
  }

  return (
    <div>
      <div
        className="relative w-full py-20 bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: "url('/images/background.png')" }}
      >

        {/* 2. OVERLAY: Covers the full width background */}
        <div className="absolute inset-0 bg-white/40"></div>

        {/* 3. INNER CONTAINER: Constrains the text to max-w-4xl and centers it */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center p-[40px]">

          <h1 className="text-5xl font-bold  mb-4">
            Your Local Cleaning Service Experts
          </h1>

          <p className="text-xl  mb-6">
            Operating in over 15 states across the United States with 54 physical locations and growing, whether you need a deep home cleaning, regular maintenance cleaning, or a complete move-in/move-out service, Clean May is here to help.With industry-leading training, eco-friendly products, and advanced cleaning tools, our team ensures your space looks its best while helping you choose the service that fits your home perfectly.
          </p>

          <div>
            <PrimaryButton className="text-white hover:underline">
              Book now
            </PrimaryButton>
          </div>

        </div>
      </div>
      <div className="m-auto">
        <h1 className="text-4xl font-bold  m-10 uppercase text-center">BEST Cleaning Service Near You in {res.city}</h1>
        <p className="text-xl  mb-6 px-10 text-justify">
          Are you looking for the most reliable cleaning professionals in <span className="text-[#2937b1] hover:underline cursor-pointer">{res.city}</span>? Look no further than Clean May. We are the top-rated choice for homeowners and businesses seeking a spotless environment without the hassle. From deep home cleaning and recurring maintenance to comprehensive move-in/move-out services, our team is equipped to handle it all with precision and care.

          We take pride in our <span className="text-[#2937b1] hover:underline cursor-pointer">{res.city}</span> roots, ensuring that every technician we send to your home is fully background-checked, rigorously trained, and equipped with industry-leading eco-friendly products. Our 5-star reputation is built on consistency—we don’t just clean; we care for your home. Join hundreds of satisfied neighbors in <span className="text-[#2937b1] hover:underline cursor-pointer">{res.city}</span> who trust Clean May for a healthier, brighter living space. Book your service today and experience the difference of true cleaning experts
        </p>
      </div>
    </div>

  );
}