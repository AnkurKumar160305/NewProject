import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import Header from "/src/components/Header.jsx";
import Footer from "/src/components/Footer.jsx";

// Pages
import LandingPage from "/src/components/LandingPage.jsx";
import About from "/src/components/About.jsx";
import Contact from "/src/components/Contact.jsx";
import Learn from "/src/components/Learn.jsx";
import NameEntryPage from "/src/components/NameEntryPage.jsx";
import Dashboard from "/src/components/Dashboard.jsx";
import Result from "/src/components/Result.jsx";
import Quiz from "/src/components/Quiz.jsx";
import PrivacyPolicy from "/src/components/PrivacyPolicy.jsx";
import CookiesPolicy from "/src/components/CookiesPolicy.jsx";

// Modals
import SignInModal from "/src/components/SignInModal.jsx";
import SignUpModal from "/src/components/SignUpModal.jsx";
import ResetPasswordPopup from "/src/components/ResetPasswordPopup.jsx"; // ✅ Renamed

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
        <ResetPasswordPopup
          onClose={closeModals}
        />
      )}
    </Router>
  );
}

export default App;
