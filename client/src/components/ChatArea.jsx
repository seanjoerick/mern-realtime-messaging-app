import React, { useState } from 'react';
import MessageInput from './MessageInput';

const ChatArea = () => {

  
  return (
    <div className="flex flex-col flex-auto h-full p-8">
      <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
        <div className="flex flex-col h-full overflow-x-auto mb-4">
          <div className="flex flex-col h-full">
            <div className="grid grid-cols-12 gap-y-2">
              {/* Messages would go here */}
            </div>
          </div>
        </div>
      </div>
      {/* Render the MessageInput component and pass props */}
      <MessageInput/>
    </div>
  );
};

export default ChatArea;
