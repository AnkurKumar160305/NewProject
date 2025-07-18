import React from "react";
import "../CookiesPolicy.css";

const CookiePolicy = () => {
  return (
    <div className="Cookies">
      <div className="container">
        {/* Header */}
        <div className="cookie-header">
          <h1>Cookies Policy</h1>
          <p className="last-updated">Last updated: January 2025</p>
        </div>

        {/* Main Content */}
        <div className="cookie-card">
          <Section title="What Are Cookies">
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website...
            </p>
          </Section>

          <Section title="How We Use Cookies">
            <p>Tridosha AI uses cookies to enhance your experience on our platform. We use cookies to:</p>
            <ul>
              <li>Remember your preferences and personalization settings</li>
              <li>Analyze how you use our website to improve functionality</li>
              <li>Provide personalized Ayurvedic recommendations</li>
              <li>Ensure security and prevent fraud</li>
              <li>Remember your login status</li>
            </ul>
          </Section>

          <Section title="Types of Cookies We Use">
            <Subsection title="Essential Cookies" />
            <p>These cookies are necessary for the website to function properly...</p>
            <CookieTable cookies={[
              { name: "session_id", purpose: "Maintains your login session", duration: "Session" },
              { name: "csrf_token", purpose: "Security protection", duration: "Session" },
              { name: "preferences", purpose: "Stores your app preferences", duration: "1 year" },
            ]} />

            <Subsection title="Analytics Cookies" />
            <p>These cookies help us understand how visitors interact with our website...</p>
            <CookieTable cookies={[
              { name: "_ga", purpose: "Google Analytics - distinguishes users", duration: "2 years" },
              { name: "_ga_*", purpose: "Google Analytics - session state", duration: "2 years" },
              { name: "usage_stats", purpose: "Track feature usage patterns", duration: "30 days" },
            ]} />

            <Subsection title="Functional Cookies" />
            <p>These cookies enable enhanced functionality and personalization...</p>
            <CookieTable cookies={[
              { name: "dosha_profile", purpose: "Remembers your Dosha assessment results", duration: "6 months" },
              { name: "wellness_prefs", purpose: "Stores your wellness preferences", duration: "1 year" },
              { name: "theme_mode", purpose: "Remembers your display preferences", duration: "1 year" },
            ]} />
          </Section>

          {/* Highlight Box */}
          <div className="cookie-box">
            <h3>Managing Your Cookie Preferences</h3>
            <p>You can control and manage cookies in various ways...</p>
            <p className="box-note">
              Note: Disabling certain cookies may impact the functionality of our website...
            </p>
          </div>

          <Section title="Third-Party Cookies">
            <p>We may also use third-party services that set cookies on your device...</p>
            <ul>
              <li><strong>Google Analytics:</strong> For website analytics</li>
              <li><strong>Authentication providers:</strong> For secure login</li>
              <li><strong>CDN services:</strong> For faster content delivery</li>
            </ul>
          </Section>

          <Section title="How to Control Cookies">
            <p>You can control cookies through your browser settings:</p>
            <ul>
              <li><strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data</li>
              <li><strong>Firefox:</strong> Settings &gt; Privacy & Security &gt; Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data</li>
              <li><strong>Edge:</strong> Settings &gt; Cookies and site permissions</li>
            </ul>
          </Section>

          <Section title="Updates to This Policy">
            <p>
              We may update this Cookie Policy from time to time. Please revisit this page regularly.
            </p>
          </Section>

          {/* Contact Info */}
          <div className="cookie-contact">
            <h3>Contact Us</h3>
            <p>If you have any questions:</p>
            <p>
              Email: privacy@Tridosha.ai<br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Components
const Section = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

const Subsection = ({ title }) => (
  <h3>{title}</h3>
);

const CookieTable = ({ cookies }) => (
  <table>
    <thead>
      <tr>
        <th>Cookie Name</th>
        <th>Purpose</th>
        <th>Duration</th>
      </tr>
    </thead>
    <tbody>
      {cookies.map((cookie, idx) => (
        <tr key={idx}>
          <td>{cookie.name}</td>
          <td>{cookie.purpose}</td>
          <td>{cookie.duration}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default CookiePolicy;
