"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../app/components/navbar";
import Sidebar from "./components/sidebar";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  // This function will run on the client after hydration
  const ClientLayout = () => {
    const pathname = usePathname();
    const isLoginPage = pathname.startsWith('/login');
    
    return (
      <>
        {!isLoginPage && <Navbar />}
        {!isLoginPage && <Sidebar />}
        <main>{children}</main>
      </>
    );
  }
  
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ClientLayout />
      </body>
    </html>
  );
}