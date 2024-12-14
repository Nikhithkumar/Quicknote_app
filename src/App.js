import './App.css';
import { useState } from 'react';
import {
  handleDigit,
  handleOperator,
  calculateResult,
  clearDisplay,
  handleScientific
} from './utils/calculatorUtils';
import Folder from './components/Folder';
import NoteList from './components/NoteList';
import './styles/tailwind.css';
import WriteNotes from './components/WriteNotes';

function App() {
  const [display, setDisplay] = useState('0');
  const [personalNotes, setPersonalNotes] = useState([]);
  const [workNotes, setWorkNotes] = useState([]);

  const addNote = (note) => {
    if (note.category === 'Personal') {
      setPersonalNotes([...personalNotes, note]);
    } else if (note.category === 'Work') {
      setWorkNotes([...workNotes, note]);
    }
  };

  const handleClick = (value) => {
    if (value === 'C') return setDisplay(clearDisplay());
    if (value === '=') return setDisplay(calculateResult(display));
    if (['+', '-', '*', '/', '^', '%'].includes(value)) {
      return setDisplay(handleOperator(display, value));
    }
    if (['sin', 'cos', 'tan', 'sqrt'].includes(value)) {
      return setDisplay(handleScientific(display, value));
    }
    setDisplay(handleDigit(display, value));
  };

  return (
    <div className="min-h-screen bg-gray-200 p-8">
     <WriteNotes addNote={addNote} />

<Folder name="Personal Notes">
  <NoteList notes={personalNotes} />
</Folder>

<Folder name="Work Notes">
  <NoteList notes={workNotes} />
</Folder>
    </div>
  );
}

export default App;
