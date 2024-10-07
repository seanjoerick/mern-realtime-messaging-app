import React, { useState } from 'react';
import { Search } from 'lucide-react';
import useGetAllUsers from '../hooks/useGetAllUsers';
import { useAuthContext } from '../context/AuthContext';

const AddFriends = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { loading, users } = useGetAllUsers();
  const { authUser } = useAuthContext();

  const filteredUsers = users.filter(user =>
    user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-start justify-end bg-black bg-opacity-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-96 mt-20">
        <h2 className="text-xl font-bold mb-4">Add Friends</h2>
        <div className="mb-4 flex items-center border rounded-lg p-2">
          <Search className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-none w-full p-2 focus:outline-none"
            placeholder="Search"
          />
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Search Results:</h3>
          {loading ? (
            <p>Loading...</p>
          ) : searchTerm && filteredUsers.length > 0 ? (
            <ul className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
              {filteredUsers.slice(0, 5).map((user) => {
                const hasPendingRequest = user.pendingRequests?.includes(authUser._id);

                return (
                  <li key={user._id} className="flex items-center p-2 border rounded-lg">
                    <span className="mr-2">
                      <img
                        src={user.profilePic}
                        alt={user.fullName}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                    </span>
                    <div className="flex-grow">
                      <p className="font-medium">{user.fullName}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <button
                        className={`ml-2 w-32 h-10 flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap ${hasPendingRequest ? 'bg-gray-400 cursor-default' : 'bg-blue-500'} text-white rounded-lg`}
                        onClick={() => !hasPendingRequest && console.log(`Adding ${user._id}`)}
                        disabled={hasPendingRequest}
                      >
                        <span className="text-center">{hasPendingRequest ? 'Sent' : 'Add Friend'}</span>
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            searchTerm && <p className="text-gray-500">No results found</p>
          )}
        </div>
        <div className="flex justify-end">
          <button type="button" onClick={onClose} className="mr-2 px-4 py-2 bg-gray-300 rounded-lg">Close</button>
        </div>
      </div>
    </div>
  );
};

export default AddFriends;
