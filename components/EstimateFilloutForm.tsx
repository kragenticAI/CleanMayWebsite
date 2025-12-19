"use client";
import React, { useEffect, useState, useRef, ChangeEvent, FormEvent } from "react";
import { ChevronLeft, ChevronRight, Clock, Loader2 } from "lucide-react";

/* -------------------------------------------------------
   TYPES & INTERFACES
------------------------------------------------------- */

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zipcode: string;
  address: string;
  apartment: string;
  frequency: string;
  propertySize: string;
  numRooms: string;
  bathrooms: string;
  selectedDate: string;
  selectedTime: string;
}
interface EstimateFilloutFormProps {
  children: React.ReactNode;
  propertySizeLabel?: string;
  numRoomsLabel?: string;
}


// Errors object keys match FormData keys, values are error strings
type FormErrors = Partial<Record<keyof FormData, string>>;

interface DateOption {
  fullDate: string;
  dayName: string;
  month: string;
  dayNum: number;
}

interface ZillowAPIResponse {
  message: string;
  propertyDetails?: {
    bedrooms?: number;
    bathrooms?: number;
    livingAreaValue?: number;
    address?: {
      zipcode?: string;
    };
  };
}

/* -------------------------------------------------------
   INTERNAL COMPONENTS PROPS
------------------------------------------------------- */

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  isLoading?: boolean;
}

interface RadioGroupOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  label: string;
  name: keyof FormData;
  options: RadioGroupOption[];
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

/* -------------------------------------------------------
   INTERNAL COMPONENTS
------------------------------------------------------- */

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, className = "", ...props }) => (
  <button
    className={`bg-[#2937b1] hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-md ${className}`}
    {...props}
  >
    {children}
  </button>
);

const InputField: React.FC<InputFieldProps> = ({ label, name, type = "text", placeholder, required, value, onChange, error, isLoading, step, ...rest }) => (
  <div className="mb-6 relative">
    <label className="block text-sm font-semibold text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      <input
        type={type}
        name={name}
        disabled={name == "propertySize" || name == "numRooms" || name == "bathrooms" ? true : false}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        step={step}
        className={`w-full border-b-2 py-2 bg-transparent focus:outline-none transition ${error ? "border-red-500" : "border-gray-300 focus:border-blue-600"
          } ${isLoading ? "pr-10" : ""}`}
        {...rest}
      />
      {/* Loading Spinner for Auto-fill fields */}
      {isLoading && name != 'address' && (
        <div className="absolute right-0 top-2">
          <Loader2 className="animate-spin text-blue-600" size={20} />
        </div>
      )}
    </div>
    {error && <p className="text-xs text-red-600 font-medium mt-1">{error}</p>}
  </div>
);

const RadioGroup: React.FC<RadioGroupProps> = ({ label, name, options, value, onChange, error }) => (
  <div className="mb-6">
    <p className="text-sm font-semibold text-gray-700 mb-2">
      {label} <span className="text-red-500">*</span>
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {options.map((option) => (
        <label
          key={option.value}
          className={`flex items-center gap-2 border rounded-lg px-4 py-3 cursor-pointer transition hover:bg-gray-50 ${value === option.value ? "border-blue-600 bg-blue-50" : "border-gray-300"
            }`}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
            className="accent-blue-600"
          />
          <span className="text-gray-700 text-sm">{option.label}</span>
        </label>
      ))}
    </div>
    {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
  </div>
);

/* -------------------------------------------------------
   HELPER: Generate Next 14 Days
------------------------------------------------------- */
const getNextDays = (days: number): DateOption[] => {
  const dates: DateOption[] = [];
  for (let i = 0; i < days; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    dates.push({
      fullDate: d.toISOString().split("T")[0],
      dayName: d.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase(),
      month: d.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
      dayNum: d.getDate(),
    });
  }
  return dates;
};

const TIME_SLOTS: string[] = [
  "9:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "1:00 PM - 2:00 PM",
  "2:00 PM - 3:00 PM",
  "3:00 PM - 4:00 PM",
];

/* -------------------------------------------------------
   MAIN FORM
------------------------------------------------------- */
const EstimateFilloutForm: React.FC<EstimateFilloutFormProps> = ({ children }) => {
  const dateScrollRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps = 2;

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zipcode: "",
    address: "",
    apartment: "",
    frequency: "",
    propertySize: "",
    numRooms: "",
    bathrooms: "",
    selectedDate: "",
    selectedTime: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoadingZillow, setIsLoadingZillow] = useState<boolean>(false);

  // Generate dynamic dates
  const availableDates = getNextDays(14);

  // --- ZILLOW API INTEGRATION ---
  console.log("errors", errors)


  // The Effect that watches the Address field
  
    useEffect(() => {

      // Avoid calling API on short or empty addresses
      if(formData.address.length===0) return ;
      console.log("formdata", formData.address.length)
      // if (formData.address.length < 10 ) {
      //   setErrors(prev => ({ ...prev, address: "Address must be at least 10 characters long." })); // remove old errors
      //   setIsLoadingZillow(false);
      //   return;
      // }

      const delayDebounceFn = setTimeout(async () => {
        setIsLoadingZillow(true);


        try {

          const response = await fetch(`/api/zillow?address=${encodeURIComponent(formData.address)}`);

          const data: ZillowAPIResponse = await response.json();
          console.log("Data", data.message);
          const status = data.message.split(":")[0].trim();

          if (status != "200") {
            setErrors(prev => ({
              ...prev,
              address: "Could not retrieve property details. Please check the address."
            }));
            return;
          }

          if (data?.propertyDetails) {
            const { bedrooms, bathrooms, livingAreaValue, address } = data.propertyDetails;

            setFormData(prev => ({
              ...prev,
              numRooms: bedrooms ? String(bedrooms) : prev.numRooms,
              bathrooms: bathrooms ? String(bathrooms) : prev.bathrooms,
              propertySize: livingAreaValue ? String(livingAreaValue) : prev.propertySize,
              zipcode: address?.zipcode || prev.zipcode,
            }));

            // Clear all related errors when data is found
            setErrors(prev => ({
              ...prev,
              address: undefined,
              numRooms: undefined,
              bathrooms: undefined,
              propertySize: undefined,
              zipcode: undefined
            }));
          }
          else {
            setErrors(prev => ({
              ...prev,
              address: "No property details found for this address."
            }));
          }

        } catch (error) {
          console.log("Error fetching Zillow API:", error);
          setErrors(prev => ({
            ...prev,
            address: "Unexpected error occurred."
          }));
        } finally {
          setIsLoadingZillow(false);
        }

      }, 1200);

      return () => clearTimeout(delayDebounceFn);



    }, [formData.address]);
  






  /* --- Validation --- */
  const validateStep = (stepToValidate: number): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    switch (stepToValidate) {
      case 1:
        const requiredFields: (keyof FormData)[] = [
          "firstName", "lastName", "email", "phone",
          "zipcode", "address", "frequency",
          "propertySize", "numRooms", "bathrooms",
        ];

        requiredFields.forEach((field) => {
          if (!formData[field]) {
            newErrors[field] = "This field is required";
            isValid = false;
          }
        });

        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = "Invalid email";
          isValid = false;
        }
        break;

      case 2:
        if (!formData.selectedDate) {
          newErrors.selectedDate = "Please select a date";
          isValid = false;
        }
        if (!formData.selectedTime) {
          newErrors.selectedTime = "Please select a time window";
          isValid = false;
        }
        break;
    }

    setErrors(newErrors);
    return isValid;
  };

  /* --- Handlers --- */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Cast name to keyof FormData to ensure type safety
    const fieldName = name as keyof FormData;
    if(value.length==0){
      setFormData({firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zipcode: "",
    address: "",
    apartment: "",
    frequency: "",
    propertySize: "",
    numRooms: "",
    bathrooms: "",
    selectedDate: "",
    selectedTime: "",})
    }

    setFormData((prev) => ({ ...prev, [fieldName]: value }));
    if (errors[fieldName]) {
      setErrors((prev) => ({ ...prev, [fieldName]: undefined }));
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setErrors({});
      window.scrollTo({ top: 0, behavior: "smooth" });
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setErrors({});
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (currentStep < totalSteps) {
      handleNext();
      return;
    }
    if (validateStep(currentStep)) {
      setIsSubmitted(true);
      console.log("Submitting:", formData);
    }
  };

  const frequencyOptions: RadioGroupOption[] = [
    { label: "One time service", value: "one_time" },
    { label: "Once a week", value: "once_a_week" },
    { label: "Every two weeks", value: "every_two_weeks" },
    { label: "Once a month", value: "once_a_month" },
    { label: "Other", value: "other" },
  ];

  /* -------------------------------------------------------
       UI RENDER
  ------------------------------------------------------- */
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center  px-4 mt-[40px]">
      {/* PROGRESS BAR */}
      <div className="mb-5">{children}</div>

      {!isSubmitted && (
        <div className="w-full max-w-4xl mb-8">
          <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
            <span className={currentStep >= 1 ? "text-[#2937b1]" : ""}>Step 1: Details</span>
            <span className={currentStep >= 2 ? "text-[#2937b1]" : ""}>Step 2: Schedule</span>
          </div>
          <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#2937b1] transition-all duration-500 ease-out"
              style={{ width: currentStep === 1 ? "50%" : "100%" }}
            ></div>
          </div>
        </div>
      )}

      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 md:p-12 transition-all">
        {isSubmitted ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Request Received!</h2>
            <p className="text-gray-600 mt-2">
              We have received your estimate request for {formData.selectedDate} at {formData.selectedTime}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* --- STEP 1: INFORMATION --- */}
            {currentStep === 1 && (
              <>

                <div className="animate-fadeIn">


                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                    <InputField
                      label="First Name"
                      name="firstName"
                      required
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      error={errors.firstName}
                    />
                    <InputField
                      label="Last Name"
                      name="lastName"
                      required
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      error={errors.lastName}
                    />
                    <InputField
                      label="Email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                    />
                    <InputField
                      label="Phone"
                      name="phone"
                      required
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                      error={errors.phone}
                    />

                    {/* Address Field with Loading State */}
                    <InputField
                      label="Service Address"
                      name="address"
                      required
                      placeholder="1875 AVONDALE Circle, Jacksonville, FL 32205"
                      value={formData.address}
                      onChange={handleChange}
                      error={errors.address}
                      isLoading={isLoadingZillow}
                    />

                    <InputField
                      label="Zip Code"
                      name="zipcode"
                      required
                      placeholder="32205"
                      value={formData.zipcode}
                      onChange={handleChange}
                      error={errors.zipcode}
                      isLoading={isLoadingZillow} // Also indicates auto-fill happening
                    />
                    <InputField
                      label="Apartment (optional)"
                      name="apartment"
                      placeholder="Apt 4B"
                      value={formData.apartment}
                      onChange={handleChange}
                    />
                  </div>

                  <RadioGroup
                    label="Frequency?"
                    name="frequency"
                    options={frequencyOptions}
                    value={formData.frequency}
                    onChange={handleChange}
                    error={errors.frequency}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                    <InputField
                      label="Property Size (sq ft)"
                      name="propertySize"
                      type="number"
                      required
                      placeholder="Eg: 2000"
                      value={formData.propertySize}
                      onChange={handleChange}
                      error={errors.propertySize}
                      isLoading={isLoadingZillow}
                    />

                    <InputField
                      label="Bedrooms"
                      name="numRooms"
                      type="number"
                      required
                      placeholder="e.g. 3"
                      value={formData.numRooms}
                      onChange={handleChange}
                      error={errors.numRooms}
                      isLoading={isLoadingZillow}
                    />

                    <InputField
                      label="Bathrooms"
                      name="bathrooms"
                      type="number"
                      step="any" // Allows decimal values like 2.5
                      required
                      placeholder="e.g. 2.5"
                      value={formData.bathrooms}
                      onChange={handleChange}
                      error={errors.bathrooms}
                      isLoading={isLoadingZillow}
                    />
                  </div>
                </div>
              </>
            )}

            {/* --- STEP 2: SCHEDULING --- */}
            {currentStep === 2 && (
              <div className="animate-fadeIn">
                <div className="text-center mb-8">
                  <h2 className="text-xl md:text-2xl font-bold mb-2">Thank you! We'll be in touch shortly.</h2>
                  <p className="text-gray-600">
                    In the meantime, please let us know your preferred appointment window for your in-home estimate.
                  </p>
                </div>

                {/* Date Selector */}
                <div className="mb-8 relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-8 cursor-pointer text-gray-400 hover:text-gray-800 z-10">
                    <ChevronLeft size={32} onClick={() => dateScrollRef.current?.scrollBy({ left: -150, behavior: "smooth" })} />
                  </div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-8 cursor-pointer text-gray-400 hover:text-gray-800 z-10">
                    <ChevronRight size={32} onClick={() => dateScrollRef.current?.scrollBy({ left: 150, behavior: "smooth" })} />
                  </div>

                  <div ref={dateScrollRef} className="flex gap-4 overflow-x-auto pb-4 justify-start no-scrollbar px-1">
                    {availableDates.map((date) => (
                      <button
                        key={date.fullDate}
                        type="button"
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, selectedDate: date.fullDate }));
                          if (errors.selectedDate) setErrors((prev) => ({ ...prev, selectedDate: undefined }));
                        }}
                        className={`flex flex-col items-center justify-center min-w-[100px] h-[100px] border rounded-xl 
                          ${formData.selectedDate === date.fullDate ? "border-[#2937b1] text-[#2937b1] shadow-md" : "border-gray-200 text-gray-500 "}
                        `}
                      >
                        <span className="text-xs font-bold uppercase mb-1">{date.month}</span>
                        <span className="text-2xl font-bold mb-1">{date.dayNum}</span>
                        <span className="text-xs uppercase">{date.dayName}</span>
                      </button>
                    ))}
                  </div>
                  {errors.selectedDate && <p className="text-center text-red-600 font-medium text-sm mt-2">{errors.selectedDate}</p>}
                </div>

                {/* Time Selector */}
                <div className="mb-8">
                  <h3 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
                    <Clock size={18} /> Preferred Appointment Time:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {TIME_SLOTS.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, selectedTime: time }));
                          if (errors.selectedTime) setErrors((prev) => ({ ...prev, selectedTime: undefined }));
                        }}
                        className={`py-3 px-4 rounded-lg border text-sm font-medium transition-all
                          ${formData.selectedTime === time ? "border-[#2937b1] " : "border-gray-200 text-gray-600"}
                        `}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  {errors.selectedTime && <p className="text-red-600 font-medium text-sm mt-2">{errors.selectedTime}</p>}
                </div>

                {/* Summary Selection */}
                {formData.selectedDate && formData.selectedTime && (
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6 flex justify-between items-center">
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">Selected Appointment</p>
                      <p className="text-gray-900 font-bold">
                        {formData.selectedDate} @ {formData.selectedTime}
                      </p>
                    </div>
                    <div className="h-8 w-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* --- NAVIGATION BUTTONS --- */}
            <div className=" flex justify-between items-center  border-t border-gray-100">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-2 text-gray-600 font-semibold hover:text-gray-900 hover:bg-gray-100 rounded-lg transition"
                >
                  Back
                </button>
              ) : (
                <div></div>
              )}

              {currentStep < totalSteps ? (
                <PrimaryButton type="button" onClick={handleNext} className="text-white">
                  Next Step
                </PrimaryButton>
              ) : (
                <PrimaryButton type="submit" className="text-white">
                  Submit Request
                </PrimaryButton>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EstimateFilloutForm;