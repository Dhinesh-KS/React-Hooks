import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  const handleSetCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <text>{count}</text>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => handleSetCount()}>Decrement</button>
    </div>
  );
}

export default HookCounter;
