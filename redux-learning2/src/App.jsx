import React from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import "./App.css";
import ChangeColor from "./components/ChangeColor";
const App = () => {
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColor />
    </div>
  );
};

export default App;
