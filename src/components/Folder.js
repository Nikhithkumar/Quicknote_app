// src/components/Folder.js
import React from 'react';

const Folder = ({ name, children }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold">{name}</h2>
      {children}
    </div>
  );
};

export default Folder;
