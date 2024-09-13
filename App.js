import React, { useState } from 'react';
import './App.css';
import Buttons from './Buttons'; 
import Display from './Display'; 
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleEqual = () => {
    try {
      setInput(evaluate(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
    <div>
      <h1>MÁY TÍNH</h1>
    </div>
      <Display input={input} />

      <Buttons 
        handleClick={handleClick}
        handleClear={handleClear}
        handleDelete={handleDelete}
        handleEqual={handleEqual}
      />
    </div>
  );
}

export default App;
