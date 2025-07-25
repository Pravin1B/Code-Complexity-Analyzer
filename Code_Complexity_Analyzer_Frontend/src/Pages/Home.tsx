import React from "react";
import "../Styles/PageStyles.css"; // Ensure styles exist
import HeroSection from "../Pages/HeroSection.tsx";
const Home: React.FC = () => {
  return (
    <div className="page-container">
      <div className="content-box">
       <HeroSection />
      </div>
    </div>
  );
};

export default Home;
