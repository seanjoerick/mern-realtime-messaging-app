import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import ChatArea from './ChatArea';
import Usersearch from './Usersearch';

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <div className="flex-shrink-0">
          <Sidebar onUserSelect={handleUserSelect} />
        </div>
        <div className="flex flex-col flex-auto h-full overflow-hidden p-6">
          <div className="mb-4">
            <Usersearch />
          </div>
          <div className="flex-grow overflow-y-auto">
            <ChatArea selectedUser={selectedUser} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
