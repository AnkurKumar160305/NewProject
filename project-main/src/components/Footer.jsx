import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react"; // ✅ lucide icons
import leaf from "../assets/leaf.png";
import '../Footer.css';

const Footer = () => (
  <footer>
    <div className="footer-content">
      {/* Logo and description */}
      <div>
        <h2>
          <img className="flogo" src={leaf} alt="Tridosha logo" /> Tridosha AI
        </h2>
        <p>
          Combining 5,000 years of Ayurvedic wisdom with modern AI for personalized wellness guidance.
        </p>
      </div>

      {/* Quick links */}
      <div>
        <h3>Quick Links</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/learn">Learn Ayurveda</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3>Contact</h3>
        <p><Mail size={16} style={{ marginRight: "8px" }} /> support@Tridosha.ai</p>
        <p><Phone size={16} style={{ marginRight: "8px" }} /> +1 (555) 123-4567</p>
        <p><MapPin size={16} style={{ marginRight: "8px" }} /> 123 Wellness Street, Mindful City</p>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="footer-bottom">
      © 2025 Tridosha AI. All rights reserved. |
      <Link to="/privacy-policy"> Privacy Policy</Link> |
      <Link to="/cookies-policy"> Cookies Policy</Link>
    </div>
  </footer>
);

export default Footer;
