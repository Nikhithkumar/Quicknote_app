import './App.css';
import { useState } from 'react';
import {
  handleDigit,
  handleOperator,
  calculateResult,
  clearDisplay,
  handleScientific
} from './utils/calculatorUtils';

function App() {
  const [display, setDisplay] = useState('0');

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
    <div className="App">
      <header className="App-header">
        <div className="calculator">
          <div className="display">{display}</div>
          <div className="buttons">
            {['7', '8', '9', '/', 'sin', 'cos'].map((btn) => (
              <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
            ))}
            {['4', '5', '6', '*', 'tan', 'sqrt'].map((btn) => (
              <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
            ))}
            {['1', '2', '3', '-', '^', '%'].map((btn) => (
              <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
            ))}
            {['0', '.', '=', '+', 'C'].map((btn) => (
              <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
