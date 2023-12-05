import { useState, FC } from "react";
import "./App.css";
import LandPageBtn from "./LandPageBtn";
import LoginComponent from "./LoginComponent";

interface LandPageBtnProps {
  onClick: () => void;
}

const App: FC = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleButtonClick: LandPageBtnProps['onClick'] = () => {
    setShowLogin(true);
  };

  return (
    <div className="app-container">
      {!showLogin && <LandPageBtn onClick={handleButtonClick} />}
      {showLogin && <LoginComponent />}
    </div>
  );
};

export default App;
