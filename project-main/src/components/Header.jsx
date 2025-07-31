import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Leaf } from "lucide-react";
import "../Header.css";

const Header = ({ onSignInClick, onSignUpClick }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <header className="site-headermain">
      <div className="logo-sectionmain">
        <div className="logomain">
          <Leaf color="#f97316" size={30} strokeWidth={2.5} />
        </div>

        <h1 className="site-titlemain">Tridosha AI</h1>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        {!isAuthenticated ? (
          <>
            <button onClick={onSignInClick}>Sign In</button>
            <button onClick={onSignUpClick}>Sign Up</button>
          </>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
      </nav>
    </header>
  );
};

export default Header;
