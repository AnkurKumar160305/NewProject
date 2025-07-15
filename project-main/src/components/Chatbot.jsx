import React from 'react';
import './Chatbot.css';

import downArrow from '../assets/down-arrow.png';
import paperAirplane from '../assets/paper-airplane.png';
import leafImg from '../assets/leafimg.png';
import shiningImg from '../assets/shining.png';
import heartImg from '../assets/heart.png';

const Chatbot = () => {
  return (
    <div className="chatbot">
      <div className="arrow">
        <button
          className="arrow-btn"
          onClick={() => (window.location.href = 'dashboard.html')}
        >
          <img className="arrow-img" src={downArrow} alt="Back Arrow" />
          Back to Dashboard
        </button>
      </div>

      <header>
        <div className="left">
          <div className="header-bot-icon">
            <BotIcon />
          </div>
          <div className="left-data">
            <h1>AI Wellness Guide</h1>
            <p>Personalized Ayurvedic guidance</p>
          </div>
        </div>
        <div className="right">
          <p>🔥 Pitta</p>
        </div>
      </header>

      <main>
        <div className="main-bot-icon">
          <BotIcon />
        </div>
        <div className="main-text">
          <p>
            🙏 Namaste ANKUR! I'm your AI Ayurvedic wellness guide. I see your
            dominant dosha is pitta. I'm here to provide personalized guidance
            based on ancient Ayurvedic wisdom. How can I help you on your
            wellness journey today?
          </p>
          <p>11:02</p>
        </div>
      </main>

      <footer>
        <div className="footer-div">
          <textarea
            rows="4"
            cols="100"
            name="footertext"
            id="footer-text"
            placeholder="Ask me anything about Ayurveda, your symptoms, diet recommendations, lifestyle tips..."
          ></textarea>
          <button className="aeroplane">
            <img src={paperAirplane} alt="Send" />
          </button>
        </div>

        <div className="footer-buttons">
          <button className="leaf">
            <img src={leafImg} alt="Diet" /> Diet Advice
          </button>
          <button className="star">
            <img src={shiningImg} alt="Herbs" /> Herbal Medicine
          </button>
          <button className="heart">
            <img src={heartImg} alt="Lifestyle" /> Lifestyle Tips
          </button>
        </div>
      </footer>
    </div>
  );
};

const BotIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-bot h-6 w-6 text-white"
  >
    <path d="M12 8V4H8"></path>
    <rect width="16" height="12" x="4" y="8" rx="2"></rect>
    <path d="M2 14h2"></path>
    <path d="M20 14h2"></path>
    <path d="M15 13v2"></path>
    <path d="M9 13v2"></path>
  </svg>
);

export default Chatbot;
