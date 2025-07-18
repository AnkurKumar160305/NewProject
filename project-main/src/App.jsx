
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

// Pages
import LandingPage from "./components/LandingPage.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Learn from "./components/Learn.jsx";
import NameEntryPage from "./components/NameEntryPage.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Result from "./components/Result.jsx";
import Quiz from "./components/Quiz.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import CookiesPolicy from "./components/CookiesPolicy.jsx";
import Terms from "./components/Terms.jsx";

// Placeholder components for missing routes
const Chatbot = () => <div>Chatbot Page (Under Construction)</div>;
const PlanGenerator = () => <div>Plan Generator Page (Under Construction)</div>;

// Modals
import SignInModal from "./components/SignInModal.jsx";
import SignUpModal from "./components/SignUpModal.jsx";
import ResetPasswordPopup from "./components/ResetPasswordPopup.jsx";

function App() {
  const [activeModal, setActiveModal] = useState(null);

  const closeModals = () => setActiveModal(null);
  const onSignInClick = () => setActiveModal("signin");
  const onSignUpClick = () => setActiveModal("signup");
  const onForgotPasswordClick = () => setActiveModal("forgotPassword");

  return (
    <Router>
      <Header onSignInClick={onSignInClick} onSignUpClick={onSignUpClick} />
      <Routes>
        <Route path="/" element={<LandingPage onStartAssessmentClick={onSignInClick} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/name-entry" element={<NameEntryPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/plan-generator" element={<PlanGenerator />} />
      </Routes>
      <Footer />
      {activeModal === "signin" && (
        <SignInModal
          isOpen={true}
          onClose={closeModals}
          onSignUpClick={onSignUpClick}
          onForgotPasswordClick={onForgotPasswordClick}
        />
      )}
      {activeModal === "signup" && (
        <SignUpModal
          isOpen={true}
          onClose={closeModals}
          onSignInClick={onSignInClick}
        />
      )}
      {activeModal === "forgotPassword" && (
        <ResetPasswordPopup onClose={closeModals} />
      )}
    </Router>
  );
}

export default App;