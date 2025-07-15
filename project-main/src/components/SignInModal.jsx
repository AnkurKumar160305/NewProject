import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SignInModal = ({ isOpen, onClose }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const modalRef = useRef(null);
  const navigate = useNavigate();

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const togglePassword = () => setPasswordVisible((prev) => !prev);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In submitted:", formData);
    navigate("/name-entry"); // Redirect after login
    onClose(); // Close modal
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay active"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose(); // Close only when clicking outside modal
      }}
    >
      <div className="signin-modal" ref={modalRef}>
        <button className="close-btn" onClick={onClose} aria-label="Close modal">
          ×
        </button>
        <h2>Welcome Back</h2>
        <form onSubmit={handleSignInSubmit}>
          {/* Email Input */}
          <div className="input-with-icon">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleInputChange}
            />
            <i className="input-icon" data-lucide="mail"></i>
          </div>

          {/* Password Input */}
          <div className="password-container">
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              onChange={handleInputChange}
            />
            <button
              type="button"
              className="toggle-password"
              onClick={togglePassword}
              aria-label="Toggle password visibility"
            >
              <i data-lucide={passwordVisible ? "eye-off" : "eye"}></i>
            </button>
          </div>

          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;
