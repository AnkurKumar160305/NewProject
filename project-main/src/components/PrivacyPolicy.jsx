import React from "react";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";
import "../PrivacyPolicy.css"; // Import the custom CSS

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      <div className="privacy-header">
        <h1>Privacy Policy</h1>
        <p className="privacy-updated">Last updated: January 2025</p>
      </div>

      <div className="privacy-card">
        <section>
          <h2>Introduction</h2>
          <p>Welcome to Tridosha AI. We respect your privacy and are committed to protecting your personal data.</p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <p>We collect information you provide directly to us, such as:</p>
          <ul>
            <li>Account information (name, email address)</li>
            <li>Health and wellness data you share</li>
            <li>Dosha assessment responses</li>
            <li>Communication preferences</li>
            <li>Usage data and interaction patterns</li>
          </ul>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <ul>
            <li>Provide personalized Ayurvedic wellness recommendations</li>
            <li>Improve our AI algorithms and services</li>
            <li>Send relevant health content</li>
            <li>Provide customer support</li>
            <li>Analyze user experience</li>
          </ul>
        </section>

        <section>
          <h2>Data Security</h2>
          <p>We implement appropriate technical and organizational security measures to protect your data.</p>
        </section>

        <section>
          <h2>Data Sharing</h2>
          <ul>
            <li>To provide services you’ve requested</li>
            <li>When required by law</li>
            <li>To protect our legal rights</li>
          </ul>
        </section>

        <section>
          <h2>Your Rights</h2>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Delete your account</li>
            <li>Export your data</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>

        <section>
          <h2>Cookies and Tracking</h2>
          <p>
            We use cookies to enhance your experience. See our{" "}
            <Link to="/cookies-policy">Cookie Policy</Link>.
          </p>
        </section>

        <section>
          <h2>Changes to This Policy</h2>
          <p>We may update this privacy policy occasionally. If we do, we’ll update the “Last updated” date above.</p>
        </section>

        <section className="privacy-contact">
          <h3>Contact Us</h3>
          <p>If you have any questions:</p>
          <p>
            Email: <a href="mailto:privacy@Tridosha.ai">privacy@Tridosha.ai</a><br />
            Phone: +1 (555) 123-4567
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
