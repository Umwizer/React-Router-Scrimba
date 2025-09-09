import React, { createContext, useContext, useState } from "react";
//create context
const UserContext = createContext();
const ThemeContext = createContext();

//create Providers
function UserProvider({ children }) {
  const [user, setUser] = useState({ name: "Ruth", loggedIn: true });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
const MultiLevel = () => {
  const { user } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        padding: "20px",
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h2>Welcome,{user.name}</h2>
      <p>Current Theme:{theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <MultiLevel />
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
