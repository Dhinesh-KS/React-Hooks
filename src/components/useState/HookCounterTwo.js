import React, { useState } from "react";

function HookCounterTwo() {
  const [count, setCount] = useState(0);

  const handleSetCount = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    setCount((previousCount) => previousCount + 1);
    setCount((previousCount) => previousCount + 1);
    setCount((previousCount) => previousCount + 1);
    setCount((previousCount) => previousCount + 1);
    setCount((previousCount) => previousCount + 1);
  };

  return (
    <div>
      <text>{count}</text>
      <button onClick={() => setCount((previousCount) => previousCount + 1)}>
        Increment
      </button>
      <button onClick={() => handleSetCount()}>
      Increment 5
      </button>
    </div>
  );
}

export default HookCounterTwo;
