'use client';
import { useState } from 'react';
import HomeSizeCard from '../HomeSizeCard';
import { homeSizesData } from '../../../Data/homeSizes';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// ✅ Errors interface
interface Step1Errors {
  zipCode?: string;
  selectedHomeSize?: string;
  date?: string;
  time?: string;
  frequency?: string;
}

// ✅ Props interface
interface Step1Props {
  bookingDetails: {
    zipCode: string;
    serviceType: keyof typeof homeSizesData;
    selectedHomeSize: number | null;
    specialRequest: string;
    date: Date | null;
    time: string;
    frequency: string;
  };
  setBookingDetails: React.Dispatch<React.SetStateAction<any>>;
  errors: Step1Errors;
  setErrors: React.Dispatch<React.SetStateAction<any>>;
}

// ✅ Properly typed icons
const icons: Record<number, React.ReactNode> = {
  1: <img src="/images/house1-2.png" />,
  2: <img src="/images/house1-2.png" />,
  3: <img src="/images/house3-4.png" />,
  4: <img src="/images/house3-4.png" />,
  5: <img src="/images/house5.png" />,
  6: <img src="/images/house6.png" />,
};

export default function Step1({ bookingDetails, setBookingDetails, errors, setErrors }: Step1Props) {
  const [showCalendar, setShowCalendar] = useState(false);
  const today = new Date();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (errors[name as keyof Step1Errors]) {
      setErrors((prev: any) => ({ ...prev, [name]: undefined }));
    }

    setBookingDetails((prev: any) => {
      let updated = { ...prev, [name]: value };

      if (name === "serviceType" && prev.selectedHomeSize) {
        type ServiceType = keyof typeof homeSizesData;
        const selectedSize = homeSizesData[value as ServiceType]?.find(
          (size) => size.id === prev.selectedHomeSize
        );

        if (selectedSize) {
          updated.price = selectedSize.price;
          updated.title = selectedSize.title;
        } else {
          updated.price = null;
        }
      }
      return updated;
    });
  };

  const handleDateChange = (date: Date) => {
    if (errors.date) {
      setErrors((prev: any) => ({ ...prev, date: undefined }));
    }

    const formattedDate = formatDate(date);
    setBookingDetails((prev: any) => ({
      ...prev,
      date: formattedDate,
    }));
    setShowCalendar(false);
  };

  const handleHomeSizeSelect = (id: number, price: number, title: string) => {
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
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent ${
            errors.zipCode ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
          }`}
          placeholder="Enter ZIP code"
        />
        {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
      </div>

      {/* Service Type */}
      <div className="mb-4">
        <select
          name="serviceType"
          value={bookingDetails.serviceType}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="deep">Deep Cleaning</option>
          <option value="regular">Regular Cleaning</option>
          <option value="moving">Moving Cleaning</option>
        </select>
      </div>

      {/* Home Size */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-[13px]">
          {homeSizesData[bookingDetails.serviceType]?.map((size) => (
            <HomeSizeCard
              key={size.id}
              title={size.title}
              subtitle={size.subtitle}
              icon={icons[size.id as keyof typeof icons]}
              selected={bookingDetails.selectedHomeSize === size.id}
              onClick={() => handleHomeSizeSelect(size.id, size.price, size.title)}
            />
          ))}
        </div>
        {errors.selectedHomeSize && <p className="text-red-500 text-sm mt-2">{errors.selectedHomeSize}</p>}
      </div>
    </div>
  );
}
