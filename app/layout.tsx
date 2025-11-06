import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header/Header";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Pro Housekeepers - Trusted Cleaning Services",
//   description: "Easy, no-fuss cleaning services for busy people.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header /> {/* Header now appears on all pages */}
        <div className="min-h-screen">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}