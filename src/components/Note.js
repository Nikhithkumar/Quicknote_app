// src/components/Note.js
import React from 'react';

const Note = ({ title, content }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default Note;
