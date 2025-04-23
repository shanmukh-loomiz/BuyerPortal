"use client";
import React from "react";

const Navbar = () => {
  return (
    <nav className="h-[65px] flex justify-between items-center px-[50px] bg-white border-b border-[#e0e0e0] sticky top-0 z-[1000] shadow-md">
      <div className="flex items-center">
        <img
          src="/LoomizLogoDarkBlue.svg"
          alt="Loomiz Logo"
          className="h-[38px] mr-2"
        />
      </div>

      <div className="flex items-center gap-5">
        <button
          className="bg-[#EDF5FF] text-[#194185] border-2 border-[#194185] rounded-[10px] px-4 py-[2px] text-[18px] flex items-center gap-2 font-[Smedium] hover:bg-[#dceaff] transition duration-200
  max-[768px]:px-3 max-[768px]:text-[13px]"
        >
          <span className="text-[22px]">+</span> Create new RFQ
        </button>
        <img
          src="/NavrbarNotificationLogo.svg"
          alt="Notifications"
          className="w-[22px] h-[22px] cursor-pointer"
        />
        <img
          src="/NavbarProfileLogo.svg"
          alt="User"
          className="w-[22px] h-[22px] cursor-pointer"
        />
        <img
          src="/NavbarHelpLogo.svg"
          alt="Help"
          className="w-[22px] h-[22px] cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
