import React from "react";

const ToggleButton = ({ color, setColor }) => {
  const toggleColor = () => {
    setColor(color === "white" ? "black" : "white");
  };
  return (
    <div>
      <button className="toggleButton" onClick={() => toggleColor()}>
        Toggle Color
      </button>
    </div>
  );
};

export default ToggleButton;
