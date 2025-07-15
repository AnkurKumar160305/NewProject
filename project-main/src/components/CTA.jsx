import React from "react";
import { Link } from "react-router-dom";

const CTA = () => (
  <section className="cta">
    <h3>Ready to Transform Your Wellness?</h3>
    <p>
      Join thousands who have discovered balance through personalized Ayurvedic guidance.
    </p>
    <Link to="/dashboard" className="btn orange" role="button">
      Go to My Wellness Dashboard
    </Link>
  </section>
);

export default CTA;
