// import React, { useState } from 'react';
// import Sidebar from '../components/Sidebar/Sidebar';
// import ChatArea from './ChatArea';
// import Usersearch from './Usersearch';

// const Chat = () => {
//   const [selectedUser, setSelectedUser] = useState(null);

//   const handleUserSelect = (user) => {
//     setSelectedUser(user);
//   };

//   return (
//     <div className="flex h-screen antialiased text-gray-800">
//       <div className="flex flex-row h-full w-full overflow-x-hidden">
//         <div className="flex-shrink-0">
//           <Sidebar onUserSelect={handleUserSelect} />
//         </div>
//         <div className="flex flex-col flex-auto h-full overflow-hidden p-6">
//           <div className="mb-4">
//             <Usersearch />
//           </div>
//           <div className="flex-grow overflow-y-auto"> 
//             <ChatArea selectedUser={selectedUser} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import ChatArea from './ChatArea';
import Usersearch from './Usersearch';
import { Bell, UserPlus } from 'lucide-react'; // Import Lucide icons

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
          <div className="flex items-center justify-between mb-4">
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
          <div className="flex-grow overflow-y-auto">
            <ChatArea selectedUser={selectedUser} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
