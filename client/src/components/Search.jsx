import React from 'react';
import { Search as SearchIcon } from 'lucide-react';

const Search = ({ placeholder }) => {
  return (
    <div className="relative mb-4">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-10 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
      />
      <SearchIcon className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
    </div>
  );
};

export default Search;