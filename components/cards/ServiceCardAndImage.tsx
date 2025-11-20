import Image from "next/image";
import PrimaryButton from "../buttons/PrimaryButton";
import Link from "next/link";
import servicesData from "@/Data/servicesData";

interface cardprops {
  path: string;
  data: any;
  reverse?: boolean; // NEW PROP
}

const ServiceCardAndImage = ({ path, data, reverse = false }: cardprops) => {
    console.log("path",path);
  return (
    <section
      className={`container mx-auto px-4 my-10 flex flex-col md:flex-row  items-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* IMAGE SECTION */}
      <div className="flex-1 rounded-md">
        <Image
          src={path}
          alt="lady"
          height={500}
          width={700}
          className="rounded-md"
        />
      </div>

      {/* TEXT SECTION */}
      <div className="flex-2 py-10 flex flex-col items-center justify-center h-full rounded-md shadow-[0_0_15px_rgba(0,0,0,0.2)] px-[20px]">
        <h4 className="mb-5 font-semibold text-xl">{data.title} Cleaning</h4>

        <ul className="grid grid-cols-2 gap-x-10 gap-y-2 list-disc">
          {data.services.map((service: any, index: number) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
        <Link href={data.link}>
          <PrimaryButton className="mt-[20px] mx-auto text-white hover:underline">
          Book now
        </PrimaryButton>
        </Link>
      
      </div>
    </section>
  );
};

export default ServiceCardAndImage;
