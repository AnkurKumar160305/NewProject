import React from "react";
import Hero from "./Hero";
import Doshas from "./Doshas";
import Journey from "./Journey";
import "../LandingPage.css"; // Make sure the path is correct

const LandingPage = ({ onSignInClick }) => {
  return (
    <main id="main-content" className="main-wrapper">
      <Hero onSignInClick={onSignInClick} />
      <Doshas />
      <Journey />
    </main>
  );
};

export default LandingPage;
