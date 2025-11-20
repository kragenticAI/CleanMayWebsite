'use client';

import Image from "next/image";

export default function BookingSummary({ bookingDetails }: { bookingDetails: any }) {
  const formData = { ...bookingDetails };
  
  // 🧠 Map service type to readable labels
  const serviceLabels: Record<string, string> = {
    deep: "Deep Cleaning (for homes that have not been cleaned in 3+ weeks)",
    regular: "Regular Cleaning",
    moving: "Moving Cleaning",
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-[20px]">
      <h2 className="text-xl font-bold mb-4">Booking Summary</h2>
      <div className="border-t pt-3 mt-3">
        <p>{formData.firstName}</p>
      </div>

      {formData.firstName && (
        <div className="border-b pb-3 mb-3">
          <p>{formData.lastName}</p>
          <p>{formData.phoneNumber}</p>
          <p>{formData.email}</p>
        </div>
      )}

      {/* Service Type */}
      <div className="flex items-start mb-4 gap-3">
        <Image
          src="/images/summary1.png"
          alt="img1"
          width={40}
          height={40}
          className="object-contain"
        />
        <div>
          <div className="font-medium">
            {formData.serviceType
              ? serviceLabels[formData.serviceType]
              : "No service selected"}
          </div>
        </div>
      </div>

      {/* Home Size */}
      {formData.title && (
        <div className="flex items-start mb-4 gap-3">
          <Image
            src="/images/service.png"
            alt="img2"
            width={40}
            height={40}
            className="object-contain"
          />
          <div>
            <div className="text-sm text-gray-600">{formData.title}</div>
          </div>
        </div>
      )}

      {/* Date & Time */}
      {(formData.date || formData.time) && (
        <div className="flex items-start mb-4 gap-3">
          <Image
            src="/images/calender.png"
            alt="img3"
            width={40}
            height={40}
            className="object-contain"
          />
          <div>
            <div className="font-medium">
              {formData.date || "Select a date"}
              {formData.date && formData.time ? ", " : ""}
              {formData.time || ""}
            </div>
          </div>
        </div>
      )}

      {/* Frequency */}
      {formData.frequency && (
        <div className="flex items-start mb-6 gap-3">
          <Image
            src="/images/frequency.png"
            alt="img4"
            width={40}
            height={40}
            className="object-contain"
          />
          <div>
            <div className="font-medium">{formData.frequency}</div>
          </div>
        </div>
      )}

      {/* Pricing */}
      {formData.price && (
        <div className="space-y-3">
          <div className="border-t pt-3 mt-3">
            <div className="flex justify-between font-bold text-lg">
              <span>TODAY'S TOTAL</span>
              <span>${formData.price}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
