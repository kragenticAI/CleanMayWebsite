'use client';

// ✅ 1. Define the shape of errors this component expects
interface Step2Errors {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
  agreeToTexts?: string;
}

// ✅ 2. Update props to accept errors and the setter
interface Step2Props {
  bookingDetails: any;
  setBookingDetails: React.Dispatch<React.SetStateAction<any>>;
  errors: Step2Errors; // <-- Add this
  setErrors: React.Dispatch<React.SetStateAction<any>>; // <-- Add this
}

// ✅ 3. Destructure new props: errors and setErrors
export default function Step2({ bookingDetails, setBookingDetails, errors, setErrors }: Step2Props) {
  console.log("in step 2");

  // ✅ 4. Update handleChange to clear errors on input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    // Clear the error for this field when user starts interacting
    if (errors[name as keyof Step2Errors]) {
      setErrors((prev: any) => ({ ...prev, [name]: undefined }));
    }

    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setBookingDetails((prev:any) => ({
        ...prev,
        [name]: target.checked
      }));
    } else {
      setBookingDetails((prev:any) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Contact Details</h2>
      <p className="mb-6 text-gray-600">
        Please provide your name, phone number and email
      </p>

      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <input
            type="text"
            name="firstName"
            value={bookingDetails.firstName}
            onChange={handleChange}
            placeholder="First Name"
            // ✅ 5. Add conditional styling and error display
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent ${
              errors.firstName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500' 
            }`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            value={bookingDetails.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            // ✅ 6. Add conditional styling and error display
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent ${
              errors.lastName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500' 
            }`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>
      </div>

      {/* Phone & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <input
            type="tel"
            name="phoneNumber"
            value={bookingDetails.phoneNumber}
            onChange={handleChange}
            placeholder="(XXX) XXX-XXXX"
            // ✅ 7. Add conditional styling and error display
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent ${
              errors.phoneNumber ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500' 
            }`}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
          )}
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={bookingDetails.email}
            onChange={handleChange}
            placeholder="Email Address"
            // ✅ 8. Add conditional styling and error display
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent ${
              errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500' 
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      {/* How Did You Hear About Us (Optional, no validation) */}
      <div className="mb-4">
        <textarea
          name="howDidYouHear"
          value={bookingDetails.howDidYouHear}
          onChange={handleChange}
          placeholder="How did you hear about us? (optional)"
          rows={3}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        ></textarea>
      </div>

      {/* Text Message Consent */}
      <div className="mb-6">
        <div className="flex items-start">
          <input
            type="checkbox"
            name="agreeToTexts"
            checked={bookingDetails.agreeToTexts}
            onChange={handleChange}
            // ✅ 9. Add conditional styling
            className={`mt-1 mr-3 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-2 ${
              errors.agreeToTexts ? 'ring-red-500' : 'focus:ring-blue-500'
            }`}
          />
          <div>
            <p className="text-sm text-gray-700">
              I agree to receive communications by text message regarding booking confirmations from Pro Housekeepers. 
              You may opt-out by replying STOP or ask for more information by replying HELP. 
              Message frequency varies. Message and data rates may apply. You may review our{' '}
              <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>{' '}
              to learn how your data is used.
            </p>
          </div>
        </div>
        {/* ✅ 10. Add error display for checkbox */}
        {errors.agreeToTexts && (
            <p className="text-red-500 text-sm mt-1 ml-8">{errors.agreeToTexts}</p> // ml-8 to align with text
          )}
      </div>
    </div>
  );
}