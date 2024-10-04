import React from 'react';
import Conversation from './Conversation';

const Conversations = ({ onUserSelect }) => {
  const conversationData = [
    { id: 1, name: 'Henry Boyd', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', online: true },
    { id: 2, name: 'Marta Curtis', avatar: 'https://randomuser.me/api/portraits/women/44.jpg', online: false },
    { id: 3, name: 'Philip Tucker', avatar: 'https://randomuser.me/api/portraits/men/45.jpg', online: true },
    { id: 4, name: 'Christine Reid', avatar: 'https://randomuser.me/api/portraits/women/68.jpg', online: false },
    { id: 5, name: 'Jerry Guzman', avatar: 'https://randomuser.me/api/portraits/men/12.jpg', online: true },
  ];

  return (
    <div className="flex flex-col mt-4">
      <div className="flex flex-row items-center justify-between text-xs">
        <span className="font-bold">Conversations</span>
        <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">{conversationData.length}</span>
      </div>
      <div className="flex flex-col space-y-1 mt-4">
        {conversationData.map((conversation) => (
          <Conversation
            key={conversation.id}
            name={conversation.name}
            avatar={conversation.avatar}
            online={conversation.online}
            onClick={() => onUserSelect(conversation)}
          />
        ))}
      </div>
    </div>
  );
};

export default Conversations;
