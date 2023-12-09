import { FC, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import "./App.css";
import LoginComponent from "./LoginComponent"; // Import LoginComponent
import RegisterComponent from "./RegisterComponent"; // Import RegisterComponent
import Home from "./Home";
import ProtectedRoute from "./ProtectedRoute"
const App: FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/login" element={<LoginComponent onSwitch={handleSwitch} isLogin={isLogin} />} />
          <Route path="/register" element={<RegisterComponent onSwitch={handleSwitch} isLogin={isLogin} />} />
          <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect from root to /login */}
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          {/* Add more Route components as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
