import "./App.css";
import React, { useState } from "react";
import Details from "./components/Details";
import Login from "./components/Login";

function App() {
  const [isTrue, setIsTrue] = useState(false);
  const isLogin = (data) => {
    setIsTrue(data);
  };
  return (
    <div className="App">
      <Login isLogin = {isLogin}/>
     {isTrue && <Details />}
    </div>
  );
}

export default App;
