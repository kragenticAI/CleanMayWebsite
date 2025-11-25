import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header/Header"; // Your component
import Footer from "@/components/footer/footer";   // Your component
import Breadcrumb from "@/components/BreadCrumb";
import localBusinessSchema from "@/schemas/localBusinessSchema";



const inter = Inter({ subsets: ["latin"] });

// --- UNCOMMENT THIS BLOCK ---
// This sets the default title and description for your entire site.
export const metadata: Metadata = {
  title: "Pro Housekeepers - Trusted Cleaning Services",
  description: "Easy, no-fuss cleaning services for busy people.",
};
// --- END UNCOMMENT ---


// 1. Define your global Organization schema
// This tells Google who you are on EVERY page.
// const organizationSchema = {
//   '@context': 'https://schema.org',
//   '@type': 'Organization',
//   name: 'Clean May',
//   url: 'https://www.cleanmay.com', // Your main homepage URL
//   logo: 'https://www.cleanmay.com/images/websitelogo.png', // Your logo URL
//   contactPoint: {
//     '@type': 'ContactPoint',
//     telephone: '(844) 243-9564', // Your phone
//     contactType: 'Customer Service',
//     email: 'support@cleanmay.com' // Your support email
//   },
//   // Add your social media profiles if you have them
//   sameAs: [
//     'https://www.facebook.com/yourprofile',
//     'https://www.instagram.com/yourprofile',
//   ]
// };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {/* 2. Add the schema script to the <body> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        
        <Header /> {/* Your Header */}
        
        <div className="min-h-screen ">
          <Breadcrumb  />
          {children}
        </div>
        
        <Footer/> {/* Your Footer */}
        
      </body>
    </html>
  );
}