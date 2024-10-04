import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import ChatArea from './ChatArea';
import Usersearch from './Usersearch';

const Chat = () => {
  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <div className="flex-shrink-0">
          <Sidebar />
        </div>
        <div className="flex flex-col flex-auto h-full overflow-hidden p-6">
          {/* Usersearch fixed at the top */}
          <div className="mb-4">
            <Usersearch />
          </div>
          {/* ChatArea takes the remaining space and scrolls */}
          <div className="flex-grow overflow-y-auto">
            <ChatArea />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
