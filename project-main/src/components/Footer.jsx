import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import leaf from "../assets/leaf.png";
import "../Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">

      {/* Column 1: Brand */}
      <div className="footer-col brand-col">
        <div className="brand">
          <img className="flogo" src={leaf} alt="Tridosha logo" />
          <h2 className="brand-title">Tridosha AI</h2>
        </div>
        <p className="brandpara">
          Combining 5,000 years of Ayurvedic wisdom with modern AI to provide personalized wellness guidance.
        </p>
      </div>

      {/* Column 2: Quick Links without ul/li */}
      <div className="footer-col links-col">
        <h3 className="links-heading">Quick Links</h3>
        <div className="quick-links">
          <Link className="footer-link" to="/">Home</Link>
          <Link className="footer-link" to="/learn">Learn Ayurveda</Link>
          <Link className="footer-link" to="/about">About Us</Link>
          <Link className="footer-link" to="/contact">Contact</Link>
        </div>
      </div>

      {/* Column 3: Contact */}
      <div className="footer-col contact-col">
        <h3 className="contact-heading">Contact</h3>
        <p className="ficon"><Mail size={17} /> support@Tridosha.ai</p>
        <p className="ficon"><Phone size={17} /> +1 (555) 123-4567</p>
        <p className="ficon"><MapPin size={17} /> 123 Wellness Street, Mindful City</p>
      </div>
    </div>

    <div className="footer-bottom">
      © 2025 Tridosha AI. All rights reserved. |
      <Link to="/privacy-policy"> Privacy Policy</Link> |
      <Link to="/cookies-policy"> Cookies Policy</Link>
    </div>
  </footer>
);

export default Footer;
