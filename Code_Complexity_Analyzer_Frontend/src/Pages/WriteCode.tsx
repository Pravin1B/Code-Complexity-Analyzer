import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";
import "../Styles/PageStyles.css"; // Use PageStyles.css

const WriteCode: React.FC = () => {
  const [code, setCode] = useState("// Write your Java code here...");
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // New state for error message
  const [loading, setLoading] = useState(false); // New state for loading status
  const navigate = useNavigate();

   // Function to send code to backend
   const handleAnalyze = async () => {
    if (!code.trim()) {
      setErrorMessage("Code cannot be empty.");
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch("http://localhost:8080/code/uploadCode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }), // Sending code as JSON
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Analysis Result:", data);

        // Save the response in localStorage for use on the analysis page
        localStorage.setItem("analysisData", JSON.stringify(data));

        // Navigate to analysis page
        navigate("/analyze");
      } else {
        throw new Error(data.message || "Error analyzing code.");
      }
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <div className="content-box">
        <h2>Write Your Java Code</h2>
        <p className="instruction-text">Write or paste your Java code below:</p>

        {/* Monaco Editor */}
        <div className="editor-container">
          <Editor
            height="300px"
            defaultLanguage="java"
            defaultValue={code}
            onChange={(newCode) => setCode(newCode || "")}
            theme="vs-dark"
          />
          <button className="back-button" onClick={() => navigate("/")}>
            Back
          </button>
        </div>

        {/* Display error messages */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* Analyze Button */}
        <button
          className="analyze-button"
          onClick={handleAnalyze}
          disabled={loading} // Disable button while loading
        >
          {loading ? "Analyzing..." : "Analyze Complexity"}
        </button>
      </div>
    </div>
  );
};

export default WriteCode;
