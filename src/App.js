import "./App.css";
import React, { useState } from "react";
import CounterAction from "./component/counterAction";
import Counter from "./component/counter";

function App() {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };

  const handleDec = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <Counter count={count} />
      <CounterAction
        handleInc={handleInc}
        handleDec={handleDec}
        handleReset={handleReset}
      />
    </div>
  );
}

export default App;
