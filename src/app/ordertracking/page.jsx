"use client";
import { useState } from "react";
import Link from 'next/link'; // Add this at the top

import { Clock, Search, Check } from "lucide-react";

export default function OrderTracking() {
  const [activeTab, setActiveTab] = useState("CURRENT");
  const [searchTerm, setSearchTerm] = useState("");

  const orders = [
    {
      id: "50396",
      description:
        "Description duis aute irure dolor in reprehenderit in voluptate velit.",
      status: "ORDER",
      timestamp: "Today • 23 min",
    },
    {
      id: "62396",
      description:
        "Description duis aute irure dolor in reprehenderit in voluptate velit.",
      status: "PRODUCTION",
      timestamp: "Today • 23 min",
    },
    {
      id: "50437",
      description:
        "Description duis aute irure dolor in reprehenderit in voluptate velit.",
      status: "SHIPMENT",
      timestamp: "Today • 23 min",
    },
  ];

  const getStatusIndex = (status) => {
    const statuses = ["QUOTE", "ORDER", "PRODUCTION", "SHIPMENT", "PAYMENT"];
    return statuses.indexOf(status);
  };

  const handleGoBack = () => {
    console.log("Going back to previous page");
    // Implement actual navigation logic here
  };

  const filteredOrders = orders.filter((order) =>
    order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex mb-4">
          <button
            className={`px-6 py-2 text-[#1D1B20] font-medium  rounded-l-[20px] ${
              activeTab === "CURRENT"
                ? "bg-[#233B6E] text-white"
                : "bg-white text-gray-700 border border-[#1D1B20] "
            }`}
            onClick={() => setActiveTab("CURRENT")}
          >
            CURRENT
          </button>
          <button
            className={`px-6 py-2 text-[#1D1B20] font-medium rounded-r-[20px] ${
              activeTab === "COMPLETED"
                ? "bg-[#233B6E] text-white"
                : "bg-white text-gray-700 border border-[#1D1B20]"
            }`}
            onClick={() => setActiveTab("COMPLETED")}
          >
            COMPLETED
          </button>
        </div>

        <div className="text-[#ACACAC] text-gray-500 mb-4">
          View at what stage has your order reached
        </div>

        <div className="flex items-center justify-between mb-6 ">
          <button
            onClick={handleGoBack}
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            
            <span className="font-medium  text-[28px] text-[#1D1B20]">
              Order Details
            </span>
            <img src="/Arrow.svg" className="ml-4" alt="" />
          </button>

          <div className="relative">
            <input
              type="text"
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              placeholder="Search by code"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        
        <div className="space-y-6">
          {filteredOrders.map((order, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 flex">
              <div className="w-24 h-24 bg-gray-200 rounded-[10px] flex items-center justify-center flex-shrink-0">
                <div className="flex flex-col items-center">
                </div>
              </div>

              <div className="ml-4 flex-1">
                <div className="flex justify-between items-start ">
                  <div>
                    <h3 className="font-medium text-[#1D1B20] font-[NSregular] text-[17px]">
                      CODE {order.id}
                    </h3>
                    <p className="text-sm text-[#49454F] mt-1 text-[14px]">
                      {order.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-10 pr-80">
                  <div className="relative flex items-center justify-between">
                    {[
                      "QUOTE",
                      "ORDER",
                      "PRODUCTION",
                      "SHIPMENT",
                      "PAYMENT",
                    ].map((status, idx) => {
                      const currentIndex = getStatusIndex(order.status);
                      const isCompleted = idx < currentIndex;
                      const isCurrent = status === order.status;
                      const isPending = idx > currentIndex;

                      return (
                        <div
                          key={status}
                          className="flex flex-col items-center relative z-10"
                        >
                          <div
                            className={`w-4 h-4 rounded-full flex items-center justify-center
                            ${
                              isCompleted
                                ? "bg-black ring-2"
                                : isCurrent
                                ? "bg-[#9197A3] ring-2  ring-[#9197A3]"
                                : "bg-white ring-2"
                            }`}
                          >
                            {isCompleted && <Check size={14} color="white" />}
                          </div>
                          <span
                            className={`text-xs mt-1 ${
                              isCurrent
                                ? "font-semibold text-[#171721]"
                                : "text-gray-600"
                            }`}
                          >
                            {status}
                          </span>
                        </div>
                      );
                    })}

                    {/* Background line */}
                    <div className="absolute top-1.5 left-5 right-10 z-0 flex">
  {["QUOTE", "ORDER", "PRODUCTION", "SHIPMENT"].map((_, idx) => {
    const currentIndex = getStatusIndex(order.status);
    const isBeforeCurrent = idx < currentIndex;
    const isCurrent = idx === currentIndex;

    return (
      <div key={idx} className="flex-1 flex items-center">
        <div
          className={`h-0.5 w-full ${
            idx < currentIndex
              ? "bg-black"
              : "border-t border-dashed border-gray-400"
          }`}
        ></div>
      </div>
    );
  })}
</div>


                  </div>
                </div>

                <div className="flex items-center mt-4 text-gray-500 text-sm">
                  <Clock size={14} />
                  <span className="ml-1">{order.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
