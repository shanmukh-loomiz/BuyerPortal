'use client';
import React from 'react';
// import '../styles/sidebar.css'; // 

const Sidebar = () => {
  const mainItems = [
    { label: 'OVERVIEW', icon: '/SidebarOverviewLogo.svg' },
    { label: 'REQUEST FOR QUOTE', icon: '/SidebarRFQLogo.svg' },
    { label: 'ORDER TRACKING', icon: '/SidebarOrderTrackingLogo.svg' },
    { label: 'PAYMENT', icon: '/SidebarPaymentLogo.svg' },
    { label: 'CHATS', icon: '/SidebarChatsLogo.svg' },
    { label: 'ORDER HISTORY', icon: '/SidebarOrderHistoryLogo.svg' },
    { label: 'CATALOGUES', icon: '/SidebarOrderHistoryLogo.svg' },
  ];

  const bottomItems = [
    { label: 'SETTINGS', icon: '/SidebarSettingsLogo.svg' },
    { label: 'ACCOUNT', icon: '/SidebarAccountLogo.svg' },
  ];

  return (
    <div className="fixed top-[65px] left-0 w-[290px] h-[calc(100vh-65px)] bg-[#EDF5FF] p-5 flex flex-col justify-start">
      <div className="text-[24px] mb-5 text-black font-[NSmedium] px-5 pt-5">
        DASHBOARD
      </div>

      <div className="flex-1 flex flex-col justify-between">
        {/* Top Menu */}
        <ul className="list-none px-3 m-0">
          {mainItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center py-3 px-2 cursor-pointer text-[16px] text-[#222] font-[NSregular] hover:bg-[#dbe9ff] rounded-md transition"
            >
              <img src={item.icon} alt={`${item.label} icon`} className="w-[25px] h-[25px] mr-3" />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        {/* Bottom Menu */}
        <ul className="list-none px-3 m-0 mb-2">
          {bottomItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center py-3 px-2 cursor-pointer text-[16px] text-[#222] font-[NSregular] hover:bg-[#dbe9ff] rounded-md transition"
            >
              <img src={item.icon} alt={`${item.label} icon`} className="w-[25px] h-[25px] mr-3" />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
