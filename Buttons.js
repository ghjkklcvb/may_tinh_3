import React from 'react';

const Buttons = ({ handleClick, handleClear, handleDelete, handleEqual }) => {
  return (
    <div className="buttons">
      <button onClick={handleClear}>Clear</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => handleClick('.')}>.</button>
      <button onClick={() => handleClick('/')}>/</button>
      <button onClick={() => handleClick('7')}>7</button>
      <button onClick={() => handleClick('8')}>8</button>
      <button onClick={() => handleClick('9')}>9</button>
      <button onClick={() => handleClick('*')}>*</button>
      <button onClick={() => handleClick('4')}>4</button>
      <button onClick={() => handleClick('5')}>5</button>
      <button onClick={() => handleClick('6')}>6</button>
      <button onClick={() => handleClick('-')}>-</button>
      <button onClick={() => handleClick('1')}>1</button>
      <button onClick={() => handleClick('2')}>2</button>
      <button onClick={() => handleClick('3')}>3</button>
      <button onClick={() => handleClick('+')}>+</button>
      <button onClick={() => handleClick('0')}>0</button>
      <button onClick={handleEqual}>=</button>
    </div>
  );
};

export default Buttons;



