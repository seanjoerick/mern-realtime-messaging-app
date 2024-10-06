import React, { useState } from 'react';
import { Search, UserIcon } from 'lucide-react';

const AddFriends = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Adding user:', username);
    onClose();
  };

  const users = [
    { name: 'John Doe', username: 'johndoe' },
    { name: 'Jane Smith', username: 'janesmith' },
    { name: 'Alice Johnson', username: 'alicej' },
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 flex items-start justify-end bg-black bg-opacity-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-96 mt-20"> 
        <h2 className="text-xl font-bold mb-4">Add Friends</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center border rounded-lg p-2">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-none w-full p-2 focus:outline-none"
              placeholder="Search by name or username"
              required
            />
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">Search Results:</h3>
            {searchTerm && filteredUsers.length > 0 ? (
              <ul className="space-y-2">
                {filteredUsers.map((user) => (
                  <li key={user.username} className="flex items-center p-2 border rounded-lg">
                    <span className="mr-2">
                      <UserIcon className="h-5 w-5 text-gray-600" />
                    </span>
                    <div className="flex-grow">
                      <p className="font-medium">{user.name}</p>
                      <p className="text-gray-500">{user.username}</p>
                    </div>
                    <button
                      className="ml-2 px-3 py-1 bg-blue-500 text-white rounded-lg mt-1"
                      onClick={() => console.log(`Adding ${user.username}`)}
                    >
                      Add
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              searchTerm && <p className="text-gray-500">No results found</p>
            )}
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 px-4 py-2 bg-gray-300 rounded-lg">Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFriends;
