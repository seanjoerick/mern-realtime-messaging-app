import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import ChatArea from './ChatArea';
import Usersearch from './Usersearch';
import { Bell, UserPlus, Menu } from 'lucide-react';

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        {/* Sidebar */}
        <Sidebar
          onUserSelect={handleUserSelect}
          isSidebarOpen={isSidebarOpen} 
          toggleSidebar={toggleSidebar}
        />

        {/* Main Chat Area */}
        <div className="flex flex-col flex-auto h-full overflow-hidden p-6">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-4">
            {/* Menu Button for Mobile */}
            <button
              className="sm:hidden p-2 rounded-lg hover:bg-gray-200 transition duration-200"
              onClick={toggleSidebar} 
            >
              <Menu className="w-6 h-6" />
            </button>

            <Usersearch />
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-200 transition duration-200">
                <Bell className="w-6 h-6" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-200 transition duration-200">
                <UserPlus className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-grow overflow-y-auto">
            <ChatArea selectedUser={selectedUser} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
