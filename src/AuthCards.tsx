import React, { useState } from "react";
import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponent";

const AuthCards: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      {isLogin ? <LoginComponent onSwitch={handleSwitch} /> : <RegisterComponent onSwitch={handleSwitch} />}
    </div>
  );
};

export default AuthCards;
