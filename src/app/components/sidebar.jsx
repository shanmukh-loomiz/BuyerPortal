'use client';
import React from 'react';

const Sidebar = ({ isMobile, isOpen, closeSidebar }) => {
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

  // CSS classes for sidebar based on mobile/desktop and open/closed state
  const sidebarClasses = `
    fixed top-[65px] left-0 
    h-[calc(100vh-65px)] 
    bg-[#EDF5FF] p-5 
    flex flex-col justify-start
    transition-all duration-300 ease-in-out z-40
    ${isMobile ? 'w-[260px]' : 'w-[290px]'}
    ${isMobile && !isOpen ? '-translate-x-full' : 'translate-x-0'}
  `;

  return (
    <>
      {/* Overlay - only visible on mobile when sidebar is open */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={sidebarClasses}>
        <div className="text-[24px] mb-5 text-black font-[NSmedium] px-5 pt-5 font-variant-small-caps">
          DASHBOARD
        </div>
        
        <div className="flex-1 flex flex-col justify-between">
          {/* Top Menu */}
          <ul className="list-none px-3 m-0">
            {mainItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center py-3 px-2 cursor-pointer text-[16px] text-[#222] font-[NSregular] hover:bg-[#dbe9ff] rounded-md transition font-variant-small-caps"
                onClick={isMobile ? closeSidebar : undefined}
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
                className="flex items-center py-3 px-2 cursor-pointer text-[16px] text-[#222] font-[NSregular] hover:bg-[#dbe9ff] rounded-md transition font-variant-small-caps"
                onClick={isMobile ? closeSidebar : undefined}
              >
                <img src={item.icon} alt={`${item.label} icon`} className="w-[25px] h-[25px] mr-3" />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;