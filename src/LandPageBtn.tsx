import { useState, FC } from "react";
import "./App.css";

interface LandPageBtnProps {
  onClick: () => void;
}

const LandPageBtn: FC<LandPageBtnProps> = ({ onClick }) => {
  const [top, setTop] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const handleClick = () => {
    setTop(top + 250);
    setOpacity(0);
    onClick();
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
            className="btn btn-primary"
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

export default LandPageBtn;
