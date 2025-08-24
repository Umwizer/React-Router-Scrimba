import { React, useState } from "react";

const Login = () => {
  const [loginFormData, SetLoginFormData] = useState({
    email: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
  }
  function handleChange(e) {
    const { name, value } = e.target;
    SetLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <div className="login-container">
      <h1>Sign In to Your Account </h1>
      <Form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email Adress"
          value={loginFormData.email}
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={loginFormData.password}
        />
        <button>Log In </button>
      </Form>
    </div>
  );
};

export default Login;
