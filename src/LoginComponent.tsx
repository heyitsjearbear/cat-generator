import React, { useState } from "react";
import "./LoginComponent.css"; // Make sure to create a corresponding CSS file
interface LoginComponentProps {
  onSwitch: () => void;
  // You can define props here if needed
}

const LoginComponent: React.FC<LoginComponentProps> = ({ onSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the login logic here
    console.log(email, password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>SIGN IN TO YOUR ACCOUNT</h2>
        <div className="input-fields">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <div className="form-footer">
          <div className="keep-signed-in">
            <label>
              <input type="checkbox" />
            </label>
            <p id="sign-in-text">Keep me signed in</p>
          </div>
          <div className="sign-in-button">
            <button type="submit">Sign In</button>
            <a href="/forgot-password">Forgot your password?</a>
          </div>
        </div>
        <button type="button" onClick={onSwitch}>
          Need an account?
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
