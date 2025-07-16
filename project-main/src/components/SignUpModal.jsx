import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import '../SignUpModel.css';

const SignUpModal = ({ isOpen, onClose, onSignInClick }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({ username: "", email: "", password: "", terms: false });
  const [isValid, setIsValid] = useState(false);
  const modalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleEscape = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  useEffect(() => {
    const clickOutside = (e) => modalRef.current && !modalRef.current.contains(e.target) && onClose();
    document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  }, [onClose]);

  useEffect(() => { document.body.style.overflow = isOpen ? "hidden" : "auto"; }, [isOpen]);

  useEffect(() => {
    const { username, email, password, terms } = formData;
    const validPass = password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password) && /[^A-Za-z0-9]/.test(password);
    setIsValid(username && email && validPass && terms);
  }, [formData]);

  const togglePassword = () => setPasswordVisible((prev) => !prev);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up submitted:", formData);
    navigate("/name-entry");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay active">
      <div className="signup-modal" ref={modalRef}>
        <button className="close-btn" onClick={onClose} aria-label="Close modal">×</button>
        <h2>Create Account</h2>
        <form onSubmit={handleSignUpSubmit}>
          <div className="input-with-icon">
            <input type="text" name="username" placeholder="Username" required onChange={handleInputChange} />
          </div>
          <div className="input-with-icon">
            <input type="email" name="email" placeholder="Email" required onChange={handleInputChange} />
          </div>
          <div className="password-container">
            <input type={passwordVisible ? "text" : "password"} name="password" placeholder="Password" required onChange={handleInputChange} />
            <button type="button" className="toggle-password" onClick={togglePassword} aria-label="Toggle password visibility">
              {passwordVisible ? "Hide" : "Show"}
            </button>
          </div>
          {!isValid && formData.password && (
            <div className="password-error">
              Password must be 8+ characters, include uppercase, number, and symbol.
            </div>
          )}
          <div className="checkbox-container">
            <input type="checkbox" id="agreeTerms" name="terms" onChange={handleInputChange} />
            <label htmlFor="agreeTerms">I agree to the terms and conditions</label>
          </div>
          <button type="submit" disabled={!isValid} className="submit-btn">
            Register
          </button>
        </form>
        <div className="modal-footer">
          <p>Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); onSignInClick(); }}>Sign In</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
