'use client';

import { useState } from 'react';

// ✅ 1. Define the shape of errors
interface Step3Errors {
  streetNumber?: string;
  streetName?: string;
  city?: string;
  state?: string;
}

// ✅ 2. Update props to accept errors
interface Step3Props {
  bookingDetails: any;
  setBookingDetails: React.Dispatch<React.SetStateAction<any>>;
  errors: Step3Errors;
  setErrors: React.Dispatch<React.SetStateAction<any>>;
}

// ✅ 3. Destructure new props
export default function Step3({ bookingDetails, setBookingDetails, errors, setErrors }: Step3Props) {

  // ✅ 4. Update handleChange to clear errors
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Clear the error for this field
    if (errors[name as keyof Step3Errors]) {
      setErrors((prev: any) => ({ ...prev, [name]: undefined }));
    }

    setBookingDetails((prev:any) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Where Do You Need Service?</h2>
      <p className="mb-6 text-gray-600">
        Please provide your service address
      </p>

      {/* Address Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <input
            type="text"
            name="streetNumber"
            value={bookingDetails.streetNumber}
            onChange={handleChange}
            placeholder="Street Number"
            // ✅ 5. Add conditional styling & error display
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent ${
              errors.streetNumber ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500' 
            }`}
          />
          {errors.streetNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.streetNumber}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            name="streetName"
            value={bookingDetails.streetName}
            onChange={handleChange}
            placeholder="Street Name"
            // ✅ 6. Add conditional styling & error display
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent ${
              errors.streetName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500' 
            }`}
          />
          {errors.streetName && (
            <p className="text-red-500 text-sm mt-1">{errors.streetName}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <input
            type="text"
            name="city"
            value={bookingDetails.city}
            onChange={handleChange}
            placeholder="City"
            // ✅ 7. Add conditional styling & error display
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent ${
              errors.city ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500' 
            }`}
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city}</p>
          )}
        </div>
        <div>
          <select
            name="state"
            value={bookingDetails.state}
            onChange={handleChange}
            // ✅ 8. Add conditional styling & error display
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent ${
              errors.state ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500' 
            }`}
          >
            <option value="">Select State</option> {/* ✅ Add a default empty value */}
            <option>CO</option>
            <option>CA</option>
            <option>NY</option>
            <option>TX</option>
            <option>FL</option>
            {/* Add more states as needed */}
          </select>
          {errors.state && (
            <p className="text-red-500 text-sm mt-1">{errors.state}</p>
          )}
        </div>
      </div>

      {/* Additional Notes (Optional, no validation) */}
      <div className="mb-4">
        <textarea
          name="notes"
          value={bookingDetails.notes}
          onChange={handleChange}
          placeholder="Include notes such as access codes and parking instructions here. (optional)"
          rows={3}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        ></textarea>
      </div>
    </div>
  );
}