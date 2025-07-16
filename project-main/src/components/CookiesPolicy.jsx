import React from "react";
import "../CookiesPolicy.css";

const CookiePolicy = () => {
  return ( // Removed the wrapping React.Fragment
    <div className="min-h-screen font-[Inter] bg-gradient-to-br from-[#fef7ed] via-[#fef3c7] to-[#fefce8] text-gray-800">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 pb-8 border-b-2 border-orange-600">
          <div className="flex justify-center items-center gap-1 mb-4">
            <img src="/images/leaf.png" alt="Tridosha Logo" className="w-15 h-15" />
            <span className="text-3xl font-bold text-orange-600">Tridosha AI</span>
          </div>
          <h1 className="text-4xl font-bold">Cookies Policy</h1>
          <p className="text-gray-500 text-sm mt-2">Last updated: January 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-8">
          <Section title="What Are Cookies">
            <p>
              Cookies are small data files that are placed on your computer or mobile device
              when you visit a website. Cookies are widely used by website owners to make their
              websites work, or to work more efficiently, as well as to provide reporting
              information.
            </p>
          </Section>

          <Section title="How We Use Cookies">
            <p>Tridosha AI uses cookies to enhance your experience on our platform. We use cookies to:</p>
            <ul className="list-disc pl-6">
              <li>Remember your preferences and personalization settings</li>
              <li>Analyze how you use our website to improve functionality</li>
              <li>Provide personalized Ayurvedic recommendations</li>
              <li>Ensure security and prevent fraud</li>
              <li>Remember your login status</li>
            </ul>
          </Section>

          <Section title="Types of Cookies We Use">
            <Subsection title="Essential Cookies" />
            <p>
              These cookies are necessary for the website to function properly. They enable core
              functionality such as security, network management, and accessibility.
            </p>
            <CookieTable
              cookies={[
                { name: "session_id", purpose: "Maintains your login session", duration: "Session" },
                { name: "csrf_token", purpose: "Security protection", duration: "Session" },
                { name: "preferences", purpose: "Stores your app preferences", duration: "1 year" },
              ]}
            />

            <Subsection title="Analytics Cookies" />
            <p>
              These cookies help us understand how visitors interact with our website by collecting
              and reporting information anonymously.
            </p>
            <CookieTable
              cookies={[
                { name: "_ga", purpose: "Google Analytics - distinguishes users", duration: "2 years" },
                { name: "_ga_*", purpose: "Google Analytics - session state", duration: "2 years" },
                { name: "usage_stats", purpose: "Track feature usage patterns", duration: "30 days" },
              ]}
            />

            <Subsection title="Functional Cookies" />
            <p>
              These cookies enable enhanced functionality and personalization, such as remembering
              your Dosha type and wellness preferences.
            </p>
            <CookieTable
              cookies={[
                { name: "dosha_profile", purpose: "Remembers your Dosha assessment results", duration: "6 months" },
                { name: "wellness_prefs", purpose: "Stores your wellness preferences", duration: "1 year" },
                { name: "theme_mode", purpose: "Remembers your display preferences", duration: "1 year" },
              ]}
            />
          </Section>

          {/* Highlight Box */}
          <div className="bg-[#fef7ed] border border-[#fed7aa] rounded-lg p-6 my-6">
            <h3 className="text-orange-600 font-semibold text-lg mb-2">Managing Your Cookie Preferences</h3>
            <p>
              You can control and manage cookies in various ways. Most web browsers automatically
              accept cookies, but you can modify your browser settings to decline cookies if you
              prefer.
            </p>
            <p className="mt-2 font-medium">
              Note: Disabling certain cookies may impact the functionality of our website and limit your
              access to some features.
            </p>
          </div>

          <Section title="Third-Party Cookies">
            <p>We may also use third-party services that set cookies on your device. These include:</p>
            <ul className="list-disc pl-6">
              <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
              <li><strong>Authentication providers:</strong> For secure login functionality</li>
              <li><strong>CDN services:</strong> For faster content delivery</li>
            </ul>
          </Section>

          <Section title="How to Control Cookies">
            <p>You can control cookies through your browser settings. Here's how to manage cookies in popular browsers:</p>
            <ul className="list-disc pl-6">
              <li><strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data</li>
              <li><strong>Firefox:</strong> Settings &gt; Privacy & Security &gt; Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data</li>
              <li><strong>Edge:</strong> Settings &gt; Cookies and site permissions &gt; Cookies and site data</li>
            </ul>
          </Section>

          <Section title="Updates to This Policy">
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices or for
              other operational, legal, or regulatory reasons. Please revisit this page regularly to stay
              informed about our use of cookies.
            </p>
          </Section>

          {/* Contact Info */}
          <div className="contact-info bg-[#fef7ed] border border-[#fed7aa] rounded-lg p-6 mt-10">
            <h3 className="text-orange-600 font-semibold text-lg mb-2">Contact Us</h3>
            <p>
              If you have any questions about our Cookie Policy, please contact us at:
            </p>
            <p className="mt-2">
              Email: privacy@Tridosha.ai<br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>

        {/* Back Link */}
        <a
          href="/landing page.html"
          className="inline-flex items-center gap-2 text-orange-600 border-2 border-orange-600 rounded-lg px-6 py-3 hover:bg-orange-600 hover:text-white transition-colors"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </a>

        {/* Footer */}
        <footer className="text-center text-gray-500 mt-12 pt-8 border-t border-gray-200">
          &copy; 2025 Tridosha AI. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

// Reusable Components
const Section = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold border-b border-gray-200 pb-2 mb-4">{title}</h2>
    {children}
  </section>
);

const Subsection = ({ title }) => (
  <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">{title}</h3>
);

const CookieTable = ({ cookies }) => (
  <table className="w-full border border-collapse my-4 text-sm">
    <thead className="bg-gray-50 text-gray-700 font-semibold">
      <tr>
        <th className="border px-4 py-2 text-left">Cookie Name</th>
        <th className="border px-4 py-2 text-left">Purpose</th>
        <th className="border px-4 py-2 text-left">Duration</th>
      </tr>
    </thead>
    <tbody>
      {cookies.map((cookie, idx) => (
        <tr key={idx} className="text-gray-600">
          <td className="border px-4 py-2">{cookie.name}</td>
          <td className="border px-4 py-2">{cookie.purpose}</td>
          <td className="border px-4 py-2">{cookie.duration}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default CookiePolicy;
