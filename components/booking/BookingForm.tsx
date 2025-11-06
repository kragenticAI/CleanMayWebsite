'use client';

import { useState } from 'react';
import StepIndicator from './StepIndicator';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import PrimaryButton from '../buttons/PrimaryButton';

// ✅ 1. Update BookingErrors interface
interface BookingErrors {
  // Step 1
  zipCode?: string;
  selectedHomeSize?: string;
  date?: string;
  time?: string;
  frequency?: string;
  
  // Step 2
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
  agreeToTexts?: string;

  // Step 3
  streetNumber?: string;
  streetName?: string;
  city?: string;
  state?: string;

  // ✅ Step 4
  cardNumber?: string;
  expiry?: string;
  cvc?: string;
}

export default function BookingForm({bookingDetails, setBookingDetails}: {bookingDetails: any, setBookingDetails: any}) {
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<BookingErrors>({});


  // Validation function for Step 1
  const validateStep1 = () => {
    const newErrors: BookingErrors = {};
    const details = bookingDetails; 
    console.log("details",details);

    if (!details.zipCode) {
      newErrors.zipCode = "ZIP code is required.";
    } else if (!/^\d{5}$/.test(details.zipCode)) { 
      newErrors.zipCode = "Please enter a valid 5-digit ZIP code.";
    }
    if (!details.selectedHomeSize) {
      newErrors.selectedHomeSize = "Please select a home size.";
    }
    if (!details.date) {
      newErrors.date = "Please select a date.";
    }
    if (!details.time) {
      newErrors.time = "Please select a time.";
    }
    if (!details.frequency) {
      newErrors.frequency = "Please select a frequency.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validation function for Step 2
 const validateStep2 = () => {
    const newErrors: BookingErrors = {};
    const details = bookingDetails;
    
    // ✅ Regex to check for the presence of any digit
    const hasNumber = /\d/;

    if (!details.firstName) {
      newErrors.firstName = "First name is required.";
    } else if (hasNumber.test(details.firstName)) {
      // ✅ Added check for numbers in first name
      newErrors.firstName = "First name cannot contain numbers.";
    }

    if (!details.lastName) {
      newErrors.lastName = "Last name is required.";
    } else if (hasNumber.test(details.lastName)) {
      // ✅ Added check for numbers in last name
      newErrors.lastName = "Last name cannot contain numbers.";
    }

    if (!details.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(details.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!details.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required.";
    }
    if (!details.agreeToTexts) {
      newErrors.agreeToTexts = "You must agree to receive text messages to proceed.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validation function for Step 3
  const validateStep3 = () => {
    const newErrors: BookingErrors = {};
    const details = bookingDetails;

    if (!details.streetNumber) {
      newErrors.streetNumber = "Street number is required.";
    }
    if (!details.streetName) {
      newErrors.streetName = "Street name is required.";
    }
    if (!details.city) {
      newErrors.city = "City is required.";
    }
    if (!details.state) {
      newErrors.state = "Please select a state.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ 2. Add validation function for Step 4
  const validateStep4 = () => {
    const newErrors: BookingErrors = {};
    const { cardNumber, expiry, cvc } = bookingDetails;

    // Check if any payment field is partially filled
    const isAnyFieldFilled = cardNumber || expiry || cvc;

    // If any field is filled, validate all of them
    if (isAnyFieldFilled) {
      if (!cardNumber) {
        newErrors.cardNumber = "Card number is required.";
      } else if (!/^\d{16}$/.test(cardNumber.replace(/\s/g, ''))) {
         newErrors.cardNumber = "Please enter a valid 16-digit card number.";
      }

      if (!expiry) {
        newErrors.expiry = "Expiry date is required.";
      } else if (!/^\d{2}\s\/\s\d{2}$/.test(expiry)) { // Checks for "MM / YY"
         newErrors.expiry = "Please use MM / YY format.";
      }
      
      if (!cvc) {
        newErrors.cvc = "CVC is required.";
      } else if (!/^\d{3,4}$/.test(cvc)) { // 3 or 4 digits
         newErrors.cvc = "Please enter a valid CVC.";
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  // ✅ 3. Update nextStep function
  const nextStep = () => {
   console.log("currentStep",currentStep);
    let isValid = true;
            
    if (currentStep === 1) isValid = validateStep1();
    if (currentStep === 2) isValid = validateStep2(); 
    if (currentStep === 3) isValid = validateStep3(); 
    
    if (isValid && currentStep < 4) {
      setCurrentStep(currentStep + 1);
      setErrors({}); 
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setErrors({}); 
    }
  };

  // ✅ 4. Create a handler for the final submission
  const handleConfirmBooking = () => {
    const isValid = validateStep4();
    if (isValid) {
      if (bookingDetails.cardNumber) {
        alert('Booking confirmed! Payment details submitted.');
      } else {
        alert('Quote saved! We will contact you shortly.');
      }
      // API submission logic would go here
    }
    // If not valid, errors will display because validateStep4 set them
  };

  // ✅ 5. Update renderStep function
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 
          bookingDetails={bookingDetails} 
          setBookingDetails={setBookingDetails} 
          errors={errors}       
          setErrors={setErrors} 
        />;
      case 2:
        return <Step2 
          bookingDetails={bookingDetails} 
          setBookingDetails={setBookingDetails} 
          errors={errors}    
          setErrors={setErrors}
        />;
      case 3:
        return <Step3 
          bookingDetails={bookingDetails} 
          setBookingDetails={setBookingDetails} 
          errors={errors}    
          setErrors={setErrors}
        />;
      case 4:
        return <Step4 
          bookingDetails={bookingDetails} 
          setBookingDetails={setBookingDetails} 
          errors={errors}     // ✅ Pass props to Step 4
          setErrors={setErrors} // ✅ Pass props to Step 4
        />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <StepIndicator currentStep={currentStep} />
      
      {renderStep()}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        {currentStep > 1 && (
          <PrimaryButton
            onClick={prevStep}
            className="bg-gray-300 py-2 px-6 rounded-full font-medium hover:bg-gray-300 transition-colors "
          >
            Previous
          </PrimaryButton>
        )}
        
        <div className="ml-auto">
          {currentStep < 4 ? (
            <PrimaryButton onClick={nextStep} className='text-white'>Next</PrimaryButton>
          ) : (
            // ✅ 6. Update the final button
            <PrimaryButton onClick={handleConfirmBooking} className='text-white'>
              {bookingDetails.cardNumber || bookingDetails.expiry || bookingDetails.cvc 
                ? 'Confirm Booking' 
                : 'Save Quote'}
            </PrimaryButton>
          )}
        </div>
      </div>
    </div>
  );
}