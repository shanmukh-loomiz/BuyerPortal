"use client"
import { Geist, Geist_Mono } from "next/font/google";
import { useState, useEffect } from "react";
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
    
    // State for responsive design - Use server-safe initial values
    const [mounted, setMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    useEffect(() => {
      setMounted(true);
      
      // Check if viewport is mobile size
      const checkIsMobile = () => {
        const isMobileView = window.innerWidth < 768;
        setIsMobile(isMobileView);
        
        // On larger screens, sidebar is always open by default
        // On mobile, sidebar is closed by default
        setIsSidebarOpen(!isMobileView);
      };
      
      // Initial check
      checkIsMobile();
      
      // Add resize listener
      window.addEventListener('resize', checkIsMobile);
      
      // Clean up
      return () => window.removeEventListener('resize', checkIsMobile);
    }, []);
    
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
    
    // Default styles for initial server render
    const defaultNavClasses = "h-[65px] flex justify-between items-center px-[20px] md:px-[50px] bg-white border-b border-[#e0e0e0] fixed top-0 left-0 right-0 z-[1000] shadow-md";
    
    // Use consistent classes during initial server render
    const navClasses = mounted 
      ? "h-[65px] flex justify-between items-center px-3 sm:px-5 md:px-[50px] bg-white border-b border-[#e0e0e0] fixed top-0 left-0 right-0 z-[1000] shadow-md"
      : defaultNavClasses;
    
    // Main content classes
    const mainClasses = mounted
  ? `pt-[65px] transition-all duration-300 overflow-x-hidden
     ${isMobile 
       ? 'ml-0 px-4' 
       : 'ml-[290px] px-4 sm:px-6 md:px-8 lg:px-10'}`
  : "pt-[65px]";
    return (
      <>
        {!isLoginPage && (
          <Navbar 
            isMobile={mounted ? isMobile : false}
            isSidebarOpen={mounted ? isSidebarOpen : false}
            toggleSidebar={toggleSidebar}
            navClasses={navClasses}
          />
        )}
        
        {!isLoginPage && (
          <div className={mounted ? "" : "hidden"}>
            <Sidebar 
              isMobile={isMobile} 
              isOpen={isSidebarOpen} 
              closeSidebar={() => isMobile && setIsSidebarOpen(false)}
            />
          </div>
        )}
        
        <main 
          className={!isLoginPage ? mainClasses : ""}
          onClick={() => isMobile && isSidebarOpen && setIsSidebarOpen(false)}
        >
          {children}
        </main>
      </>
    );
  }
  
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="overflow-x-hidden">
        <ClientLayout />
      </body>
    </html>
  );
}