import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
import UserSearch from './UserSearch';
const Chat = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);

  };

  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <Sidebar />
        <div className="flex flex-col flex-auto h-full p-6">
          {/* Include the UserSearch component */}
          <UserSearch placeholder="Search for users..." onSearch={handleSearch} />
          <ChatArea searchTerm={searchTerm} />
        </div>
      </div>
    </div>
  );
};

export default Chat;