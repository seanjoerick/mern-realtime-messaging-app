import React from 'react';
import Conversation from './Conversation';
import useGetFriends from '../../hooks/useGetFriends';

const Conversations = () => {
  const { loading, friends, friendsCount } = useGetFriends();
  console.log(friends);

  return (
    <div className="flex flex-col mt-4 md:mt-6">
      {/* Header with Friends Count */}
      <div className="flex flex-row items-center justify-between text-xs md:text-sm">
        <span className="font-bold text-white">Friends</span>
        <span className="flex items-center justify-center bg-gray-600 h-4 w-4 md:h-5 md:w-5 rounded-full text-white">
          {friendsCount}
        </span>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="flex items-center justify-center mt-4 md:mt-6">
          <span className="loading loading-spinner loading-lg"></span>
          <span className="ml-2 text-gray-400 text-sm md:text-base">Loading friends...</span>
        </div>
      ) : (
        <div className="flex flex-col space-y-1 mt-4 md:mt-6 max-h-[300px] md:max-h-[400px] lg:max-h-[500px] custom-scrollbar">
          {friends.length === 0 ? (
            <p className="text-white text-sm md:text-base">No friends yet.</p>
          ) : (
            friends.map((friend, index) => (
              <Conversation
                key={friend._id}
                friend={friend}
                lastindx={index === friends.length - 1}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Conversations;
