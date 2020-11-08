import React, { useContext } from "react";
import { UserContext, ChannelContext } from "./App";
import ComponentC from "./ComponentC";

function ComponentB() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {/* {" "}
      User is {user} and channel is {channel} */}
      <ComponentC />
    </div>
  );
}

export default ComponentB;
