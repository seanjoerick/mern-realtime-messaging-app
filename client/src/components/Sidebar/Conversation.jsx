import React, { useEffect } from 'react';
import useConversation from '../../../zustand/useConversation';

const Conversation = ({ friend }) => {
  const { selectedFriend, setSelectedFriend } = useConversation();
  const isSelected = selectedFriend?._id === friend._id;

  return (
    <button
      onClick={() => setSelectedFriend(friend)}
      className={`flex flex-row items-center rounded-xl p-2 relative md:p-3 ${isSelected ? 'bg-gray-800' : ''}`} 
    >
      {/* Avatar */}
      <div className="relative flex items-center justify-center h-12 w-12 bg-indigo-200 rounded-full overflow-visible">
        <img src={friend.profilePic} alt={`${friend.fullName} avatar`} className="h-full w-full object-cover" />
      </div>

      {/* Name */}
      <div className="ml-2 text-sm md:text-base font-semibold">{friend.fullName}</div>
    </button>
  );
};

export default Conversation;