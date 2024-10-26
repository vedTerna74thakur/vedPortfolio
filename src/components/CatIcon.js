import React from "react";
import "./CatIcon.css"; // Import the CSS for styling
import catImage from "../assets/cat.png";

const CatIcon = () => {
  return (
    <div className="cat-icon-container">
      <img src={catImage} alt="Cat Icon" className="cat-icon" />
    </div>
  );
};

export default CatIcon;
