import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import navigate
import "../Styles/PageStyles.css";

const AnalysisPage: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        const nextProgress = oldProgress + 10;
        if (nextProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            navigate("/analyzeResult"); // Redirect to result page
          }, 800); // Optional delay for UX
        }
        return nextProgress >= 100 ? 100 : nextProgress;
      });
    }, 500); // Smooth timing
    return () => clearInterval(interval);
  }, [navigate]);

  const status = [
    progress >= 33,
    progress >= 66,
    progress === 100,
  ];

  return (
    <div className="page-container">
      <div className="content-box">
        <h2>Analyzing Code Complexity...</h2>

        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="status-indicator">
          <div className={`status-item ${status[0] ? "completed" : ""}`}>
            {status[0] ? "✔️" : "⏳"} Time Complexity
          </div>
          <div className={`status-item ${status[1] ? "completed" : ""}`}>
            {status[1] ? "✔️" : "⏳"} Space Complexity
          </div>
          <div className={`status-item ${status[2] ? "completed" : ""}`}>
            {status[2] ? "✔️" : "⏳"} Generated Report
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisPage;
