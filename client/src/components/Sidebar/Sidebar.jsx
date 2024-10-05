import React from 'react';
import Logout from './Logout';
import Search from './Search';
import Conversations from './Conversations';
import { useAuthContext } from '../../context/AuthContext';

const Sidebar = ({ onUserSelect }) => {
  const { authUser } = useAuthContext();

  return (
    <div className="flex flex-col h-full py-6 pl-2 pr-2 w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[400px] bg-blue-500 flex-shrink-0">
      <div className="flex flex-row items-center justify-center h-12 w-full">
        <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10 md:h-12 md:w-12">
          <svg
            className="w-6 h-6 md:w-8 md:h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            ></path>
          </svg>
        </div>
        <div className="ml-2 font-bold text-xl md:text-2xl">QuickChat</div>
      </div>
      <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-4 md:py-6 px-4 rounded-lg">
        <div className="h-16 w-16 md:h-20 md:w-20 rounded-full border overflow-hidden">
          <img
            src={authUser ? authUser.profilePic : "https://avatars3.githubusercontent.com/u/2763884?s=128"}
            alt="Avatar"
            className="h-full w-full"
          />
        </div>
        <div className="text-sm md:text-base font-semibold mt-2">{authUser ? authUser.username : 'User'}</div>
        <div className="text-xs md:text-sm text-gray-500">{authUser ? authUser.fullName : 'Fullname'}</div>
        <div className="text-xs md:text-sm text-gray-500">{authUser ? authUser.gender.charAt(0).toUpperCase() + authUser.gender.slice(1).toLowerCase() : 'Fullname'}</div>
      </div>

      <div className="flex flex-col mt-8 flex-grow">
        <Search placeholder="Search..." />
        <Conversations onUserSelect={onUserSelect} />
      </div>
      <div className="mt-auto">
        <Logout />
      </div>
    </div>
  );
};

export default Sidebar;
