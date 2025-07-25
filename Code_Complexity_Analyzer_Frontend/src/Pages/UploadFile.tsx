import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/PageStyles.css"; // Keeping the same styling

const UploadFile: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false); // New state for loading status
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // New state for error message
  const [fileContent, setFileContent] = useState<string>(""); // State for file content
  const navigate = useNavigate();

  // Handle file selection (Only .java files allowed)
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file && file.name.endsWith(".java")) {
      setSelectedFile(file);
      setErrorMessage(null); // Clear previous errors
       // Read and set file content
       const reader = new FileReader();
       reader.onload = (e) => {
         setFileContent(e.target?.result as string);
       };
       reader.readAsText(file);
    } else {
      setErrorMessage("Please select a valid .java file.");
      setSelectedFile(null);
      setFileContent("");
    }
  };

  
  // Remove selected file
  const handleRemoveFile = () => {
    setSelectedFile(null);
    setErrorMessage(null); // Clear error message
    setFileContent("");
    (document.querySelector(".file-input") as HTMLInputElement).value = "";
  };

  const handleAnalyze = async () => {
    if (selectedFile) {
      
      setLoading(true);
      setErrorMessage(null); // Reset error before new request
      try {
        console.log("Here");
        const formData = new FormData();
        formData.append("file", selectedFile);

        const response = await fetch("http://localhost:8080/code/uploadFile", {
          method: "POST",
          body: formData,
        });
  
        const data = await response.json(); 
        if (response.ok) {
          
          
          // Save the analysis data in localStorage (or Context API)
          localStorage.setItem("analysisData", JSON.stringify(data));

          // Navigate to the analysis page
          navigate("/analyze");
        } else {
          const backendError = data.message || "Unknown error occurred.";
          throw new Error(backendError);
        }
      } catch (error:any) {
        setErrorMessage(error.message); // Display error message in red
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="page-container"> {/* Keeping the same page layout */}
      <div className="content-box">
        <h1 className="upload-instruction">Upload Java File</h1>
        <p className="upload-instruction">Only .java files are allowed.</p>

        {/* File input */}
        <div className="file-input-container">
          <input
            type="file"
            accept=".java"
            onChange={handleFileChange}
            className="file-input"
          />
         <button className="inline-back-button" onClick={() => navigate("/")}>
           Back
         </button>
        </div>

        {/* Display selected file name & remove button */}
        {selectedFile && (
          <div className="file-info">
            <p className="file-name">{selectedFile.name}</p>
          </div>
        )}

        {errorMessage && <p className="error-message">{errorMessage}</p>}

            {/* Display File Content */}
            {fileContent && (
          <div className="file-content-box">
            <h3>File Content:</h3>
            <pre className="file-content">{fileContent}</pre>
          </div>
        )}

        {/* Buttons Aligned Parallel */}
        {selectedFile && (
          <div className="button-container">
            <button className="remove-button" onClick={handleRemoveFile}>
              Remove File
            </button>
            <button className="analyze-button" onClick={handleAnalyze} disabled={loading}>
              {loading ? "Analyzing..." : "Analyze Complexity"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadFile;
