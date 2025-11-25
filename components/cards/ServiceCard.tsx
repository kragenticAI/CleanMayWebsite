import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  icon: { src: string; alt: string };
  services: { name: string; href: string }[];
  link: string;
  className?: string;
}

export default function ServiceCard({
  title,
  icon,
  services,
  link,
  className
}: ServiceCardProps) {
  return (
    <div
      className={`rounded-2xl bg-white border border-gray-200 shadow-sm p-8 flex flex-col justify-between transition hover:shadow-lg ${className}`}
    >
      {/* TOP SECTION */}
      <div>
        {/* ICON */}
        <div className="mb-5 flex justify-center">
          <Image
            src={icon.src}
            alt={icon.alt}
            width={40}
            height={40}
            className="w-10 h-10 object-contain "
          />
        </div>

        {/* TITLE */}
        <h3 className="font-bold flex justify-center text-[20px] mb-4 text-gray-900">
          {title}
        </h3>

        {/* SUB-SERVICES
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-y-4 gap-x-3">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="text-black-700 hover:underline font-bold text-[15px]"
            >
              {service.name}
            </Link>
          ))}
        </div> */}


          {/* SUB-SERVICES */}
          <div className="flex flex-col gap-2 mt-2">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="text-[#4A4EA6] hover:underline font-medium text-[15px]"
              >
                {service.name}
              </Link>
            ))}
          </div>


      </div>

      {/* CTA BUTTON */}
      <Link href={link}>
        <button className="mt-6 w-full bg-[#6B70C0] text-white py-2.5 rounded-md font-semibold hover:bg-yellow-500 transition">
          Book now
        </button>
      </Link>
    </div>
  );
}
