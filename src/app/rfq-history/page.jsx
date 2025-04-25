"use client";
import React, { useState } from "react";

const RFQHistory = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState("history"); // "new" or "history"

  // Mock data for RFQ history items
  const rfqItems = [
    {
      id: "50396",
      description: "Description duis aute irure dolor in reprehenderit in voluptate velit.",
      time: "Today",
      duration: "23 min"
    },
    {
      id: "50396",
      description: "Description duis aute irure dolor in reprehenderit in voluptate velit.",
      time: "Today",
      duration: "23 min"
    },
    {
      id: "50396",
      description: "Description duis aute irure dolor in reprehenderit in voluptate velit.",
      time: "Today",
      duration: "23 min"
    },
    {
      id: "50396",
      description: "Description duis aute irure dolor in reprehenderit in voluptate velit.",
      time: "Today",
      duration: "23 min"
    }
  ];

  // Handler for tab switching with navigation
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === "new") {
      window.location.href = "/rfq";
    }
  };

  return (
    <div className="ml-[330px] mt-[30px] mb-[30px] w-[calc(100%-360px)] px-16 py-8 bg-white min-h-screen rounded-[20px]">
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
      <div className="-space-y-2">
        {rfqItems.map((item, index) => (
          <div key={index} className="flex items-start p-4">
            {/* Left: Image placeholder - increased size */}
            <div className="w-24 h-24 rounded-md flex-shrink-0 overflow-hidden">
              <img src="/RfqImage.svg" alt="RFQ" className="w-full h-full object-cover" />
            </div>
            
            {/* Right: Content */}
            <div className="ml-4 flex-1">
              <div className="mb-1">
                <h3 className="text-[#000] font-[NSmedium] text-base">CODE {item.id}</h3>
                <p className="text-[#000] opacity-70 font-[NSregular] text-sm">
                  {item.description}
                </p>
              </div>
              
              {/* Time info */}
              <div className="text-[#000] opacity-50 font-[NSregular] text-xs">
                {item.time} • {item.duration}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RFQHistory;