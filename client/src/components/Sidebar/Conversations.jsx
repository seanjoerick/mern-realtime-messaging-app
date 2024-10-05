import React from 'react';
import Conversation from './Conversation';
import useGetFriends from '../../hooks/useGetFriends';

const Conversations = ({ onUserSelect }) => {
  const { loading, friends, friendsCount } = useGetFriends();

  return (
    <div className="flex flex-col mt-4">
      <div className="flex flex-row items-center justify-between text-xs">
        <span className="font-bold text-white">Friends</span>
        <span className="flex items-center justify-center bg-gray-600 h-4 w-4 rounded-full text-white">{friendsCount}</span>
      </div>
      {loading ? (
        <div className="flex items-center justify-center mt-4">
          <span className="loading loading-spinner loading-lg"></span>
          <span className="ml-2 text-gray-400">Loading friends...</span>
        </div>
      ) : (
        <div className="flex flex-col space-y-1 mt-4 max-h-[400px] custom-scrollbar">
          {friends.length === 0 ? (
            <p className="text-gray-400">No friends yet.</p>
          ) : (
            friends.map((friend) => (
              <Conversation
                key={friend._id}
                name={friend.fullName}
                avatar={friend.profilePic}
                online={true}
                onClick={() => onUserSelect(friend)}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Conversations;

