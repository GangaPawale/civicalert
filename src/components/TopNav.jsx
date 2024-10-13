import React, { useState, useEffect, useRef } from 'react';
import LeftSideBar from './LeftSideBar';

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null); // Reference to LeftSideBar

  // Function to handle clicks outside the sidebar to close it
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false); // Close the sidebar when clicking outside
    }
  };

  // Add event listener for detecting clicks outside the sidebar
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Toggle sidebar open/close
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='hidden border-b-2 py-3 px-3 justify-between sm:flex md:flex lg:hidden md:items-center'>
        <button onClick={toggleSidebar}>
          <img src="src/assets/icons/menu.svg" alt="menu" className="h-8 w-8" />
        </button>

        <div className='flex gap-2 items-center'>
          <img src="src/assets/icons/applogogreen.png" alt="logo" className="h-7 w-7 rounded-md" />
          <span className='font-bold text-2xl'>Civic Alert</span>
        </div>

        <div className='w-8 h-8 bg-purple-500 rounded-full'></div>
      </div>

      {isOpen && (
        // Render LeftSideBar only if isOpen is true
        <div ref={sidebarRef} className="absolute z-50 bottom-[-1] left-5 h-full">
          <LeftSideBar classes={'  h-full border-r-[1px] hidden   sm:flex  sm:flex-col sm:items-end sm:pr-9 font-inter lg:hidden'}/>
        </div>
      )}
    </>
  );
};

export default TopNav;
