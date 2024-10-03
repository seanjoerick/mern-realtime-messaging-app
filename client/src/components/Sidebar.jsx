import React from 'react';
import Logout from './Logout';
import Search from './Search'; 

const Sidebar = () => {
  return (
    <div className="flex flex-col py-8 pl-2 pr-2 w-64 bg-blue-500 flex-shrink-0">
      <div className="flex flex-row items-center justify-center h-12 w-full">
        <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
          <svg
            className="w-6 h-6"
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
        <div className="ml-2 font-bold text-2xl">QuickChat</div>
      </div>
      <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
        <div className="h-20 w-20 rounded-full border overflow-hidden">
          <img
            src="https://avatars3.githubusercontent.com/u/2763884?s=128"
            alt="Avatar"
            className="h-full w-full"
          />
        </div>
        <div className="text-sm font-semibold mt-2">Aminos Co.</div>
        <div className="text-xs text-gray-500">Lead UI/UX Designer</div>
      </div>
      <div className="flex flex-col mt-8 flex-grow">
        {/* Use the reusable Search component */}
        <Search placeholder="Search Friends..." />

        <div className="flex flex-row items-center justify-between text-xs">
          <span className="font-bold">Friends</span>
          <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">4</span>
        </div>
        <div className="flex flex-col space-y-1 mt-4">
          {['Henry Boyd', 'Marta Curtis', 'Philip Tucker', 'Christine Reid', 'Jerry Guzman'].map((name, index) => (
            <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2" key={index}>
              <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">{name.charAt(0)}</div>
              <div className="ml-2 text-sm font-semibold">{name}</div>
            </button>
          ))}
        </div>
      </div>
      <Logout />
    </div>
  );
};

export default Sidebar;