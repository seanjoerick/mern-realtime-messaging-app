import React from 'react';
import { LogOut } from 'lucide-react';
import useLogout from '../../hooks/useLogout';

const Logout = () => {
  const { logout, loading } = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <button 
      onClick={handleLogout} 
      className="flex items-center mt-6 p-2 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-200"
      disabled={loading}
    >
      {loading ? (
        <>
          <span className="loading loading-spinner loading-md"></span> 
          <span className="ml-2">Logging Out...</span> 
        </>
      ) : (
        <>
          <LogOut className="w-5 h-5 mr-2" />
          <span className="text-sm font-semibold">Logout</span>
        </>
      )}
    </button>
  );
};

export default Logout;
