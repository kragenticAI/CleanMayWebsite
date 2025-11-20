"use client";
import { useState, useEffect } from "react";
import BookingForm from "@/components/booking/BookingForm";
import BookingSummary from "@/components/booking/BookingSummary";

interface BookNowPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookNowPopup({ isOpen, onClose }: BookNowPopupProps) {
  const today = new Date();

  const [bookingDetails, setBookingDetails] = useState({
    zipCode: "",
    serviceType: "deep",
    selectedHomeSize: 1,
    specialRequest: "**Services within 24 hours**",
    date: today.toLocaleDateString("en-US"),
    time: "10:00AM",
    frequency: "Weekly Cleaning (20%)",
    price: 298,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    howDidYouHear: "",
    agreeToTexts: false,
    streetNumber: "",
    streetName: "",
    city: "",
    state: "CO",
    notes: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    title: "1 bd / 1 ba",
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white w-full h-full rounded-none shadow-lg overflow-y-auto relative p-6">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-[35px] z-50 mx-[30px] fixed"
        >
          ×
        </button>

        <section className="py-6 bg-white z-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <BookingForm
                  bookingDetails={bookingDetails}
                  setBookingDetails={setBookingDetails}
                />
              </div>

              <div className="lg:col-span-1">
                <BookingSummary bookingDetails={bookingDetails} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
