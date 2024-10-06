import React from 'react';
import Logout from './Logout';
import Search from './Search';
import Conversations from './Conversations';
import { useAuthContext } from '../../context/AuthContext';
import { X } from 'lucide-react';

const Sidebar = ({ onUserSelect, isSidebarOpen, toggleSidebar }) => {
  const { authUser } = useAuthContext();

  return (
    <div
      className={`fixed z-40 inset-y-0 left-0 w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[400px] bg-gray-900 text-white transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out sm:relative sm:translate-x-0 sm:flex-shrink-0`}
    >
      <div className="flex flex-col h-full py-6 px-4">
        {/* Close button for mobile */}
        <div className="flex sm:hidden justify-end mb-4">
          <button
            className="text-white p-2 rounded-md hover:bg-gray-700 transition duration-200"
            onClick={toggleSidebar}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Redesigned App Logo */}
        <div className="flex flex-row items-center justify-center h-12 w-full">
          <div className="flex items-center justify-center rounded-2xl text-blue-400 bg-gray-700 h-10 w-10 md:h-12 md:w-12">
            {/* Simple chat bubble icon */}
            <svg
              className="w-6 h-6 md:w-8 md:h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 10c0-3.866-3.582-7-8-7S3 6.134 3 10c0 3.866 3.582 7 8 7h4l4 4v-4c1.104 0 2-.896 2-2V10z" />
            </svg>
          </div>
          <div className="ml-2 font-bold text-xl md:text-2xl text-white">
            QuickChat
          </div>
        </div>

        {/* User Profile Section */}
        <div className="flex flex-col items-center bg-gray-800 border border-gray-700 mt-6 w-full py-6 px-4 rounded-lg">
          <div className="h-20 w-20 rounded-full border border-gray-600 overflow-hidden">
            <img
              src={authUser ? authUser.profilePic : 'https://avatars3.githubusercontent.com/u/2763884?s=128'}
              alt="Avatar"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-base font-semibold mt-4 text-gray-100">
            {authUser ? authUser.username : 'User'}
          </div>
          <div className="text-sm text-gray-400">
            {authUser ? authUser.fullName : 'Fullname'}
          </div>
          <div className="text-sm text-gray-400">
            {authUser ? authUser.gender.charAt(0).toUpperCase() + authUser.gender.slice(1).toLowerCase() : 'Gender'}
          </div>
        </div>

        {/* Search and Conversations Section */}
        <div className="flex flex-col mt-8 flex-grow space-y-6">
          <Search placeholder="Search..." />
          <Conversations onUserSelect={onUserSelect} />
        </div>

        {/* Logout Button */}
        <div className="mt-auto">
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
