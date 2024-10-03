import React from 'react';
import Conversation from './Conversation';

const Conversations = () => {
  const conversationData = [
    { name: 'Henry Boyd', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', online: true },
    { name: 'Marta Curtis', avatar: 'https://randomuser.me/api/portraits/women/44.jpg', online: false },
    { name: 'Philip Tucker', avatar: 'https://randomuser.me/api/portraits/men/45.jpg', online: true },
    { name: 'Christine Reid', avatar: 'https://randomuser.me/api/portraits/women/68.jpg', online: false },
    { name: 'Jerry Guzman', avatar: 'https://randomuser.me/api/portraits/men/12.jpg', online: true },
  ];

  return (
    <div className="flex flex-col mt-4">
      <div className="flex flex-row items-center justify-between text-xs">
        <span className="font-bold">Conversations</span>
        <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">{conversationData.length}</span>
      </div>
      <div className="flex flex-col space-y-1 mt-4">
        {conversationData.map((conversation, index) => (
          <Conversation
            key={index}
            name={conversation.name}
            avatar={conversation.avatar}
            online={conversation.online}
          />
        ))}
      </div>
    </div>
  );
};

export default Conversations;

