// src/components/NoteList.js
import React from 'react';
import Note from './Note';

const NoteList = ({notes}) => {

  return (
    <div className="space-y-4">
      {notes.map((note, index) => (
        <Note key={index} title={note.title} content={note.content} />
      ))}
    </div>
  );
};

export default NoteList;
