import React from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import "../css/Header.css";
import { useDarkMode } from "./DarkModeContext";

const Header = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/" className="header-logo-link gradient-logo">Resuminator</Link>
      </div>
      <nav>
        <ul className="header-nav-list">
          <li><a href="#features" className="header-nav-link">Features</a></li>
          <li><a href="#opensource" className="header-nav-link">Open Source</a></li>
          <li><a href="#sponsor" className="header-nav-link">Sponsor</a></li>
          <li><a href="#about" className="header-nav-link">About Us</a></li>
        </ul>
      </nav>
      <div className="header-actions">
        <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {isDarkMode ? <FaSun size={22} /> : <FaMoon size={22} />}
        </button>
        <Link to="/login">
          <button className="header-login-btn">Log in</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
