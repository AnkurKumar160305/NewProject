import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../SignInUp.css";
import { Mail, Eye, EyeOff } from "lucide-react";

const SignInModal = ({ isOpen, onClose, onSignUpClick, onForgotPasswordClick }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const modalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

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
    navigate("/name-entry");
    onClose();
  };

  const handleSignupRedirect = (e) => {
    e.preventDefault();
    onClose();
    onSignUpClick();
  };

  const handleForgotPasswordRedirect = (e) => {
    e.preventDefault();
    onClose();
    onForgotPasswordClick();
  };

  if (!isOpen) return null;

  const PasswordIcon = passwordVisible ? EyeOff : Eye;

  return (
    <div
      className="modal-overlay active"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="signin-modal" ref={modalRef}>
        <button className="close-btn" onClick={onClose} aria-label="Close modal">
          ×
        </button>
        <h2>Welcome Back</h2>
        <form onSubmit={handleSignInSubmit}>
          <div className="input-with-icon">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleInputChange}
            />
            <div className="input-icon">
              <Mail size={20} color="#666" />
            </div>
          </div>

          <div className="input-with-icon password-container">
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
              <div className="input-icon">
                <PasswordIcon size={20} color="#666" />
              </div>
            </button>
          </div>

          <div className="checkbox-container">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember" className="custom-checkbox-label">
              Remember me
            </label>
          </div>

          <button type="submit" className="primary-button">Sign In</button>

          <div className="modal-footer">
            <p style={{ marginTop: "1rem" }}>
              <a href="#" onClick={handleForgotPasswordRedirect}>
                Forgot password?
              </a>
            </p>
            <p>
              Don’t have an account?{" "}
              <a href="#" onClick={handleSignupRedirect}>
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;
