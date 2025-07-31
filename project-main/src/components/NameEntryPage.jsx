import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { User, MoveLeft, Sparkles } from "lucide-react";
import "../NameEntryPage.css";

function NameEntryPage() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleBeginClick = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/name/add", {
        name,
      });

      // Save name in localStorage
      localStorage.setItem("name", name);

      navigate("/quiz", {
        state: { name: name },
      });

      console.log(res.data.message);
    } catch (err) {
      console.error("Error saving name:", err.response?.data || err.message);
    }
  };

  return (
    <div className="welcome-page">
      <div className="welcome-container">
        <div className="welcome-card">
          <div className="welcome-icon-circle">
            <User />
          </div>

          <h1 className="welcome-title">Welcome to Your Wellness Journey</h1>
          <p className="welcome-subtitle">
            Let's personalize your experience. What should we call you?
          </p>

          <label htmlFor="name" className="welcome-label">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="welcome-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div className="welcome-button-group">
            <button
              type="button"
              className="welcome-btn welcome-back-btn"
              onClick={() => navigate("/")}
            >
              <MoveLeft size={18} style={{ marginRight: "6px" }} />
              Back
            </button>

            <button
              type="button"
              className="welcome-btn welcome-assess-btn"
              onClick={handleBeginClick}
              disabled={!name.trim()}
              style={{ opacity: name.trim() ? 1 : 0.5 }}
            >
              <Sparkles size={18} style={{ marginRight: "6px" }} />
              Begin Assessment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NameEntryPage;
