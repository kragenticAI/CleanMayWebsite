import Image from "next/image";
import PrimaryButton from "../buttons/PrimaryButton";
import Link from "next/link";

interface cardprops {
  path: string;
  data: any;
  reverse?: boolean;
}

const ServiceCardAndImage = ({ path, data, reverse = false }: cardprops) => {
  return (
    <section
      className={`container mx-auto px-4 my-10 flex flex-col md:flex-row items-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* IMAGE */}
      <div className="flex-1 rounded-md">
        <Image
          src={path}
          alt={data.title}
          height={500}
          width={700}
          className="rounded-md object-cover"
        />
      </div>

      {/* TEXT */}
      <div className="flex-1 py-10 flex flex-col items-start md:items-start justify-center h-full rounded-md shadow-[0_0_15px_rgba(0,0,0,0.2)] px-[20px]">
        
        {/* Title */}
        <h4 className="mb-5 font-semibold text-2xl">
          {data.title} Cleaning
        </h4>

        {/* Services as links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-10 w-full">
          {data.services.map((service: any, index: number) => (
            <Link 
              key={index}
              href={service.href}
              className="text-blue-600 hover:underline text-[16px] font-medium"
            >
              {service.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link href={data.link}>
          <PrimaryButton className="mt-[25px]  text-white hover:underline">
            Book now
          </PrimaryButton>
        </Link>

      </div>
    </section>
  );
};

export default ServiceCardAndImage;
