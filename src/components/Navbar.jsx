import React from 'react';
import { FiBell, FiMenu } from 'react-icons/fi'; 

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 z-50 w-full lg:w-[calc(100%-280px)] lg:ml-[280px] h-16 p-4 flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        <button
          className="text-gray-500 focus:outline-none hover:text-orange-500 lg:hidden"
          onClick={toggleSidebar}
        >
          <FiMenu className="w-6 h-6" />
        </button>
        <input
          type="text"
          placeholder="Search"
          className="border px-4 py-2 rounded-md w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <div className="flex items-center space-x-6">
          <button className="text-gray-500 focus:outline-none hover:text-orange-500">
            <FiBell className="w-6 h-6" />
          </button>
          
          <div className="flex items-center space-x-2">
            <p className="font-bold text-gray-700">Moni Roy</p>
            <img
              src="https://via.placeholder.com/40" 
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
