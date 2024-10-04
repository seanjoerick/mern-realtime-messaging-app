import React from 'react';

const Usersearch = ({ onSearch }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search user..."
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-300"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default Usersearch;
