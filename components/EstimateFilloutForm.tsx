"use client";
import React, { useState } from "react";
import { LucideIcon } from "lucide-react";
import PrimaryButton from "./buttons/PrimaryButton";

/* -------------------------------------------------------
   TYPES
------------------------------------------------------- */
interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;
  frequency: string;
  propertySize: string;
  numRooms: string;
  summary: string;
}

interface Errors {
  [key: string]: string | undefined;
}

interface InputFieldProps {
  label: string;
  name: keyof FormData;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
  type?: "text" | "email" | "tel" | "number";
  placeholder?: string;
  required?: boolean;
  Icon?: LucideIcon;
  children?: React.ReactNode;
}

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  label: string;
  name: keyof FormData;
  options: RadioOption[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}

interface EstimateFilloutFormProps {
  children: React.ReactNode;
   propertySizeLabel?: string;
  numRoomsLabel?: string;
}

/* -------------------------------------------------------
   INPUT FIELD (Improved UI)
------------------------------------------------------- */
const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  children,
  value,
  onChange,
  error,
}) => (
  <div className="mb-8">
    <label className="block text-sm font-semibold text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>

    {children || (
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full border-b-2 py-2 bg-transparent focus:outline-none transition 
          ${error ? "border-red-500" : "border-gray-300 focus:border-blue-600"}
        `}
      />
    )}

    {error && (
      <p className="text-xs text-red-600 font-medium mt-1">{error}</p>
    )}
  </div>
);

/* -------------------------------------------------------
   RADIO GROUP (Improved Modern UI)
------------------------------------------------------- */
const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  name,
  options,
  value,
  onChange,
  error,
}) => (
  <div className="mb-8">
    <p className="text-sm font-semibold text-gray-700 mb-2">
      {label} <span className="text-red-500">*</span>
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {options.map((option) => (
        <label
          key={option.value}
          className={`flex items-center gap-2 border rounded-lg px-4 py-3 cursor-pointer transition 
            hover:bg-gray-50 active:scale-[0.99]
            ${
              value === option.value
                ? "border-blue-600 bg-blue-50"
                : "border-gray-300"
            }
          `}
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
   MAIN FORM
------------------------------------------------------- */
const EstimateFilloutForm: React.FC<EstimateFilloutFormProps> = ({
  children,
//   propertySizeLabel,
//   numRoomsLabel

}) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    frequency: "",
    propertySize: "",
    numRooms: "",
    summary: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  /* ---------------------------
        VALIDATION
  --------------------------- */
  const validateForm = (): boolean => {
    const newErrors: Errors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      const typedKey = key as keyof FormData;

      if (typedKey !== "companyName" && typedKey !== "summary") {
        if (!formData[typedKey].trim()) {
          const label = typedKey.replace(/([A-Z])/g, " $1");
          newErrors[typedKey] =
            label.charAt(0).toUpperCase() + label.slice(1) + " is required.";
          isValid = false;
        }
      }
    });

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
      isValid = false;
    }

    if (formData.phone && !/^[\d\s-()+.x]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  /* ---------------------------
        CHANGE HANDLER
  --------------------------- */
 const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value, type } = e.target;
  const checked = (e.target as HTMLInputElement).checked;

  const key = name as keyof FormData;

  setFormData((prev) => ({
    ...prev,
    [key]: type === "radio" ? (checked ? value : prev[key]) : value,
  }));

  if (errors[key]) {
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }
};

  /* ---------------------------
        SUBMIT HANDLER
  --------------------------- */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(false);

    if (validateForm()) {
      setIsSubmitted(true);
    }

    setFormData({
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      phone: "",
      frequency: "",
      propertySize: "",
      numRooms: "",
      summary: "",
    });

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const frequencyOptions: RadioOption[] = [
    { label: "One time service", value: "one_time" },
    { label: "Once a week", value: "once_a_week" },
    { label: "Every two weeks", value: "every_two_weeks" },
    { label: "Once a month", value: "once_a_month" },
    { label: "Other", value: "other" },
  ];

  /* -------------------------------------------------------
      UI OUTPUT
  ------------------------------------------------------- */
  return (
    <div className="min-h-screen bg-gray-100  px-4">
      <div className="max-w-2xl  mb-6">{children}</div>

      <div className="max-w-2xl bg-white rounded-2xl shadow-xl p-8 md:p-12 ">

        {isSubmitted && (
          <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg text-center font-medium animate-fadeIn">
            Thank you! Your request has been successfully submitted!
          </div>
        )}

        <form onSubmit={handleSubmit}>
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
            label="Company Name"
            name="companyName"
            placeholder="Optional"
            value={formData.companyName}
            onChange={handleChange}
            error={errors.companyName}
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

          <RadioGroup
            label="How frequently do you require service?"
            name="frequency"
            value={formData.frequency}
            onChange={handleChange}
            options={frequencyOptions}
            error={errors.frequency}
          />

          <InputField
            label= "Size of property to be cleaned"
            name="propertySize"
            required
            placeholder="Eg: 2000 sq ft"
            value={formData.propertySize}
            onChange={handleChange}
            error={errors.propertySize}
          />

          <InputField
           label= "How many rooms will be cleaned?"
            name="numRooms"
            required
            placeholder="Eg: 3 bed, 2 bath, kitchen"
            value={formData.numRooms}
            onChange={handleChange}
            error={errors.numRooms}
          />

          {/* Summary */}
          <InputField
            label="Summarize your request"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            error={errors.summary}
          >
            <textarea
              name="summary"
              rows={4}
              value={formData.summary}
              onChange={handleChange}
              className={`w-full border rounded-lg p-3 focus:outline-none transition
                ${
                  errors.summary
                    ? "border-red-500"
                    : "border-gray-300 focus:border-blue-600"
                }
              `}
              placeholder="Describe rooms, areas to clean, special instructions..."
            />
          </InputField>

          {/* Submit Button */}
          <div className="mt-10 text-right">
            <PrimaryButton
              
              className="text-white hover:underline"
           
            >
              {isSubmitted ? "Request Submitted" : "Request An Estimate"}
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EstimateFilloutForm;
