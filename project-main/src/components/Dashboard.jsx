import React from "react";
import "../Dashboard.css"; // ✅ Ensure this path is correct
import { Leaf } from "lucide-react"; // ✅ Corrected import from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <div className="logo" />
          <h1 className="app-title">
            <Leaf size={24} style={{ marginRight: "8px" }} />
            Tridosha AI
          </h1>
        </div>

        <nav className="header-nav">
          <button className="active">Dashboard</button>
          <button>AI Chat</button>
          <button>Dosha Test</button>
          <button>Log Symptoms</button>
          <button>Profile</button>
          <button>Settings</button>
        </nav>
      </header>

      {/* Welcome Card */}
      <div className="welcome-card">
        <h2>Welcome back, XYZ! 🙏</h2>
        <p>Your Ayurvedic wellness journey continues today.</p>
        <span className="dosha-tag">Primary Dosha: Vata</span>
      </div>

      {/* Dashboard Content */}
      <div className="dashboard-grid">
        {/* Quick Actions */}
        <div className="quick-actions">
          <h3>Quick Actions</h3>
          <button>Ask AI Guide</button>
          <button>Log Symptoms</button>
          <button>Retake Assessment</button>
        </div>

        {/* Today's Focus */}
        <div className="todays-focus">
          <h3>Today's Focus</h3>

          <div className="focus-item">
            <div className="dot blue"></div>
            <div>
              <p>Morning Meditation</p>
              <span>5 minutes</span>
            </div>
          </div>

          <div className="focus-item">
            <div className="dot orange"></div>
            <div>
              <p>Cooling Herbs</p>
              <span>Take after lunch</span>
            </div>
          </div>

          <div className="focus-item">
            <div className="dot green"></div>
            <div>
              <p>Evening Walk</p>
              <span>30 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
