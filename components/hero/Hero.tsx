'use client';
import { useState } from 'react';
import HeroImage from './HeroImage';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';
import ChatWidget from '../chat/chatWidget';
import ServiceCard from '../cards/ServiceCard';
import BookingForm from '../booking/BookingForm';
import BookingSummary from '../booking/BookingSummary';
import SafetyCard from '../cards/SafetyCard';

export default function Hero() {
  const today = new Date();
  const [bookingDetails, setBookingDetails] = useState({
    zipCode: '',
    serviceType: 'deep',
    selectedHomeSize: 1,
    specialRequest: '**Services within 24 hours**',
    date: today.toLocaleDateString('en-US'),
    time: '',
    frequency: 'Weekly Cleaning (20%)',
    price: 298,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    howDidYouHear: '',
    agreeToTexts: false,
    streetNumber: '',
    streetName: '',
    city: '',
    state: 'CO',
    notes: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
    title: "1 bd / 1 ba"
  });
  console.log("Booking Details in Hero:", bookingDetails);
  const serviceCards = [
    {
      title: "Residential",
      icon: {
        src: "/images/home.png",
        alt: "Residential cleaning icon",
      },
      services: [
        "Regular Cleaning",
        "Deep Cleaning",
        "Moving Cleaning",
        "Post-Construction Cleaning"
      ]
    },
    {
      title: "Short-Term Rentals",
      icon: {
        src: "/images/clock.png",
        alt: "Short-term rental icon",
      },
      services: [
        "Turnover Service",
        "Inventory Management",
        "Laundry Service"
      ]
    },
    {
      title: "Commercial",
      icon: {
        src: "/images/commercial.png",
        alt: "Commercial cleaning icon",
      },
      services: [
        "Office Spaces",
        "End of Tenancy",
        "Educational Institutions",
        "Healthcare Settings"
      ]
    },
    {
      title: "Other",
      icon: {
        src: "/images/covid.png",
        alt: "Other cleaning services icon",
      },
      services: [
        "Organizing Help",
        "Hoarder Cleanup",
        "Disinfection",
        "Healthcare Settings"
      ]
    },
  ];
  const safetyCards = [
    {
      description: "Fully vettedand background-checked",
      icon: {
        src: "/images/clockcheck.png",
        alt: "Residential cleaning icon",
      },

    },
    {
      description: "Short-Term Rentals",
      icon: {
        src: "/images/sheild.png",
        alt: "Short-term rental icon",
      },

    },
    {
      description: "Commercial",
      icon: {
        src: "/images/hands.png",
        alt: "Commercial cleaning icon",
      },

    },
    {
      description: "Other",
      icon: {
        src: "/images/vaccleaner.png",
        alt: "Other cleaning services icon",
      },

    },
    {
      description: "Other",
      icon: {
        src: "/images/rating.png",
        alt: "Other cleaning services icon",
      },

    },
  ];


  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto pt-10 lg:pt-0 flex flex-col lg:flex-row items-center gap-12 lg:min-h-[100vh]">

          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-[28px] font-black leading-tight sm:text-[36px] lg:text-[48px] ">
              TRUSTED HOUSEKEEPERS <br />
              READY TO CLEAN
            </h1>
            <p className="text-lg mt-4">
              Easy, no-fuss cleaning services for busy people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <PrimaryButton className='text-white hover:underline' onClick={() => {
                document.getElementById('bookingForm')?.scrollIntoView({
                  behavior: 'smooth',
                });
              }} >BOOK CLEANING</PrimaryButton>
              <SecondaryButton>
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A6 6 0 007 10c0 1.954.744 3.688 1.955 4.902a4 4 0 003.045 1.105 4 4 0 003.045-1.105A6 6 0 0013 10c0-1.954-.744-3.688-1.955-4.902A4 4 0 008 4a4 4 0 003.045 1.105z" clipRule="evenodd" />
                  </svg>
                  How To Book
                </span>
              </SecondaryButton>
            </div>
          </div>

          {/* Hero Image + Chat Bubble */}
          <div className="lg:w-1/2 lg:absolute right-0 bottom-0 lg:max-h-[90vh]">
            <HeroImage />
            {/* <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4">
              <div className="chat-bubble absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <p>See why we're the best in the industry!</p>
              </div>
            </div> */}
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="max-w-[540px] font-bold text-[28px] leading-[150%] sm:text-[36px] lg:text-[48px]  ">
            Cleaning services for just about anyone
          </h2>

          <div className="flex flex-wrap justify-center gap-6 pt-[30px]">
            {serviceCards.map((card, index) => (
              <ServiceCard
                key={index}
                title={card.title}
                icon={card.icon}
                services={card.services}
                onLearnMore={() => alert(`Learn more about ${card.title}`)}
                className="w-full sm:w-[284px]  "
              />
            ))}
          </div>
          <div className='pt-[80px]'>
            <h2 className="max-w-[540px] font-bold text-[28px] leading-[150%] sm:text-[36px] lg:text-[48px] ">
              Booking is quick and easy
            </h2>
            <div className="flex flex-wrap justify-around gap-10 pt-[48px] items-center">
              <div className='text-center'>
                <div className='mb-[24px] '><img src="./images/how-we-work.webp" className='h-[227px]' /></div>
                <h1 className='mb-[12px] text-[28px] font-bold'>BOOK</h1>
                <p> Choose your ideal time and service.</p>

              </div>
              <div className='text-center'>
                <div className='mb-[24px]'> <img src="./images/how-we-work-2.webp" className='h-auto' /></div>

                <h1 className='mb-[12px] text-[28px] font-bold'>BOOK</h1>
                <p> Choose your ideal time and service.</p>

              </div>
              <div className='text-center'>
                <div className='mb-[24px]'>  <img src="./images/how-we-work-3.webp" /></div>

                <h1 className='mb-[12px] text-[28px] font-bold'>BOOK</h1>
                <p> Choose your ideal time and service.</p>

              </div>

            </div>
          </div>
        </div>
      </section>
      <section className=' py-16 bg-[#fae084]'>
        <div className="container mx-auto px-4">
          <h2 className="max-w-[540px] font-bold text-[28px] leading-[150%] sm:text-[36px] lg:text-[48px]  ">
            Your Safety and Satisfaction
          </h2>

          <div className="flex flex-wrap justify-center  gap-6 pt-[30px]">
            {safetyCards.map((card, index) => (
              <SafetyCard
                key={index}
                description={card.description}
                icon={card.icon}
                className="w-full sm:w-[48%] lg:w-[360px]"
              />
            ))}
          </div>

        </div>

      </section>

      {/* <section className=' py-16 bg-[#fae084]'>
        <div className="container mx-auto px-4">
          <h2 className="max-w-[540px] font-bold text-[48px] leading-[150%]  ">
          Your Safety and Satisfaction
          </h2>

          <div className="flex flex-wrap justify-center  gap-6 pt-[30px]">
            {safetyCards.map((card, index) => (
              <SafetyCard
                key={index}
                description={card.description}
                icon={card.icon}
                className="w-full sm:w-[48%] lg:w-[360px]"
              />
            ))}
          </div>
         
        </div>

      </section> */}

      {/* Booking Section */}
      <section className="py-16 bg-white " id="bookingForm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Booking Form */}
            <div className="lg:col-span-2">
              <BookingForm bookingDetails={bookingDetails} setBookingDetails={setBookingDetails} />
            </div>

            {/* Booking Summary Sidebar */}
            <div className="lg:col-span-1">
              <BookingSummary bookingDetails={bookingDetails} />
            </div>
          </div>
        </div>
      </section>

      {/* Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <ChatWidget />
      </div>
    </div>
  );
}