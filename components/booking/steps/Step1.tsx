'use client';
import Image from 'next/image';
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

type ServiceType = keyof typeof homeSizesData;

interface Step1Errors {
  zipCode?: string;
  selectedHomeSize?: string;
  date?: string;
  time?: string;
  frequency?: string;
}

interface Step1Props {
  bookingDetails: {
    zipCode: string;
    serviceType: string;
    selectedHomeSize: number | null;
    specialRequest: string;
    date: Date | string | null;
    time: string;
    frequency: string;
  };
  setBookingDetails: React.Dispatch<React.SetStateAction<any>>;
  errors: Step1Errors;
  setErrors: React.Dispatch<React.SetStateAction<any>>;
}

const icons: { [key: number]: React.ReactNode } = {
  1: <Image src="/images/house1-2.png" alt="Studio" width={60} height={60} />,
  2: <Image src="/images/house1-2.png" alt="Small" width={60} height={60} />,
  3: <Image src="/images/house3-4.png" alt="Medium" width={60} height={60} />,
  4: <Image src="/images/house3-4.png" alt="Large" width={60} height={60} />,
  5: <Image src="/images/house5.png" alt="X-Large" width={60} height={60} />,
  6: <Image src="/images/house6.png" alt="Mansion" width={60} height={60} />,
};

export default function Step1({ bookingDetails, setBookingDetails, errors, setErrors }: Step1Props) {
  const today = new Date();

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
          updated.selectedHomeSize = null;
        }
      }
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
    return d.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
  };

  const formatDateForInput = (date: Date | string | null) => {
    if (!date) return '';
    const d = new Date(date);
    if (isNaN(d.getTime())) return '';
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(
      d.getDate()
    ).padStart(2, '0')}`;
  };

  const handleDateChange = (date: Date | null) => {
    if (!date) return;
    if (errors.date) {
      setErrors((prev: any) => ({ ...prev, date: undefined }));
    }
    const formattedDate = formatDate(date);
    setBookingDetails((prev: any) => ({ ...prev, date: formattedDate }));
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

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center md:text-left">Your Booking Details</h2>
      <p className="mb-6 text-gray-600 text-sm md:text-base text-center md:text-left">
        Enter your ZIP code, select a service, home size, and other details below.
      </p>

      {/* ZIP Code */}
      <div className="mb-5">
        <input
          type="text"
          name="zipCode"
          value={bookingDetails.zipCode}
          onChange={handleChange}
          className={`w-full p-3 border rounded-lg text-sm md:text-base focus:ring-2 focus:border-transparent ${
            errors.zipCode ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
          }`}
          placeholder="Enter ZIP code"
        />
        {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
      </div>

      {/* Service Type */}
      <div className="mb-5">
        <select
          name="serviceType"
          value={bookingDetails.serviceType}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="deep">Deep Cleaning (for homes that have not been cleaned in 3+ weeks)</option>
          <option value="regular">Regular Cleaning</option>
          <option value="moving">Moving Cleaning</option>
        </select>
      </div>

      {/* Home Sizes */}
      <div className="mb-6">
        <div className="grid grid-cols-2 lg:grid-cols-6  gap-3 sm:gap-4">
          {homeSizesData[bookingDetails.serviceType as ServiceType]?.map((size) => (
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

      {/* Date, Time, Frequency */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {/* Date */}
        <div>
          <input
            type="date"
            name="date"
            value={formatDateForInput(bookingDetails.date)}
            onChange={(e) =>
              handleDateChange(e.target.value ? new Date(e.target.value.replace(/-/g, '/')) : null)
            }
            min={today.toISOString().split('T')[0]}
            className={`p-3 border rounded-lg text-sm md:text-base focus:ring-2 focus:border-transparent w-full ${
              errors.date ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
            }`}
          />
          {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
        </div>

        {/* Time */}
        <div>
          <select
            name="time"
            value={bookingDetails.time}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg text-sm md:text-base focus:ring-2 focus:border-transparent ${
              errors.time ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
            }`}
          >
            <option value="">Select Time</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="3:00 PM">3:00 PM</option>
          </select>
          {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
        </div>

        {/* Frequency */}
        <div>
          <select
            name="frequency"
            value={bookingDetails.frequency}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg text-sm md:text-base focus:ring-2 focus:border-transparent ${
              errors.frequency
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-blue-500'
            }`}
          >
            <option value="">Select Frequency</option>
            <option>Weekly Cleaning (20%)</option>
            <option>Bi-weekly (15%)</option>
            <option>Monthly (10%)</option>
          </select>
          {errors.frequency && <p className="text-red-500 text-sm mt-1">{errors.frequency}</p>}
        </div>
      </div>
    </div>
  );
}
