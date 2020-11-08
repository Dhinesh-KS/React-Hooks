import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });

  const handleSetname = (e) => {
    setName({ ...name, lastName: e.target.value });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input type="text" value={name.lastName} onChange={(e) => handleSetname(e)} />
        <h2>Your FirstName is - {name.firstName}</h2>
        <h2>Your LastName is - {name.lastName}</h2>
        <p>{JSON.stringify(name)}</p>
      </form>
    </div>
  );
}

export default HookCounterThree;
