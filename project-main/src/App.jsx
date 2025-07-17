import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout Components
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

function App() {
  const [activeModal, setActiveModal] = useState(null);

  // Modal togglers
  const closeModals = () => setActiveModal(null);
  const onSignInClick = () => setActiveModal("signin");
  const onSignUpClick = () => setActiveModal("signup");

  return (
    <Router>
      {/* Always visible Navbar */}
      <Header onSignInClick={onSignInClick} onSignUpClick={onSignUpClick} />

      {/* Main Routes */}
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

      {/* Always visible Footer */}
      <Footer />

      {/* Modals - only visible when triggered */}
      {activeModal === "signin" && (
        <SignInModal
          isOpen={true}
          onClose={closeModals}
          onSignUpClick={onSignUpClick} // ✅ required for "Sign Up" link
        />
      )}
      {activeModal === "signup" && (
        <SignUpModal
          isOpen={true}
          onClose={closeModals}
          onSignInClick={onSignInClick} // ✅ required for "Sign In" link
        />
      )}
    </Router>
  );
}

export default App;
