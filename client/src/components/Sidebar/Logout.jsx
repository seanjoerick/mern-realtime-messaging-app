import React from 'react';
import { LogOut } from 'lucide-react';

const Logout = () => {
  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logging out...");
  };

  return (
    <button 
      onClick={handleLogout} 
      className="flex items-center mt-6 p-2 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-200"
    >
      <LogOut className="w-5 h-5 mr-2" />
      <span className="text-sm font-semibold">Logout</span>
    </button>
  );
};

export default Logout;
