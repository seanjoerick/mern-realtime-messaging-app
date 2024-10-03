import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
const Chat = () => {
  
  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <Sidebar />
        <div className="flex flex-col flex-auto h-full p-6">
          <ChatArea />
        </div>
      </div>
    </div>
  );
};

export default Chat;