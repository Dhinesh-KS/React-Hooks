import React from "react";
import ComponentA from "./ComponentA";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Vishwas"}>
        <ChannelContext.Provider value={"Codevolution"}>
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
