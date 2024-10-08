import React, { useState } from 'react';
import { UserPlus, UserCheck } from 'lucide-react';

const AddButton = ({ user, authUser }) => {
  const [isLoading] = useState(false);  
  const [isSent] = useState(user?.pendingRequests?.includes(authUser._id));  
  const isFriend = user?.friends?.includes(authUser._id);  

  return (
    <div className="flex-shrink-0">
      {isFriend ? (
        <button
          className="ml-2 w-32 h-10 flex items-center justify-center bg-white text-black border border-gray-200 rounded-lg"
          disabled
        >
          <UserCheck className="mr-2 h-4 w-4" />
          <span className="text-center">Friends</span>
        </button>
      ) : (
        <button
          className={`ml-2 w-32 h-10 flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap ${isSent ? 'bg-gray-400 cursor-default' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded-lg transition-colors duration-200`}
          disabled={isSent || isLoading}
          aria-busy={isLoading}
          aria-live="polite"
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Loading...</span>
            </span>
          ) : (
            <>
              <UserPlus className="mr-2 h-4 w-4" />
              <span className="text-center">{isSent ? 'Sent' : 'Add Friend'}</span>
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default AddButton;
