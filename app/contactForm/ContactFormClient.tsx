"use client"; // Add this directive at the top

import React, { useState, FormEvent } from 'react';
// import Link from 'next/link'; // Removed Next.js specific import
import { Phone, Mail, MessageSquare, MapPin } from 'lucide-react';
import PrimaryButton from '@/components/buttons/PrimaryButton';
// import PrimaryButton from '@/components/buttons/PrimaryButton'; // Removed component import

// Define interfaces for state
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  consent?: string;
}

const ContactForm = () => {
  // --- START: Validation State and Handlers ---
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
      // Clear consent error if they check it
      if (name === 'consent' && checked) {
        setErrors((prev) => ({ ...prev, consent: undefined }));
      }
    } else {
      // Handle text inputs/textarea
      setFormData((prev) => ({ ...prev, [name]: value }));
      // Clear error for this field as the user types
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    }
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Your name is required.';

    if (!formData.email.trim()) {
      newErrors.email = 'Your email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim())
      newErrors.phone = 'Your phone number is required.';

    if (!formData.message.trim())
      newErrors.message = 'Your message is required.';

    if (!formData.consent) {
      newErrors.consent = 'You must agree to the terms to submit.';
    }

    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // No errors, proceed with form submission
      console.log('Form data submitted:', formData);
      // ** TODO: Add your API submission logic here (e.g., fetch, axios) **
      // alert('Form submitted successfully!'); // Avoid alerts
      
      // Optionally reset form after successful submission
      // setFormData({ name: '', email: '', phone: '', message: '', consent: false });
      // setErrors({});
    } else {
      console.log('Validation failed:', formErrors);
    }
  };
  // --- END: Validation State and Handlers ---

  return (
    <div className=" py-16 sm:py-24 bg-[#f4f4f4] ">
      <div className="mx-auto flex max-w-6xl flex-col gap-y-16 px-6  md:gap-x-16 md:gap-y-0 lg:px-8 ">
        {/* Form Section - UPDATED: Added 'flex-1' to make columns equal width on desktop */}
        <div className="mb-10 ">
          <h1 className="text-[48px] font-bold tracking-tight text-gray-900 text-center">
            Contact Us
          </h1>
          <strong className="mt-4 text-lg  leading-6  leading-[150%]">
            We're Here for You Your Way
          </strong>

          <p className="mt-2 text-base leading-6 text-gray-600">
            At Pro Housekeepers, we make it easy to get the answers and support
            you need. You can reach us by phone, email, live chat, or simply by
            submitting the form below whichever works best for you.
          </p>
          <p className="mt-2 text-base leading-6 text-gray-600">
            Our friendly team is ready to help!
          </p>
        </div>

        <div className="flex-1 py-[19px] px-[66px] bg-[#FFFFFF] rounded-[10px] max-w-[860px] mx-auto ">
          <form
            action="#"
            method="POST"
            className="mt-10 space-y-6"
            onSubmit={handleSubmit}
            noValidate // Prevent browser default validation
          >
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-[18px] font-bold leading-6 text-gray-900"
              >
                Your name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                  aria-describedby="name-error"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-600">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
               className="block text-[18px] font-bold leading-6 text-gray-900"
              >
                Your email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  aria-describedby="email-error"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label
                htmlFor="phone"
                 className="block text-[18px] font-bold leading-6 text-gray-900"
              >
                Your phone number
              </label>
              <div className="mt-2.5">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  aria-invalid={!!errors.phone}
                  aria-describedby="phone-error"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">
                We may reach out by call or text to ensure you get the best
                service your information stays secure with us.
              </p>
              {errors.phone && (
                <p id="phone-error" className="mt-1 text-sm text-red-600">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-[18px] font-bold leading-6 text-gray-900"
              >
                Your message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={!!errors.message}
                  aria-describedby="message-error"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-600">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Consent Checkbox */}
            <div>
              <div className="relative flex items-start">
                <div className="flex h-6 items-center">
                  <input
                    id="consent"
                    aria-describedby="consent-description"
                    name="consent"
                    type="checkbox"
                    checked={formData.consent}
                    onChange={handleChange}
                    aria-invalid={!!errors.consent}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                  />
                </div>
                <div className="ml-3 text-sm leading-6">
                  <label htmlFor="consent" className="text-gray-700">
                    By submitting your phone number, you are consenting to
                    receive text messages about cleaning services from Pro
                    Housekeepers.
                    <span id="consent-description" className="text-gray-500 block">
                      Message frequency may vary. You can opt out at any time by
                      texting "STOP." Message & data rates may apply. See our
                      privacy policy here:
                      {/* Replaced Next.js <Link> with a standard <a> tag to resolve the error */}
                      <a
                        href="https://prohousekeepers.com/privacy-policy/"
                        className="font-semibold text-blue-600 hover:text-blue-500"
                        target="_blank"
                        rel="noopener noreferrer" // Added for security
                      >
                        {' '}https://prohousekeepers.com/privacy-policy/
                      </a>
                    </span>
                  </label>
                </div>
              </div>
              {errors.consent && (
                <p id="consent-error" className="mt-1 text-sm text-red-600">
                  {errors.consent}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              {/* Replaced <PrimaryButton> with a standard <button> to fix import error */}
              <PrimaryButton type="button"className='block w-full text-white'>SUBMIT</PrimaryButton>
              {/* <button
                type="submit"
                className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                
              </button> */}
            </div>
          </form>
        </div>

        {/* Contact Details Section - UPDATED: Added 'flex-1' to make columns equal width on desktop */}
        <div className="flex-1 rounded-lg  p-8 lg:p-12">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Contact Details
          </h2>
          <dl className="mt-6 space-y-6 text-base leading-7 text-gray-600">
            {/* Phone */}
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Telephone</span>
                <Phone className="h-6 w-6 text-gray-500" aria-hidden="true" />
              </dt>
              <dd>
                <a className="hover:text-gray-900" href="tel:(844) 242-9464">
                  (844) 242-9464
                </a>
              </dd>
            </div>

            {/* Email */}
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6 text-gray-500" aria-hidden="true" />
              </dt>
              <dd>
                <a
                  className="hover:text-gray-900"
                  href="mailto:support@prohousekeepers.com"
                >
                  support@prohousekeepers.com
                </a>
              </dd>
            </div>

            {/* Live Chat */}
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Live Chat</span>
                <MessageSquare
                  className="h-6 w-6 text-gray-500"
                  aria-hidden="true"
                />
              </dt>
              <dd>Available during business hours</dd>
            </div>

            {/* Address */}
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Address</span>
                <MapPin className="h-6 w-6 text-gray-500" aria-hidden="true" />
              </dt>
              <dd>
                <span className="font-semibold text-gray-900">
                  Registered Address:
                </span>
                <br />
                Pro Housekeepers
                <br />
                6902 E Adamo Dr.
                <br />
                Tampa, FL 33619
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;



