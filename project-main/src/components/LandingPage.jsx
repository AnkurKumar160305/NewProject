import React from "react";
import Hero from "./Hero";
import Doshas from "./Doshas";
import Journey from "./Journey";
import "../LandingPage.css";

const LandingPage = ({ onStartAssessmentClick }) => {
  return (
    <main id="main-content" className="main-wrapper">
      <Hero onSignInClick={onStartAssessmentClick} />
      <Doshas />
      <Journey />
    </main>
  );
};

export default LandingPage;
