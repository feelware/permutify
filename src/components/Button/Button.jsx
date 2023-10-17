import { useState } from "react";
import "./Button.css";
import "../../index.css";

export default function Button({ text, icon, onMouseUp, wide }) {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
    onMouseUp && onMouseUp();
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
  };

  return (
    <button
      className={`button ${isPressed ? "pressed" : ""} ${
        isHovered ? "hovered" : ""
      } ${wide ? "wide" : ""}`}
      onClick={onMouseUp}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icon && <img src={icon} alt="" />}
      {text && <p className="label">{text}</p>}
    </button>
  );
}