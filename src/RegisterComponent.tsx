import React, { useState, ChangeEvent, FormEvent } from "react";
import "./RegisterComponent.css";
interface IRegisterForm {
  onSwitch: () => void;
}

const RegisterComponent: React.FC<IRegisterForm> = ({ onSwitch }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    // Registration logic here...
    console.log (email, password, confirmPassword);
  };

  const handleInputChange =
    (setState: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      setState(e.target.value);
    };

  return (
    <div className="register-container">
      <form onSubmit={handleRegister} className="register-form">
        <h2>CREATE YOUR ACCOUNT</h2>
        <div className="input-fields">
          <input
            type="email"
            value={email}
            onChange={handleInputChange(setEmail)}
            placeholder="Email Address"
            required
          />
          <input
            type="password"
            value={password}
            onChange={handleInputChange(setPassword)}
            placeholder="Password"
            required
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={handleInputChange(setConfirmPassword)}
            placeholder="Confirm Password"
            required
          />
        </div>
        <button type="submit">Register</button>
        <button type="button" onClick={onSwitch}>
          Have an existing account?
        </button>
      </form>
    </div>
  );
};

export default RegisterComponent;
