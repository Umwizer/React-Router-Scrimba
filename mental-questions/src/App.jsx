import Active from "./components/Active";
import Counter from "./components/Counter";
import FormValidation from "./components/FormValidation";
import { ThemeProvider, useTheme } from "./components/ThemeContext";

function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>Current Theme:{theme}</button>;
}
const App = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        height: "100vh",
        weight: "100vh",
        background: theme === "light" ? "#fff" : "#000",
      }}
    >
      {/* <Active /> */}
      {/* <Counter /> */}
      {/* <FormValidation /> */}
      <h1>{theme.toUpperCase()}MODE</h1>
      <ThemeButton />
    </div>
  );
};

export default function root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
