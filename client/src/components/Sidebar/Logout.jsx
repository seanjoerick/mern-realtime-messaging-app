// import React from 'react';
// import { LogOut } from 'lucide-react';
// import useLogout from '../../hooks/useLogout';

// const Logout = () => {
//   const { logout, loading } = useLogout();

//   const handleLogout = () => {
//     logout();
//   };

//   return (
//     <div className="p-4">
//       <button 
//         onClick={handleLogout} 
//         className={`flex items-center justify-center w-full p-2 bg-gray-500 text-white rounded-lg 
//                     ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-600'} transition duration-200`}
//         disabled={loading}
//       >
//         {loading ? (
//           <>
//             <span className="loading loading-spinner loading-md"></span> 
//             <span className="ml-2">Logging Out...</span> 
//           </>
//         ) : (
//           <>
//             <LogOut className="w-5 h-5 mr-2" />
//             <span className="text-sm font-semibold">Logout</span>
//           </>
//         )}
//       </button>
//     </div>
//   );
// };

// export default Logout;
import React from 'react';
import { LogOut } from 'lucide-react';
import useLogout from '../../hooks/useLogout';

const Logout = () => {
  const { logout, loading } = useLogout();

  const handleLogout = () => {
    if (!loading) {
      logout();
    }
  };

  return (
    <div className="p-4">
      <button 
        onClick={handleLogout}
        className={`flex items-center justify-center w-full p-3 bg-gray-700 text-white rounded-lg 
                    ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-600'} 
                    transition duration-200 ease-in-out transform ${loading ? '' : 'hover:scale-105'}`}
        disabled={loading}
        aria-live="polite"
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
    </div>
  );
};

export default Logout;
