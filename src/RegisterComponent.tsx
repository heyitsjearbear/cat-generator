import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./RegisterComponent.css"; // Make sure to create a corresponding CSS file

interface RegisterComponentProps {
  onSwitch: () => void;
  isLogin: boolean;
  // You can define props here if needed
}

const RegisterComponent: React.FC<RegisterComponentProps> = ({ onSwitch, isLogin }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password, confirmPassword);
    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      console.log(response);
  
      if (!response.ok) {
        throw new Error('Registration failed');
      }
  
      const data = await response.json();
  
      // Save the token to localStorage or to a cookie
      localStorage.setItem('token', data.token);
  
      // Navigate to the home route
      navigate('/home');
    } catch (error) {
      console.error(error);
    }
  };

  const handleSwitch = () => {
    onSwitch();
    // Navigate to the login route if isLogin is false, otherwise navigate to the register route
    navigate(!isLogin ? '/login' : '/register');
  };

  return (
    <div className="register-container">
      <form onSubmit={handleRegister} className="register-form">
        <h2>CREATE YOUR ACCOUNT</h2>
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
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />
        </div>
        <button type="submit">Register</button>
        <button type="button" onClick={handleSwitch}>
          Have an existing account?
        </button>
      </form>
    </div>
  );
};

export default RegisterComponent;
