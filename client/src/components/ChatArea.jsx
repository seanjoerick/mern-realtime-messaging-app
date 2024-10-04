import React, { useState, useRef, useEffect } from 'react';
import MessageInput from './MessageInput';

const ChatArea = () => {
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
      <div className="flex-grow overflow-y-auto p-4">
        {messages.map((message) => (
          <div key={message.id} className="chat chat-end mb-4">
            <div className="chat-bubble bg-indigo-500 text-white">{message.text}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="border-t border-gray-300 bg-white">
        <MessageInput onSendMessage={addMessage} />
      </div>
    </div>
  );
};

export default ChatArea;
