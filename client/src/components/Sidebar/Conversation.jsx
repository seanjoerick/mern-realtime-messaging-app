import React from 'react';

const Conversation = ({ name, avatar, online, onClick, isLoading }) => {
  return (
    <button
      className="flex flex-row items-center hover:bg-gray-800 rounded-xl p-2 relative md:p-3"
      onClick={onClick}
    >
      {/* Avatar or Spinner */}
      <div className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 bg-indigo-200 rounded-full overflow-hidden">
        {isLoading ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : (
          <img src={avatar} alt={`${name} avatar`} className="h-full w-full object-cover" />
        )}
      </div>

      {/* Name */}
      <div className="ml-2 text-sm md:text-base font-semibold">{name}</div>

      {/* Online status */}
      {online && (
        <span className="absolute top-0 right-0 h-3 w-3 md:h-4 md:w-4 rounded-full bg-green-500 border-2 border-white"></span>
      )}
    </button>
  );
};

export default Conversation;
