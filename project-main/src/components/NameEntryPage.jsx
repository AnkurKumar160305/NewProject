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
    <div className="container">
      <div className="card">
        <div className="icon-circle" aria-hidden="true">
          <User />
        </div>

        <h1 className="title">Welcome to Your Wellness Journey</h1>
        <p className="subtitle">Let's personalize your experience. What should we call you?</p>

        <label htmlFor="name" className="label">Your Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="button-group">
          <button
            type="button"
            className="btn back-btn"
            onClick={() => navigate('/')}
          >
            <MoveLeft size={18} style={{ marginRight: '6px' }} />
            Back
          </button>

          <button
            type="button"
            className="btn assess-btn"
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
  );
}

export default NameEntryPage;
