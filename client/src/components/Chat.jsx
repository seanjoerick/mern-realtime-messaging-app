import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import ChatArea from './ChatArea';
import AddFriends from './AddFriends';
import Notifications from './Notifications';
import { Bell, UserPlus as UserPlusIcon } from 'lucide-react';

const Chat = () => {
  const [isAddFriendsOpen, setIsAddFriendsOpen] = useState(false); 
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Chat Area */}
        <div className="flex flex-col flex-auto h-full overflow-hidden p-6">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-4">
            {/* Right Aligned Icons */}
            <div className="flex items-center space-x-4 ml-auto"> 
              <button className="p-2 rounded-lg hover:bg-gray-200 transition duration-200" 
                onClick={() => setIsNotifOpen(true)}>
                <Bell className="w-6 h-6" />
              </button>

              <button
                className="p-2 rounded-lg hover:bg-gray-200 transition duration-200"
                onClick={() => setIsAddFriendsOpen(true)}>
                <UserPlusIcon className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-grow overflow-y-auto">
            <ChatArea />
          </div>

          {/* UserPlus Modal */}
          <AddFriends isOpen={isAddFriendsOpen} onClose={() => setIsAddFriendsOpen(false)} />

          {/* Notification Modal */}
          <Notifications isOpen={isNotifOpen} onClose={() => setIsNotifOpen(false)} /> 
        </div>
      </div>
    </div>
  );
};

export default Chat;
