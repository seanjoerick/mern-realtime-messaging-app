import React from 'react';
import { Search as SearchIcon } from 'lucide-react';

const UserSearch = ({ placeholder, onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="flex justify-center mb-4">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleSearch}
          className="w-full h-10 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
        <SearchIcon className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
      </div>
    </div>
  );
};

export default UserSearch;