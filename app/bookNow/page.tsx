"use client";
import { useState } from "react";
import BookingForm from "@/components/booking/BookingForm";
import BookingSummary from "@/components/booking/BookingSummary";
 export default  function BookNow(){
         const today = new Date();
     const [bookingDetails, setBookingDetails] = useState({
        zipCode: '',
        serviceType: 'deep',
        selectedHomeSize: 1,
        specialRequest: '**Services within 24 hours**',
        date: today.toLocaleDateString('en-US'),
        time: '10:00AM',
        frequency: 'Weekly Cleaning (20%)',
        price: 298,
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        howDidYouHear: '',
        agreeToTexts: false,
        streetNumber: '',
        streetName: '',
        city: '',
        state: 'CO',
        notes: '',
        cardNumber: '',
        expiry: '',
        cvc: '',
        title: "1 bd / 1 ba"
      });


    return(
          <section className="py-16 bg-white">
               <div className="container mx-auto px-4">
                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                   {/* Main Booking Form */}
                   <div className="lg:col-span-2">
                     <BookingForm bookingDetails={bookingDetails} setBookingDetails={setBookingDetails} />
                   </div>
       
                   {/* Booking Summary Sidebar */}
                   <div className="lg:col-span-1">
                     <BookingSummary bookingDetails={bookingDetails} />
                   </div>
                 </div>
               </div>
             </section>

    )
}