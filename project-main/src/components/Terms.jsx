import React, { useEffect, useState } from 'react';
import { ArrowLeft, Leaf, Shield, Scale, Eye, Clock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../Terms.css';

const TermsAndConditions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { icon: <Scale className="terms-section-icon" />,
      title: "Acceptance of Terms",
      content: `By accessing and using the Ayurveda AI Guide website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.`
    },
    {icon: <Leaf className="terms-section-icon" />,
      title: "Nature of Service",
      content: `Our Ayurveda AI Guide provides educational information about Ayurvedic principles, practices, and lifestyle recommendations. The AI-generated content is based on traditional Ayurvedic knowledge and is intended for informational purposes only. This service does not replace professional medical advice, diagnosis, or treatment.`
    },
    {icon: <Shield className="terms-section-icon" />,
      title: "Medical Disclaimer",
      content: `The information provided by our AI guide is not intended to diagnose, treat, cure, or prevent any disease. Always consult with qualified healthcare professionals before making any changes to your health regimen. Individual results may vary, and what works for one person may not work for another.`
    },
    {icon: <Eye className="terms-section-icon" />,
      title: "Privacy and Data Protection",
      content: `We are committed to protecting your privacy. Personal information shared with our AI guide is processed securely and used solely to provide personalized Ayurvedic recommendations. We do not sell, share, or distribute your personal data to third parties without your explicit consent.`
    },
    {icon: <Globe className="terms-section-icon" />,
      title: "Intellectual Property",
      content: `All content, including but not limited to text, graphics, logos, and AI-generated recommendations, is the property of Ayurveda AI Guide or its licensors. Users may not reproduce, distribute, or create derivative works without written permission.`
    },
    {      icon: <Clock className="terms-section-icon" />,
      title: "Service Availability",
      content: `While we strive to maintain continuous service availability, we do not guarantee uninterrupted access to our platform. We reserve the right to modify, suspend, or discontinue any aspect of our service with reasonable notice to users.`
    }
  ];

  return (
  <div className="terms-container">
      {/* Header */}
      <header className="terms-header">
        <div className="terms-header-content">
          <div className="terms-header-nav">
            <Link to="/" className="terms-back-link">
              <ArrowLeft className="icon" style={{width: '1.25rem', height: '1.25rem'}} />
              <span>Back to Home</span>
            </Link>
            <div className="terms-logo">
              <Leaf className="terms-logo-icon" />
              <span className="terms-logo-text">Ayurveda AI Guide</span>
            </div>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="terms-hero">
        <div className="terms-hero-content">
          <div className={`terms-hero-animate ${!isVisible ? 'hidden' : ''}`}>
            <h1 className="terms-title">
              Terms & Conditions
            </h1>
            <p className="terms-subtitle">
              Understanding our commitment to providing safe, educational Ayurvedic guidance
            </p>
            <div className="terms-divider"></div>
          </div>
        </div>
      </section>
      {/* Last Updated */}
      <section className="terms-last-updated">
        <div className="terms-last-updated-content">
          <div className="terms-last-updated-box">
            <div className="terms-last-updated-flex">
              <Clock className="terms-last-updated-icon" />
              <span className="terms-last-updated-text">Last Updated: January 17, 2025</span>
            </div>
          </div>
        </div>
      </section>
      {/* Terms Sections */}
      <section className="terms-sections">
        <div className="terms-sections-content">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`terms-section ${!isVisible ? 'hidden' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
            <div className="terms-section-flex">
                <div className="terms-section-icon-container">
                  {section.icon}
                </div>
                <div className="terms-section-content">
                  <h3 className="terms-section-title">
                    {section.title}
                  </h3>
                                 <p className="terms-section-text">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Additional Terms */}
          <div className="terms-additional">
            <h3 className="terms-additional-title">Additional Important Terms</h3>
            <div className="terms-additional-content">
              <div className="terms-additional-subsection">
                <h4>User Responsibilities</h4>
                <p>Users are responsible for providing accurate information and using the service in accordance with these terms. Misuse of the platform or providing false information may result in service termination.</p>
              </div>
              <div className="terms-additional-subsection">
                <h4>Limitation of Liability</h4>
                <p>Ayurveda AI Guide shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our service. Our liability is limited to the maximum extent permitted by law.</p>
              </div>
              <div className="terms-additional-subsection">
                <h4>Governing Law</h4>
                <p>These terms are governed by applicable local laws. Any disputes will be resolved through appropriate legal channels in the jurisdiction where our service is provided.</p>
              </div>
              <div className="terms-additional-subsection">
                <h4>Changes to Terms</h4>
                <p>We reserve the right to modify these terms at any time. Users will be notified of significant changes, and continued use of the service constitutes acceptance of updated terms.</p>
              </div>
            </div>
          </div>
          <div className="terms-contact">
            <h3 className="terms-contact-title">Questions About These Terms?</h3>
            <p className="terms-contact-text">
              If you have any questions or concerns about these Terms and Conditions, please don't hesitate to reach out to us.
            </p>
            <div className="terms-contact-buttons">
              <a 
                href="mailto:support@ayurvedaai.guide"
                className="terms-contact-button terms-contact-button-primary"
              >
                Contact Support
              </a>
              <Link 
                to="/"
                className="terms-contact-button terms-contact-button-secondary"
              >
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="terms-footer">
        <div className="terms-footer-content">
          <div className="terms-footer-logo">
            <Leaf className="terms-footer-logo-icon" />
            <span className="terms-footer-logo-text">Ayurveda AI Guide</span>
          </div>
          <p className="terms-footer-text">
            Bridging ancient wisdom with modern technology for holistic wellness
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TermsAndConditions;
