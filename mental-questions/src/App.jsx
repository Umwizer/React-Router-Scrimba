// // import Active from "./components/Active";
// // import Counter from "./components/Counter";
// // import FormValidation from "./components/FormValidation";
// // import { ThemeProvider, useTheme } from "./components/ThemeContext";

// // // function ThemeButton() {
// // //   const { theme, toggleTheme } = useTheme();

// // //   return <button onClick={toggleTheme}>Current Theme:{theme}</button>;
// // // }
// // const App = () => {
// //   const { data, error, loading } = useFetch("");
// //   // const { theme } = useTheme();
// //   return;
// //   // <div
// //   //   style={{
// //   //     height: "100vh",
// //   //     weight: "100vh",
// //   //     background: theme === "light" ? "#fff" : "#000",
// //   //   }}
// //   // >
// //   //   {/* <Active /> */}
// //   //   {/* <Counter /> */}
// //   //   {/* <FormValidation /> */}
// //   //   <h1>{theme.toUpperCase()}MODE</h1>
// //   //   <ThemeButton />
// //   // </div>
// // };

// // // export default function root() {
// // //   return (
// // //     <ThemeProvider>
// // //       <App />
// // //     </ThemeProvider>
// // //   );
// // // }

// import useFetch from "./components/useFetch";

// function Users() {
//   const { data, loading, error } = useFetch(
//     "https://jsonplaceholder.typicode.com/users"
//   );

//   if (loading) return <p>Loading ...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   // Make sure data exists before mapping
//   return (
//     <ul>
//       {data.map((user) => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   );
// }

// export default Users;

import React from "react";
import ItemsList from "./components/itemsList";
import Counter from "./components/Counter";
const App = () => {
  return (
    <div>
      <ItemsList />
      <Counter />
    </div>
  );
};

export default App;
