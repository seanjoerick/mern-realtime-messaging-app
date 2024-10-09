import React from 'react';
import MessageInput from './MessageInput';
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../context/AuthContext';

const ChatArea = () => {
  const { selectedFriend } = useConversation();
  const { authUser } = useAuthContext();

  return (
    <div className="flex flex-col h-full bg-gray-100">
      {/* Header Section without background color */}
      <header className="flex items-center justify-between p-4 border-b border-gray-300">
        <div className="flex items-center space-x-3">
          {/* Avatar and Name */}
          {selectedFriend ? (
            <>
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                <img
                  src={selectedFriend.profilePic}
                  alt={`${selectedFriend.fullName} avatar`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-gray-800 font-semibold text-lg">
                {selectedFriend.fullName}
              </div>
            </>
          ) : (
            <div className="text-gray-800 font-semibold text-lg">
              Welcome, {authUser.fullName}!
            </div>
          )}
        </div>
      </header>

      {/* Messages area */}
      {selectedFriend ? (
        <div className="flex-grow p-4 overflow-y-auto hidden-scrollbar">
          {/* Here you can add your chat bubble components */}
          <div className="space-y-4">
            
          </div>
        </div>
      ) : (
        <div className="flex-grow flex items-center justify-center p-4 overflow-y-auto">
          {/* Placeholder message when no conversation is selected */}
          <div className="text-center text-gray-600">
            <p className="text-gray-500">Select a chat to start messaging.</p>
          </div>
        </div>
      )}

      {/* Message Input */}
      {selectedFriend ? (
        <div className="border-t border-gray-300 bg-white">
          <MessageInput onSendMessage={() => {}} />
        </div>
      ) : null}
    </div>
  );
};

export default ChatArea;
