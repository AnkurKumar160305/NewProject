import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../SignInUp.css";
import * as lucide from "lucide-react";

const SignUpModal = ({ isOpen, onClose, onSignInClick }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    terms: false,
  });
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
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
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

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

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Registration failed");
        setLoading(false);
        return;
      }

      // Save token and user info
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Navigate to Name Entry page
      navigate("/name-entry");
      onClose();
    } catch (err) {
      console.error("Registration error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignInRedirect = (e) => {
    e.preventDefault();
    onClose();
    onSignInClick();
  };

  const PasswordIcon = passwordVisible ? lucide.EyeOff : lucide.Eye;

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
          <div className="input-with-icon">
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              value={formData.username}
              onChange={handleInputChange}
            />
            <div className="input-icon">
              <lucide.User size={20} color="#666" />
            </div>
          </div>

          <div className="input-with-icon">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
            <div className="input-icon">
              <lucide.Mail size={20} color="#666" />
            </div>
          </div>

          <div className="password-container">
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              value={formData.password}
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

          {!isValid && formData.password.length > 0 && (
            <div className="password-error">
              Password must be 8+ characters, include uppercase, number, and symbol.
            </div>
          )}

          <div className="checkbox-container">
            <input
              type="checkbox"
              id="agreeTerms"
              name="terms"
              checked={formData.terms}
              onChange={handleInputChange}
            />
            <label htmlFor="agreeTerms" className="custom-checkbox-label">
              I agree to the terms and conditions
            </label>
          </div>

          <button type="submit" className="primary-button" disabled={!isValid || loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="modal-footer">
          <p>
            Already have an account?{" "}
            <a href="#" onClick={handleSignInRedirect}>
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
