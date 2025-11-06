'use client';
import { useState } from 'react';
// import HomeSizeCard from '../HomeSizeCard'; // Removed import
// import { homeSizesData } from '../../../Data/homeSizes'; // Removed import
import { FaHome, FaBuilding, FaHotel, FaHospital } from 'react-icons/fa';
// import Calendar from 'react-calendar'; // Removed import
// import 'react-calendar/dist/Calendar.css'; // Removed import

// --- Mock Data & Components to Fix Build Errors ---

// Mock data for homeSizesData
import HomeSizeCard from '@/components/cards/HomeSizeCard';
const homeSizesData = {
  regular: [
    { id: 1, title: 'Studio', subtitle: '1 bed / 1 bath', price: 100 },
    { id: 2, title: 'Small', subtitle: '2 bed / 1 bath', price: 120 },
    { id: 3, title: 'Medium', subtitle: '3 bed / 2 bath', price: 140 },
    { id: 4, title: 'Large', subtitle: '4 bed / 3 bath', price: 160 },
    { id: 5, title: 'X-Large', subtitle: '5 bed / 4 bath', price: 180 },
    { id: 6, title: 'Mansion', subtitle: '6+ bed / 5+ bath', price: 200 },
  ],
  deep: [
    { id: 1, title: 'Studio', subtitle: '1 bed/1 bath', price: 150 },
    { id: 2, title: 'Small', subtitle: '2 bed/1 bath', price: 180 },
    { id: 3, title: 'Medium', subtitle: '3 bed/2 bath', price: 210 },
    { id: 4, title: 'Large', subtitle: '4 bed/3 bath', price: 240 },
    { id: 5, title: 'X-Large', subtitle: '5 bed/4 bath', price: 270 },
    { id: 6, title: 'Mansion', subtitle: '6+bed/5+ bath', price: 300 },
  ],
  moving: [
    { id: 1, title: 'Studio', subtitle: '1 bed/1 bath', price: 200 },
    { id: 2, title: 'Small', subtitle: '2 bed/1 bath', price: 240 },
    { id: 3, title: 'Medium', subtitle: '3 bed/2 bath', price: 280 },
    { id: 4, title: 'Large', subtitle: '4 bed/3 bath', price: 320 },
    { id: 5, title: 'X-Large', subtitle: '5 bed/4 bath', price: 360 },
    { id: 6, title: 'Mansion', subtitle: '6+ bed/5+ bath', price: 400 },
  ],
};

// Mock HomeSizeCard component


// --------------------------------------------------

// ✅ Define the service type based on the keys of homeSizesData
type ServiceType = keyof typeof homeSizesData;

// ✅ 1. Define the shape of errors this component expects
interface Step1Errors {
  zipCode?: string;
  selectedHomeSize?: string;
  date?: string;
  time?: string;
  frequency?: string;
}

// ✅ 2. Update props to accept errors and the setter
interface Step1Props {
  bookingDetails: {
    zipCode: string;
    serviceType: string; // Kept as string as it comes from form inputs
    selectedHomeSize: number | null;
    specialRequest: string;
    date: Date | string | null; // Allow string for input
    time: string;
    frequency: string;
  };
  setBookingDetails: React.Dispatch<React.SetStateAction<any>>;
  errors: Step1Errors; // <-- Add this
  setErrors: React.Dispatch<React.SetStateAction<any>>; // <-- Add this
}

const icons: { [key: number]: React.ReactNode } = {
  1: <img src="./images/house1-2.png" alt="Studio" />,
  2: <img src="./images/house1-2.png" alt="Small" />,
  3: <img src="./images/house3-4.png" alt="Medium" />,
  4: <img src="./images/house3-4.png" alt="Large" />,
  5: <img src="./images/house5.png" alt="X-Large" />,
  6: <img src="./images/house6.png" alt="Mansion" />,
};

// ✅ 3. Destructure new props: errors and setErrors
export default function Step1({ bookingDetails, setBookingDetails, errors, setErrors }: Step1Props) {
  // const [showCalendar, setShowCalendar] = useState(false); // Removed for <input type="date">
  console.log("booking Details", bookingDetails);
  const today = new Date();

  // ✅ 4. Update handleChange to clear errors on input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (errors[name as keyof Step1Errors]) {
      setErrors((prev: any) => ({ ...prev, [name]: undefined }));
    }

    setBookingDetails((prev: any) => {
      let updated = { ...prev, [name]: value };

      if (name === "serviceType" && prev.selectedHomeSize) {
        const selectedSize = homeSizesData[value as ServiceType]?.find(
          (size) => size.id === prev.selectedHomeSize
        );

        if (selectedSize) {
          updated.price = selectedSize.price;
          updated.title = selectedSize.title;
        } else {
          updated.price = null;
          updated.selectedHomeSize = null; // Deselect if size doesn't exist in new type
        }
      }

      // Handle date input
      if (name === "date") {
        const formattedDate = formatDate(new Date(value.replace(/-/g, '/')));
        updated.date = formattedDate;
      }

      return updated;
    });
  };

  const formatDate = (date: Date | string | null) => {
    if (!date) return '';
    const d = date instanceof Date ? date : new Date(date);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    });
  };

  // Helper to format date for <input type="date"> value
  const formatDateForInput = (date: Date | string | null) => {
    if (!date) return '';
    const d = new Date(date);
    if (isNaN(d.getTime())) return '';

    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };



  // ✅ 5. Update handleDateChange to clear date error
  const handleDateChange = (date: Date | null) => {
    if (!date) return; // Don't do anything if date is null

    // Clear date error on selection
    if (errors.date) {
      setErrors((prev: any) => ({ ...prev, date: undefined }));
    }

    const formattedDate = formatDate(date);
    setBookingDetails((prev: any) => ({
      ...prev,
      date: formattedDate,
    }));
  };

  // ✅ 6. Update handleHomeSizeSelect to clear home size error
  const handleHomeSizeSelect = (id: number, price: number, title: string) => {
    // Clear home size error on selection
    if (errors.selectedHomeSize) {
      setErrors((prev: any) => ({ ...prev, selectedHomeSize: undefined }));
    }

    setBookingDetails((prev: any) => ({
      ...prev,
      selectedHomeSize: id,
      price,
      title,
    }));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Booking Details</h2>
      <p className="mb-6 text-gray-600">
        Enter zip code then choose service type, home size and other details
      </p>

      {/* ZIP Code */}
      <div className="mb-4">
        <input
          type="text"
          name="zipCode"
          value={bookingDetails.zipCode}
          onChange={handleChange}
          // ✅ 7. Add conditional styling and error display
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent ${errors.zipCode ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
            }`}
          placeholder="Enter ZIP code"
        />
        {errors.zipCode && (
          <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>
        )}
      </div>

      {/* Service Type (No validation needed, has default) */}
      <div className="mb-4">
        <select
          name="serviceType"
          value={bookingDetails.serviceType}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="deep">Deep Cleaning (for homes that have not been cleaned in 3+ weeks)</option>
          <option value="regular">Regular Cleaning</option>
          <option value="moving">Moving Cleaning</option>
        </select>
      </div>

      {/* Home Size */}
      <div className="mb-6">
        <div className=" flex flex-wrap gap-[13px]">
          {/* ✅ TYPE-FIX: Cast serviceType to ServiceType (keyof typeof homeSizesData) */}
          {homeSizesData[bookingDetails.serviceType as ServiceType]?.map((size) => (
            <HomeSizeCard
              key={size.id}
              title={size.title}
              subtitle={size.subtitle}
              icon={icons[size.id as keyof typeof icons]} // Also added a type guard for icons
              selected={bookingDetails.selectedHomeSize === size.id}
              onClick={() => handleHomeSizeSelect(size.id, size.price, size.title)}
            />
          ))}
        </div>
        {/* ✅ 8. Add error display for Home Size */}
        {errors.selectedHomeSize && (
          <p className="text-red-500 text-sm mt-2">{errors.selectedHomeSize}</p>
        )}
      </div>

      {/* Date & Time */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Calendar Input - Replaced with <input type="date"> */}
        <div>
          <input
            type="date"
            name="date"
            value={formatDateForInput(bookingDetails.date)}
            // Use handleDateChange to process the date and clear errors
            onChange={(e) => handleDateChange(e.target.value ? new Date(e.target.value.replace(/-/g, '/')) : null)}
            min={today.toISOString().split('T')[0]}
            className={`p-3 border rounded-lg focus:ring-2 focus:border-transparent w-full ${errors.date ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
              }`}
          />
          {/* ✅ 10. Add error display for Date */}
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">{errors.date}</p>
          )}
        </div>

        {/* Time */}
        <div> {/* Added div for error message layout */}
          <select
            name="time"
            value={bookingDetails.time}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent ${errors.time ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
              }`}
          >
            <option value="">Select Time</option> {/* ✅ Correct placeholder */}
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="3:00 PM">3:00 PM</option>
          </select>

          {/* ✅ 12. Add error display for Time */}
          {errors.time && (
            <p className="text-red-500 text-sm mt-1">{errors.time}</p>
          )}
        </div>

        {/* Frequency */}
        <div> {/* Added div for error message layout */}
          <select
            name="frequency"
            value={bookingDetails.frequency}
            onChange={handleChange}
            // ✅ 13. Add conditional styling
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent ${errors.frequency ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
              }`}
          >
            <option value="">Select Frequency</option>
            <option>Weekly Cleaning (20%)</option>
            <option>Bi-weekly (15%)</option>
            <option>Monthly (10%)</option>
          </select>
          {/* ✅ 14. Add error display for Frequency */}
          {errors.frequency && (
            <p className="text-red-500 text-sm mt-1">{errors.frequency}</p>
          )}
        </div>
      </div>
    </div>
  );
}