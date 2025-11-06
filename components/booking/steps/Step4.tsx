'use client';

import { useState } from 'react';

// ✅ 1. Define the shape of errors
interface Step4Errors {
  cardNumber?: string;
  expiry?: string;
  cvc?: string;
}

// ✅ 2. Update props to accept errors
interface Step4Props {
  bookingDetails: any;
  setBookingDetails: React.Dispatch<React.SetStateAction<any>>;
  errors: Step4Errors;
  setErrors: React.Dispatch<React.SetStateAction<any>>;
}

// ✅ 3. Destructure new props
export default function Step4({ bookingDetails, setBookingDetails, errors, setErrors }: Step4Props) {

  // ✅ 4. Update handleChange to clear errors
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Clear the error for this field
    if (errors[name as keyof Step4Errors]) {
      setErrors((prev: any) => ({ ...prev, [name]: undefined }));
    }

    setBookingDetails((prev:any) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Book Now or Save Quote</h2>
      <p className="mb-6 text-gray-600">
        You may book now by entering your card details or leave blank and save quote for later.
      </p>

      {/* Card Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <input
            type="text"
            name="cardNumber"
            value={bookingDetails.cardNumber}
            onChange={handleChange}
            placeholder="1234 1234 1234 1234"
            // ✅ 5. Add conditional styling & error display
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent ${
              errors?.cardNumber ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500' 
            }`}
          />
          {errors?.cardNumber && (
            <p className="text-red-500 text-sm mt-1">{errors?.cardNumber}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            name="expiry"
            value={bookingDetails.expiry}
            onChange={handleChange}
            placeholder="MM / YY"
            // ✅ 6. Add conditional styling & error display
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent ${
              errors.expiry ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500' 
            }`}
          />
          {errors.expiry && (
            <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            name="cvc"
            value={bookingDetails.cvc}
            onChange={handleChange}
            placeholder="CVC"
            // ✅ 7. Add conditional styling & error display
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent ${
              errors.cvc ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500' 
            }`}
          />
          {errors.cvc && (
            <p className="text-red-500 text-sm mt-1">{errors.cvc}</p>
          )}
        </div>
      </div>

      {/* Security Badges */}
      <div className="flex items-center justify-between mb-6">
        {/* ... (rest of your component) ... */}
      </div>

      {/* Terms Section */}
      <div className="mb-6">
        {/* ... (rest of your component) ... */}
      </div>
    </div>
  );
}