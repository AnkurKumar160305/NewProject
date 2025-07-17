import React, { useEffect } from "react";
import { Mail } from "lucide-react";
import "./ResetPasswordPopup.css";

const ResetPasswordPopup = ({ onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Password reset link sent to your email!");
    onClose();
  };

  return (
    <div className="reset-modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="reset-password-popup">
        <button className="reset-close-btn" onClick={onClose} aria-label="Close">×</button>

        <div className="reset-modal-header">
          <Mail className="reset-icon" size={22} />
          <h2>Reset Password</h2>
        </div>

        <p>Enter your email address and we’ll send you a link to reset your password.</p>

        <form onSubmit={handleSubmit}>
          <div className="reset-input-with-icon">
            <input type="email" placeholder="Email Address" required />
            <Mail className="reset-input-icon" size={18} />
          </div>

          <div className="reset-modal-buttons">
            <button type="button" className="reset-button grey" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="reset-button orange">
              Send Reset Link
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPopup;
