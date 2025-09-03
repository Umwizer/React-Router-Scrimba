import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormValidation = () => {
  const [isPassword, setPassword] = useState("");
  const [isEmail, setEmail] = useState("");
  const [error, setError] = useState("");

  const isFormValid = isEmail.includes("@") && isPassword.length >= 8;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEmail.includes("@")) {
      setError("Email Must contains @");
      return;
    }
    if (isPassword.length < 8) {
      setError("Password must at least contain 8 characters");
      return;
    }
    if (!/[A-Z]/.test(isPassword)) {
      setError("Password must at least contain UpperCase");
      return;
    }
    if (!/[a-z]/.test(isPassword)) {
      setError("Password must at least contain LowerCase");
      return;
    }

    setError("");
    alert("Password is Strong");
  };
  const checked1 = isPassword.length >= 8;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <label>Email </label>
        <input
          type="email"
          value={isEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <label>
          <input type="checkbox" checked={checked1} readOnly /> Password is at
          least 8 characters
        </label>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" disabled={!isFormValid}>
          Login
        </button>
      </form>
    </>
  );
};

export default FormValidation;
