import React, { useState } from 'react';
import './LoginComponent.css'; // Make sure to create a corresponding CSS file

interface LoginComponentProps {
  // You can define props here if needed
}

const LoginComponent: React.FC<LoginComponentProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the login logic here
    console.log(email, password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>SIGN IN TO YOUR ACCOUNT</h2>
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
        <div className="form-footer">
          <label>
            <input type="checkbox" /> Keep me signed in
          </label>
          <button type="submit">SIGN IN</button>
          <a href="/forgot-password">Forgot your password?</a>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;