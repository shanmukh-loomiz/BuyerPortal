"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const RFQHistory = () => {
  // Router for navigation
  const router = useRouter();
  
  // State for active tab
  const [activeTab, setActiveTab] = useState("history"); // "new" or "history"
  // State for storing RFQ data
  const [rfqItems, setRfqItems] = useState([]);
  // Loading state
  const [loading, setLoading] = useState(true);
  // Error state
  const [error, setError] = useState(null);

  // Fetch RFQ history data on component mount
  useEffect(() => {
    fetchRFQHistory();
  }, []);

  // Function to fetch RFQ history from backend
  const fetchRFQHistory = async () => {
    try {
      setLoading(true);
      setError(null); // Clear any previous errors
      
      // Add a timeout to prevent infinite loading if the request takes too long
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 seconds timeout
      
      // Make API call to your backend endpoint to get data from MongoDB quotes collection
      const response = await axios.get('/api/rfq/history', {
        signal: controller.signal,
      });

      console.log("Backend request made ",response)
      
      clearTimeout(timeoutId);
      
      // Update state with fetched data
      if (response.data && Array.isArray(response.data)) {
        setRfqItems(response.data);
        setLoading(false);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err) {
      console.error("Error fetching RFQ history:", err);
      setError("Failed to load RFQ history. Please try again later.");
      setLoading(false);
    }
  };

  // Handler for tab switching with navigation
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === "new") {
      router.push("/rfq");
    }
  };

  // Handler for clicking on an RFQ item
  const handleRfqClick = (rfqId) => {
    // Navigate to the details page for the selected RFQ
    router.push(`/rfq-history/details/${rfqId}`);
  };

  // Display loading state
  if (loading) {
    return (
      <div className="w-full bg-white min-h-screen rounded-md mt-6 p-6 flex justify-center items-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#233B6E] border-r-transparent"></div>
          <p className="mt-2 text-[#233B6E]">Loading RFQ history...</p>
        </div>
      </div>
    );
  }

  // Display error state
  if (error) {
    return (
      <div className="w-full bg-white min-h-screen rounded-md mt-6 p-6">
        <div className="text-red-500 p-4 border border-red-300 rounded-md">
          <p>{error}</p>
          <button 
            onClick={fetchRFQHistory}
            className="mt-2 bg-[#233B6E] text-white px-4 py-2 rounded-md"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white min-h-screen rounded-md mt-6 p-6">
      {/* Page description */}
      <p className="pb-5 text-[#ACACAC] font-[NSregular]">
        Request for a quote or a sample here
      </p>
      
      {/* Tab buttons */}
      <div className="flex mb-6">
        {/* NEW RFQ Button */}
        <button 
          className={`text-sm cursor-pointer font-[500] font-[NSmedium] px-4 py-2 rounded-tl-[20px] rounded-bl-[20px] border border-[#79747E] ${
            activeTab === "new" ? "bg-[#233B6E] text-white" : "bg-white text-[#1D1B20]"
          }`}
          onClick={() => handleTabChange("new")}
        >
          NEW RFQ
        </button>
        
        {/* RFQ HISTORY Button */}
        <button 
          className={`text-sm cursor-pointer font-[500] font-[NSmedium] px-4 py-2 rounded-tr-[20px] rounded-br-[20px] border border-[#79747E] ${
            activeTab === "history" ? "bg-[#233B6E] text-white" : "bg-white text-[#1D1B20]"
          }`}
          onClick={() => handleTabChange("history")}
        >
          RFQ HISTORY
        </button>
      </div>
      
      {/* RFQ Details heading with arrow */}
      <div className="flex items-center mb-6">
        <h2 className="text-[#233B6E] font-[NSmedium] text-lg">RFQ DETAILS</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-2 text-[#233B6E]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
      
      {/* RFQ History cards */}
      {rfqItems.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">No RFQ history found.</p>
        </div>
      ) : (
        <div className="-space-y-2">
          {rfqItems.map((item) => (
            <div 
              key={item._id} 
              className="flex items-start p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-200"
              onClick={() => handleRfqClick(item._id)}
            >
              {/* Left: Image placeholder */}
              <div className="w-24 h-24 rounded-md flex-shrink-0 overflow-hidden">
                <img 
                  src={item.productImagesFiles && item.productImagesFiles.length > 0 
                    ? item.productImagesFiles[0] 
                    : "/RfqImage.svg"} 
                  alt="RFQ" 
                  className="w-full h-full object-cover" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/RfqImage.svg";
                  }}
                />
              </div>
              
              {/* Right: Content */}
              <div className="ml-4 flex-1">
                <div className="mb-1">
                  <h3 className="text-[#000] font-[NSmedium] text-base">CODE {item._id.substring(0, 6)}</h3>
                  <p className="text-[#000] opacity-70 font-[NSregular] text-sm">
                    {item.orderNotes || "No description available"}
                  </p>
                </div>
                
                {/* Time info */}
                <div className="text-[#000] opacity-50 font-[NSregular] text-xs">
                  {item.time || "Unknown time"} • {item.duration || "Unknown duration"}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RFQHistory;