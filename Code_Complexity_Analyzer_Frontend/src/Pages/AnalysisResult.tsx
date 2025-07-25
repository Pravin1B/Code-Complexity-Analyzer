import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/PageStyles.css";
import ComplexityCharts from "./ComplexityCharts"; // Import the chart component

// Define types for MethodComplexity and AnalysisData
interface MethodComplexity {
  methodName: string;
  timeComplexity: string;
  spaceComplexity: string;
  cyclomaticComplexity: number;
}

interface AnalysisData {
  methodComplexities: MethodComplexity[];
  overallTimeComplexity: string;
  overallSpaceComplexity: string;
  overallCyclomaticComplexity: number;
}

const AnalysisResult: React.FC = () => {
  const [analysisData, setAnalysisData] = useState<AnalysisData | null>(null);
  const [showCharts, setShowCharts] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("analysisData");
    if (storedData) {
      setAnalysisData(JSON.parse(storedData));
    }
  }, []);

  if (!analysisData) {
    return (
      <div className="page-container">
        <div className="content-box">
          <h2>No analysis data found.</h2>
          <button className="back-button" onClick={() => navigate("/")}>
            Back to Upload
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="content-box">
        <h1 className="upload-instruction">Complexity Analysis Result</h1>

        {/* Table Section */}
        <h3>Method-wise Complexities</h3>
        <table className="complexity-table">
          <thead>
            <tr>
              <th>Method Name</th>
              <th>Time Complexity</th>
              <th>Space Complexity</th>
              <th>Cyclomatic Complexity</th>
            </tr>
          </thead>
          <tbody>
            {analysisData.methodComplexities.map(
              (method: MethodComplexity, index: number) => (
                <tr key={index}>
                  <td>{method.methodName}</td>
                  <td>{method.timeComplexity}</td>
                  <td>{method.spaceComplexity}</td>
                  <td>{method.cyclomaticComplexity}</td>
                </tr>
              )
            )}
          </tbody>
        </table>

        {/* Overall Complexity */}
        <div className="overall-complexity">
          <h3>Overall Complexities</h3>
          <p><strong>Time Complexity:</strong> {analysisData.overallTimeComplexity}</p>
          <p><strong>Space Complexity:</strong> {analysisData.overallSpaceComplexity}</p>
          <p><strong>Cyclomatic Complexity:</strong> {analysisData.overallCyclomaticComplexity}</p>
        </div>

        {/* Buttons */}
        <div className="button-container">
          <button className="back-button" onClick={() => navigate("/")}>
            Back to Upload
          </button>
          <button className="analyze-button" onClick={() => setShowCharts(!showCharts)}>
            {showCharts ? "Hide Charts" : "View Charts"}
          </button>
        </div>

        {/* Charts */}
        {showCharts && <ComplexityCharts data={analysisData} />}
      </div>
    </div>
  );
};

export default AnalysisResult;
