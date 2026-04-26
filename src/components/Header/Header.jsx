import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { styles } from './Header.styles';

const Header = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={styles.header} className="glass-header">
      <Link to="/" style={styles.logoLink} className="animate-slide-down delay-100">
        <img src={logo} alt="Northway.pk" style={styles.logoImage} />
      </Link>

      {/* Desktop Navigation */}
      <nav style={styles.nav} className="desktop-nav animate-slide-down delay-200">
        <Link to="/planner" className="nav-link-hover" style={styles.navLink}>AI Trip Planner</Link>
        <Link to="/updates" className="nav-link-hover" style={styles.navLink}>Updates & Alerts</Link>
        <Link to="/" className="nav-link-hover" style={styles.navLink}>Stays</Link>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div style={{
        ...styles.mobileOverlay,
        transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
        opacity: isMenuOpen ? 1 : 0,
        pointerEvents: isMenuOpen ? 'all' : 'none'
      }}>
        <button 
          onClick={() => setIsMenuOpen(false)} 
          style={styles.closeButton}
        >
          ✕
        </button>
        <nav style={styles.mobileNav}>
          <Link to="/planner" onClick={() => setIsMenuOpen(false)} style={styles.mobileNavLink}>AI Trip Planner</Link>
          <Link to="/updates" onClick={() => setIsMenuOpen(false)} style={styles.mobileNavLink}>Updates & Alerts</Link>
          <Link to="/" onClick={() => setIsMenuOpen(false)} style={styles.mobileNavLink}>Stays</Link>
          {/* Dark Mode toggle disabled for now */}
          {/* 
          <button 
            onClick={() => { toggleDarkMode(); setIsMenuOpen(false); }} 
            style={styles.mobileThemeToggle}
          >
            {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
          */}
          <button className="btn-secondary-hover" style={styles.mobileLoginButton}>Login</button>
        </nav>
      </div>

      <div style={styles.actions} className="animate-slide-down delay-300">
        {/* Dark Mode toggle disabled for now */}
        {/*
        <button 
          onClick={toggleDarkMode} 
          className="desktop-nav hover-scale"
          style={styles.themeToggle}
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
        */}
        <button className="desktop-nav btn-secondary-hover" style={styles.loginButton}>Login</button>
        
        {/* Hamburger Icon */}
        <button 
          style={styles.hamburger} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="mobile-hamburger"
        >
          <div style={styles.burgerLine}></div>
          <div style={styles.burgerLine}></div>
          <div style={styles.burgerLine}></div>
        </button>
      </div>
    </header>
  );
};

export default Header;
