import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import leaf from "../assets/leaf.png";
import '../Footer.css';

const Footer = () => (
  <footer style={{ backgroundColor: "#2d3d2f", color: "white", padding: "3px 20px" }}>

    <div className="footer-content">
      <div className="footer-col">
        <div className="brand">
          <img className="flogo" src={leaf} alt="Tridosha logo" /> 
          <h2>Tridosha AI</h2>
        </div>
        <p className="brandpara">
          Combining 5,000 years of Ayurvedic wisdom with modern AI to
              provide personalized wellness guidance for optimal health and
              balance.
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
        <h3 className="con">Contact</h3>
        <p className="ficon"><Mail size={17} style={{ marginRight: "8px" }} /> support@Tridosha.ai</p>
        <p className="ficon"><Phone size={17} style={{ marginRight: "8px" }} /> +1 (555) 123-4567</p>
        <p className="ficon"><MapPin size={17} style={{ marginRight: "8px" }} /> 123 Wellness Street, Mindful City</p>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="footer-bottom">
      © 2025 Tridosha AI. All rights reserved. |
      <Link to="/privacy-policy"> Privacy Policy</Link> |
      <Link to="/terms"> Terms and Conditions</Link>|
      <Link to="/cookies-policy"> Cookies Policy</Link> 
    
    </div>
  </footer>
);

export default Footer;
