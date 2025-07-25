import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/PageStyles.css"; // Ensure the CSS file exists

const AboutUs: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="content-box">
        <h1>About Us</h1>
        <p>Details about the Code Complexity Analyzer...</p>

        {/* Back Button */}
        <button className="back-button" onClick={() => navigate("/")}>
          🔙 Back to Home
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
