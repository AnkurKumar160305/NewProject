import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SignUpModal = ({ isOpen, onClose, onSignInClick }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    terms: false,
  });
  const [isValid, setIsValid] = useState(false);
  const modalRef = useRef(null);
  const navigate = useNavigate();

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  // Lock/unlock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Password and form validation
  useEffect(() => {
    const { username, email, password, terms } = formData;
    const validPassword =
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /\d/.test(password) &&
      /[^A-Za-z0-9]/.test(password);

    setIsValid(username && email && validPassword && terms);
  }, [formData]);

  const togglePassword = () => setPasswordVisible((prev) => !prev);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up submitted:", formData);
    navigate("/name-entry");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay active"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="signup-modal" ref={modalRef}>
        <button className="close-btn" onClick={onClose} aria-label="Close modal">
          ×
        </button>
        <h2>Create Account</h2>
        <form onSubmit={handleSignUpSubmit}>
          {/* Username */}
          <div className="input-with-icon">
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              onChange={handleInputChange}
            />
            <i className="input-icon" data-lucide="user"></i>
          </div>

          {/* Email */}
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

          {/* Password */}
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

          {/* Password Error */}
          {!isValid && formData.password.length > 0 && (
            <div className="password-error">
              Password must be 8+ characters, include uppercase, number, and symbol.
            </div>
          )}

          {/* Terms Checkbox */}
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="agreeTerms"
              name="terms"
              onChange={handleInputChange}
            />
            <label htmlFor="agreeTerms">
              I agree to the terms and conditions
            </label>
          </div>

          {/* Submit */}
          <button type="submit" disabled={!isValid}>
            Register
          </button>
        </form>

        {/* Footer */}
        <div className="modal-footer">
          <p>
            Already have an account?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onSignInClick();
              }}
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
