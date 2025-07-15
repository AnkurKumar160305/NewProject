import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../PlanGenerator.css";
import arrowImg from "/images/down-arrow.png";

const PlanGenerator = () => {
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [text, setText] = useState("");
  const [reminderActive, setReminderActive] = useState(false);
  const navigate = useNavigate();

  const handleDurationClick = (duration) => {
    setSelectedDuration(duration);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleToggleReminder = () => {
    setReminderActive(!reminderActive);
  };

  return (
    <div className="Wellness">
      {/* Go Back */}
      <div className="arrow">
        <button className="arrow-btn" onClick={() => navigate("/dashboard")}>
          <img className="arrow-img" src={arrowImg} alt="Back arrow" />
          Back to Dashboard
        </button>
      </div>

      {/* Header Section */}
      <header className="header">
        <div className="left">
          <div className="header-bot-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
            </svg>
          </div>

          <div className="left-data">
            <h1>Wellness Plan Generator</h1>
            <p>Create your personalized Ayurvedic routine with progress tracking</p>
          </div>
        </div>

        <div className="right">
          <p>🌱 Kapha</p>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <p className="main-heading">Customize Your Plan</p>

        {/* Plan Duration */}
        <div className="plan-duration">
          <p className="plan-duration-heading">Plan Duration</p>
          <div className="plan-duration-buttons">
            {[7, 14, 30].map((duration) => (
              <button
                key={duration}
                className={`day-btn ${selectedDuration === duration ? "active" : ""}`}
                onClick={() => handleDurationClick(duration)}
              >
                {duration} Days
              </button>
            ))}
          </div>
        </div>

        {/* Reminder Toggle */}
        <div className="Reminders">
          <div className="Reminders-content">
            <p className="Reminders-heading">Daily Reminders</p>
            <p className="Reminders-text">Get notified about your wellness routine</p>
          </div>
          <div
            className={`onoff ${reminderActive ? "active" : ""}`}
            onClick={handleToggleReminder}
          >
            <button aria-label="Toggle reminder"></button>
          </div>
        </div>

        {/* Optional Description */}
        <div className="description">
          <p className="description-heading">
            Additional Goals or Focus Areas (Optional)
          </p>
          <textarea
            rows="4"
            placeholder="e.g., improve sleep quality, boost energy, manage weight, reduce stress..."
            value={text}
            onChange={handleTextChange}
            className={text.trim() !== "" ? "active-textarea" : ""}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button className="get-solution">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="solution-icon"
          >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
          </svg>
          Generate {selectedDuration || "7"}-Day Plan
        </button>
      </main>
    </div>
  );
};

export default PlanGenerator;
