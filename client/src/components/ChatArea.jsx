import React, { useState, useRef, useEffect } from 'react';
import MessageInput from './MessageInput';

const ChatArea = ({ selectedUser }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello!" },
    { id: 2, text: "Hi there! How can I help you today?" },
    { id: 3, text: "I have a question about React." },
    { id: 4, text: "Sure, I'd be happy to help with any React questions. What would you like to know?" },
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const addMessage = (newMessage) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: prevMessages.length + 1,
        text: newMessage,
      },
    ]);
  };

  return (
    <div className="flex flex-col h-full bg-gray-100"> 
      {/* Messages area */}
      <div className="flex-grow overflow-y-auto p-4 hidden-scrollbar">
        {/* Display messages if a user is selected */}
        {selectedUser ? (
          messages.map((message) => (
            <div key={message.id} className="chat chat-end mb-4">
              <div className="chat-bubble bg-indigo-500 text-white">{message.text}</div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600">
            <h2 className="text-lg font-semibold">Welcome</h2>
            <p>Select a user to start messaging.</p>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      {/* Message Input */}
      <div className="border-t border-gray-300 bg-white">
        <MessageInput onSendMessage={addMessage} />
      </div>
    </div>
  );
};

export default ChatArea;
