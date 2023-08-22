import React from 'react';
import './counterAction.css';

const CounterAction = ({ handleInc, handleDec, handleReset }) => {
  console.log(handleInc);
  return (
    <div>
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
      <button className='reset' onClick={handleReset}>Reset</button>
    </div>
  );
};

export default CounterAction;