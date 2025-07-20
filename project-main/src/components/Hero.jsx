import React from "react";
import leaf from "../assets/leaf.png";
import { Sparkles, BookOpen } from "lucide-react"
import "../Hero.css";
import { Link } from "react-router-dom";

const Hero = ({ onSignInClick }) => (
  <section className="hero">
    <div className="logo-ring">
      <img src={leaf} alt="Tridosha Logo" />
    </div>
    <h1>Tridosha AI</h1>
    <p className="subtitle">
      Discover your unique Ayurvedic constitution and receive personalized
      wellness guidance powered by ancient wisdom and modern AI.
    </p>
    <div className="hero-buttons">
      <button onClick={onSignInClick} className="btn orange">
        <Sparkles size={18} /> Start Dosha Assessment
      </button>

      <Link to="/learn" className="btn white">
        <BookOpen size={18} /> Learn About Ayurveda
      </Link>
    </div>
    <div className="stats">
      <div>
        <strong className="highlight">Smart Ayurveda</strong>
        <p>For Modern You</p>
      </div>
      <div>
        <strong className="highlight">3</strong>
        <p>Doshas Analyzed</p>
      </div>
      <div>
        <strong className="highlight">∞</strong>
        <p>Personalized Plans</p>
      </div>
    </div>
  </section>
);

export default Hero;
