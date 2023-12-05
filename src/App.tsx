import { useState } from "react";
import "./App.css";

const App = () => {
  const [top, setTop] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const handleClick = () => {
    setTop(top + 250);
    setOpacity(0);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {top <= 250 && (
          <button
            type="button"
            className="btn btn-primary"
            id="press-me"
            onClick={handleClick}
            style={{ transform: `translateY(${top}px)`, opacity: `${opacity}` }}
            disabled={opacity === 0}
          >
            Primary
          </button>
        )}
      </div>
    </>
  );
};

export default App;
