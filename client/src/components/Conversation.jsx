import React from 'react';

const Conversation = ({ name, avatar, online }) => {
  return (
    <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 relative">
      {/* Avatar */}
      <div className="flex items-center justify-center h-10 w-10 bg-indigo-200 rounded-full overflow-hidden">
        <img src={avatar} alt={`${name} avatar`} className="h-full w-full object-cover" />
      </div>
      
      {/* Name */}
      <div className="ml-2 text-sm font-semibold">{name}</div>

      {/* Online status */}
      {online && (
        <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
      )}
    </button>
  );
};

export default Conversation;
