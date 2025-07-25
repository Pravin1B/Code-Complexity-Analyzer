import "./Styles/PageStyles.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./Navbar";
import ProjectOverview from "./Pages/ProjectOverview";
import HowItWorks from "./Pages/HowItWorks";
import TeamMembers from "./Pages/TeamMembers";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home.tsx";
import AboutUs from "./Pages/AboutUs.tsx";
import UploadFile from "./Pages/UploadFile.tsx";
import WriteCode from "./Pages/WriteCode.tsx";
import AnalysisPage from "./Pages/AnalysisPage.tsx";
import AnalysisResult from "./Pages/AnalysisResult.tsx"



const App: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/assets/background.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        overflowY: "auto",
        width: "100vw",
      }}
    >
    <Router>
      <MyNavbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
        <Route path="/project-overview" element={<ProjectOverview />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/team-members" element={<TeamMembers />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/upload" element={<UploadFile />} />
        <Route path="/write-code" element={<WriteCode />} />
        <Route path="/analyze" element={<AnalysisPage />} />
        <Route path="/analyzeResult" element={<AnalysisResult />} />

      </Routes>
    </Router>
    </div>
  );
};

export default App;
;

