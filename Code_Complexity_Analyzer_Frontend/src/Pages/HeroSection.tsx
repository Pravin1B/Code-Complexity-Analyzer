import React, { useState } from "react";
import "../Styles/HeroSection.css"; // Make sure you create and style this file
import { useNavigate } from "react-router-dom"; 
const HeroSection: React.FC = () => {
   const [showOptions, setShowOptions] = useState(false);
   const navigate = useNavigate(); 
    //const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="hero-container">
      {!showOptions ? (
        <>
          <h1 className="hero-title text-4xl font-bold text-gray-800 text-center">
     Analyze Code Complexity Visually🚀🔍
</h1>
<p className="hero-text text-lg text-gray-600 text-center mt-2">
    Upload your code and get complexity insights instantly! 📂⚡
</p>
        </>
      ) : (
        <>
          <h1 className="hero-title">Choose an Option</h1>
          <p className="hero-text">Select how you want to analyze your code.</p>
        </>
      )}

      {!showOptions && (
        <button className="hero-button" onClick={() => setShowOptions(true)}>
          Get Started
        </button>
      )}

{showOptions && (
        <div className="options-container">
         <button className="option-button" onClick={() => navigate("/upload")}>
              📂 Upload a File
            </button>
            <button className="option-button" onClick={() => navigate("/write-code")}>
              ✍️ Write Code
            </button>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
