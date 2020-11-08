import React, { useState, useEffect } from "react";

function HookCounterOne(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  });

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Clcik{count} times
      </button>
    </div>
  );
}

export default HookCounterOne;
