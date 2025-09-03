import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

function DashBoard() {
  return <h1>DashBoard</h1>;
}
function Home() {
  return <h1>Home</h1>;
}
function About() {
  return <h1>About</h1>;
}
function Active() {
  const activeStyle = {
    fontWeight: "bold",
    color: "blue",
  };

  return (
    <div>
      <Router>
        <nav>
          <NavLink
            to="/"
            end
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            to="/dashBoard"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            DashBoard
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            About
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Active;
