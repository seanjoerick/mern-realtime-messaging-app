import React from 'react';

const Conversation = ({ name, avatar, onClick, isLoading }) => {
  return (
    <button
      className="flex flex-row items-center hover:bg-gray-800 rounded-xl p-2 relative md:p-3"
      onClick={onClick}
    >
      {/* Avatar or Spinner */}
      <div className="relative flex items-center justify-center h-12 w-12 bg-indigo-200 rounded-full overflow-visible">
        {isLoading ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : (
          <img src={avatar} alt={`${name} avatar`} className="h-full w-full object-cover" />
        )}
      </div>

      {/* Name */}
      <div className="ml-2 text-sm md:text-base font-semibold">{name}</div>
    </button>
  );
};

export default Conversation;
