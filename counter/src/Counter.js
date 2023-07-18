import React, { useState } from "react";

// const initialCount = 0;

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((count) => {
      return count + 1;
    });
  };

  const decrement = () => {
    setCount((count) => {
      return count - 1;
    });
  };

  const reset = () => {
    setCount(0);
  };

  const switchSign = () => {
    setCount((count) => {
      return count * -1;
    });
  };

  return (
    <div>
      <h1>
        counter: <h3 data-testid="count">{count}</h3>
      </h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={switchSign}>Switch Sign</button>
      </div>
    </div>
  );
}

export default Counter;
