export const handleDigit = (display, value) => {
    return display === '0' ? value : display + value;
  };
  
  export const handleOperator = (display, operator) => {
    return display + operator;
  };
  
  export const calculateResult = (display) => {
    try {
      const result = Function(`'use strict'; return (${display})`)();
      return result.toString();
    } catch {
      return 'Error';
    }
  };
  
  export const clearDisplay = () => '0';
  
  export const handleScientific = (display, func) => {
    const value = parseFloat(display);
    switch (func) {
      case 'sin': return Math.sin(value).toString();
      case 'cos': return Math.cos(value).toString();
      case 'tan': return Math.tan(value).toString();
      case 'sqrt': return Math.sqrt(value).toString();
      default: return display;
    }
  };
  