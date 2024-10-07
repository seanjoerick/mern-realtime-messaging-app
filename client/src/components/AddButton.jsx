import React, { useState } from 'react';
import { UserPlus, UserCheck } from 'lucide-react';

const AddButton = ({ user, authUser, onAdd }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(user.pendingRequests?.includes(authUser._id));
  const isFriend = user.friends?.includes(authUser._id);

  const handleAddClick = async () => {
    if (isSent || isLoading || isFriend) return;

    setIsLoading(true);
    await onAdd(user._id);
    setIsLoading(false);
    setIsSent(true); 
  };

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
          className={`ml-2 w-32 h-10 flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap ${
            isSent ? 'bg-gray-400 cursor-default' : 'bg-blue-500'
          } text-white rounded-lg`}
          onClick={handleAddClick}
          disabled={isSent || isLoading}
        >
          {isLoading ? (
            <span>Loading...</span> 
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
