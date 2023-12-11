import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./LoginComponent.css"; // Make sure to create a corresponding CSS file
import { Alert } from "react-bootstrap";
interface LoginComponentProps {
  onSwitch: () => void;
  isLogin: boolean;
  // You can define props here if needed
}

const LoginComponent: React.FC<LoginComponentProps> = ({ onSwitch, isLogin }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate(); // Use the useNavigate hook
  const [loginValid, isLoginValid] = useState<boolean>(true); // You can use this state to show an error message if the passwords do not match
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();

      // Save the token to localStorage or to a cookie
      localStorage.setItem('token', data.token);
      isLoginValid(true);
      // Navigate to the home route
      navigate('/home');
    } catch (error) {
      isLoginValid(false)
      console.error(error);
    }
  };

  const handleSwitch = () => {
    onSwitch();
    // Navigate to the register route if isLogin is true, otherwise navigate to the login route
    navigate(isLogin ? '/register' : '/login');
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
        <button type="submit">Sign In</button>
        { !loginValid && <Alert variant="danger">Login Failed</Alert> }
        <button type="button" onClick={handleSwitch}>
          Don't have an account? Sign Up
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
