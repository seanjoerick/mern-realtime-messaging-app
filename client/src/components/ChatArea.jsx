import { useEffect } from 'react';
import MessageInput from '../components/MessageInput';
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../context/AuthContext';
import { Hand } from 'lucide-react';
import Messages from '../components/Messages';
const ChatArea = () => {
  const { selectedFriend, setSelectedFriend } = useConversation();
  const { authUser } = useAuthContext();



  useEffect(() => {
    return () => setSelectedFriend(null);
  }, [setSelectedFriend]);

  return (
    <div className="md:min-w-[450px] flex flex-col h-full">
      {/* If no selected friend, show the welcome message */}
      {!selectedFriend ? (
        <div className="flex-grow flex items-center justify-center p-4 overflow-y-auto">
          <div className="text-center text-gray-600">
            <p className="text-gray-500 flex items-center">
              <Hand className="mr-2" /> Welcome, {authUser.fullName}!
            </p>
            <p className="text-gray-500">Select a chat to start messaging.</p>
          </div>
        </div>
      ) : (
        <>
          {/* Header with profile picture and name */}
          <div className="bg-gray-800 px-4 py-2 mb-2">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                <img
                  src={selectedFriend.profilePic}
                  alt={`${selectedFriend.fullName} avatar`}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="label-text text-gray-300">
                {selectedFriend.fullName}
              </span>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-grow p-4 overflow-y-auto hidden-scrollbar bg-gray-100">
           <Messages/>
          </div>

          {/* Message Input */}
          <div className="border-t border-gray-300 bg-white">
            <MessageInput />
          </div>
        </>
      )}
    </div>
  );
};

export default ChatArea;
