import { useState } from "react";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (!loginFormData.email || !loginFormData.password) {
      alert("Please fill out all fields");
      return;
    }
    console.log(loginFormData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      <h1>Sign In to Your Account</h1>
      <div className="login-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email Address"
          value={loginFormData.email}
          aria-label="Email Address"
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={loginFormData.password}
          placeholder="Password"
          aria-label="Password"
        />
        <button onClick={handleSubmit}>Log In</button>
      </div>
    </div>
  );
}
