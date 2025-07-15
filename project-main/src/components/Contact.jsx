import React, { useState, useEffect } from "react";
import "../Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = "0.2s";
          entry.target.classList.add("fade-in");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <div className="container">
      <div className="header-section fade-in">
        <h1>Get in Touch</h1>
        <p>
          Have questions about Ayurveda or need help with your wellness journey?
          <br />
          We're here to support you every step of the way.
        </p>
      </div>

      <div className="content-grid">
        <div className="contact-form fade-in">
          <h2>Send us a Message</h2>
          <p className="subtitle">Fill out the form below and we'll get back to you as soon as possible.</p>

          {success && <div className="success-message">Thank you for your message! We'll get back to you soon.</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group full-width">
              <label htmlFor="subject">Subject</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>
            <div className="form-group full-width">
              <label htmlFor="message">Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required />
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        <div className="contact-info fade-in">
          <h2>Contact Information</h2>
          <p className="subtitle">Reach out to us through any of these channels:</p>

          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div className="contact-details">
              <h3>Email</h3>
              <p>support@Tridosha.ai</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div className="contact-details">
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div className="contact-details">
              <h3>Address</h3>
              <p>123 Wellness Street<br />Mindful City, MC 12345</p>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-section fade-in">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-item">
          <div className="faq-question">How accurate are the AI recommendations?</div>
          <div className="faq-answer">
            Our AI is trained on traditional Ayurvedic texts and validated by certified practitioners.
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">Is this a replacement for medical care?</div>
          <div className="faq-answer">
            No, our platform provides wellness guidance and should complement, not replace, medical advice.
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">How do I get started?</div>
          <div className="faq-answer">
            Simply take our dosha assessment on the homepage for personalized recommendations.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;