import React from 'react';
import MessageInput from './MessageInput';

const ChatArea = () => {
  return (
    <div className="flex flex-col h-full bg-gray-100"> 
      {/* Messages area */}
      <div className="flex-grow overflow-y-auto p-4 hidden-scrollbar">
        {/* Display placeholder message when no user is selected */}
        <div className="text-center text-gray-600">
          <h2 className="text-lg font-semibold">Welcome</h2>
          <p>Select a user to start messaging.</p>
        </div>
      </div>
      
      {/* Message Input */}
      <div className="border-t border-gray-300 bg-white">
        <MessageInput onSendMessage={() => {}} />
      </div>
    </div>
  );
};

export default ChatArea;
