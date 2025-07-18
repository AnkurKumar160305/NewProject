import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../NameEntryPage.css';
import { User, MoveLeft, Sparkles } from 'lucide-react';

function NameEntryPage() {
  const [name, setName] = useState('');
  const isNameEntered = name.trim().length > 0;
  const navigate = useNavigate();

  const handleBeginClick = () => {
    if (isNameEntered) {
      console.log("User's name:", name.trim());
      navigate('/quiz'); // Navigate to quiz page
    }
  };

  return (
  <div className="welcome-page">
  <div className="welcome-container">
    <div className="welcome-card">
      <div className="welcome-icon-circle" aria-hidden="true">
        <User />
      </div>

      <h1 className="welcome-title">Welcome to Your Wellness Journey</h1>
      <p className="welcome-subtitle">Let's personalize your experience. What should we call you?</p>

      <label htmlFor="name" className="welcome-label">Your Name</label>
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
          onClick={() => navigate('/')}
        >
          <MoveLeft size={18} style={{ marginRight: '6px' }} />
          Back
        </button>

        <button
          type="button"
          className="welcome-btn welcome-assess-btn"
          disabled={!isNameEntered}
          style={{ opacity: isNameEntered ? 1 : 0.5 }}
          onClick={handleBeginClick}
        >
          <Sparkles size={18} style={{ marginRight: '6px' }} />
          Begin Assessment
        </button>
      </div>
    </div>
  </div>
</div>
  );
}

export default NameEntryPage;
