import React from 'react';
import './Counter.css';


function Counter({ count }) {
  return (
    <div>
      <h1>Count :</h1>
      <p>{count}</p>
    </div>
  );
}
export default Counter; 