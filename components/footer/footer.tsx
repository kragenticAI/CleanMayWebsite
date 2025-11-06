import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, MessageSquare } from 'lucide-react';

import PrimaryButton from '../buttons/PrimaryButton';

// A simple, scalable footer component based on the new design

const Footer = () => {
  // Link data based on the image
  const contactInfo = [
    { icon: <Mail size={20} />, text: 'info@prohousekeepers.com', href: 'mailto:info@prohousekeepers.com' },
    { icon: <Phone size={20} />, text: '(844) 242-9464', href: 'tel:844-242-9464' },
    { icon: <MapPin size={20} />, text: 'Headquartered in Tampa Bay', href: '#' },
  ];

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { label: 'Services', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'Cleaning Tips', href: '#' },
        { label: 'FAQ', href: '#' },
        { label: 'How to Book', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Careers', href: '#' },
        { label: 'Gift Cards', href: '#' },
        { label: 'Locations', href: '#' },
        { label: 'Client Login', href: '#' },
        { label: 'Join Our Team', href: '#' },
      ],
    },
  ];

  const cityLinks = [
    'Atlanta', 'Austin', 'Boston', 'Chicago',
    'Clearwater', 'Denver', 'Fort Lauderdale', 'Houston',
    'Miami Beach', 'Kansas City', 'Las Vegas', 'Los Angeles',
    'Naples', 'New York City', 'Phoenix', 'Portland',
    'Sarasota', 'Seattle', 'St. Petersburg', 'Tampa',
    'West Palm Beach'
  ];

  return (
    <footer className=" bg-[#00084c] text-gray-300 pt-16 pb-8 relative">
      <div className="container mx-auto px-4">
        {/* Top Section: Contact, Links, Subscribe */}
        <div className=" grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Logo & Contact Info */}
          <div className="md:col-span-4">
            <h3 className="text-3xl font-bold text-white mb-6">PRO HOUSEKEEPERS</h3>
            <p className="text-gray-400 mb-4">Our experts are available 24/7:</p>
            <ul className="space-y-3">
              {contactInfo.map((item) => (
                <li key={item.text} className="flex items-center gap-3 text-[#8f97d7] hover:underline">
                  <span className="">{item.icon}</span>
                  <a href={item.href} className="transition-colors">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="md:col-span-2">
              <h4 className="font-semibold text-white mb-4 text-lg">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-[#8f97d7] hover:underline transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Subscribe Form */}
          <div className="md:col-span-4">
            <h4 className="font-semibold text-white mb-4 text-lg">Subscribe to our newsletter</h4>
            <form className="flex flex-col  md:flex-col lg:flex-row gap-2">
              <input
                type="email"
                placeholder="E-mail"
                className="flex-grow p-4 rounded-full text-gray-900 focus:outline-none bg-white focus:ring-2 focus:ring-brand-blue"
              />
              <PrimaryButton  className="bg-[#fae084] text-black hover:bg-[#d6bb5e]">
                SUBSCRIBE
              </PrimaryButton>
            </form>
            <div className="flex gap-4 mt-6">
              <Link href="#" aria-label="Facebook" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all"><Facebook size={20} color='#00084c' /></Link>
              <Link href="#" aria-label="Twitter" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all"><Twitter size={20} color='#00084c' /></Link>
              <Link href="#" aria-label="LinkedIn" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all"><Linkedin size={20}  color='#00084c'/></Link>
              <Link href="#" aria-label="Instagram" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all"><Instagram size={20} color='#00084c' /></Link>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        {/* Bottom Section: City Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-2">
          {cityLinks.map((city) => (
            <Link key={city} href="#" className="text-sm  text-[#8f97d7] hover:underline transition-colors">
              {city}
            </Link>
          ))}
        </div>
      </div>

      {/* Chat Bubble - Positioned relative to the footer */}
      {/* <b className="fixed bottom-6 right-6 flex items-center gap-3 bg-white text-brand-dark font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all z-50">
        Chat with us 🙏
        <span className="w-10 h-10 bg-gray-800 text-white flex items-center justify-center rounded-full">
          <MessageSquare size={20} />
        </span>
      </button> */}
    </footer>
  );
};

export default Footer;

