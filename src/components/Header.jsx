import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={styles.header} className="glass-header">
      <Link to="/" style={styles.logoLink} className="animate-slide-down delay-100">
        <img src={logo} alt="Northway.pk" style={styles.logoImage} />
      </Link>

      {/* Desktop Navigation */}
      <nav style={styles.nav} className="desktop-nav animate-slide-down delay-200">
        <Link to="/planner" className="nav-link-hover" style={styles.navLink}>AI Trip Planner</Link>
        <Link to="/" className="nav-link-hover" style={styles.navLink}>Updates & Alerts</Link>
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
          <Link to="/" onClick={() => setIsMenuOpen(false)} style={styles.mobileNavLink}>Updates & Alerts</Link>
          <Link to="/" onClick={() => setIsMenuOpen(false)} style={styles.mobileNavLink}>Stays</Link>
          <button className="btn-secondary-hover" style={styles.mobileLoginButton}>Login</button>
        </nav>
      </div>

      <div style={styles.actions} className="animate-slide-down delay-300">
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

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1.5rem 4rem',
    backgroundColor: 'var(--bg-color)',
    borderBottom: '1px solid var(--border-light)',
    height: '80px',
    flexShrink: 0,
    position: 'relative', // Support absolute centering of nav
  },
  logoLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  logoImage: {
    height: '45px',
    width: 'auto',
    display: 'block',
    transition: 'opacity 0.2s',
  },
  nav: {
    display: 'flex',
    gap: '2.5rem',
    alignItems: 'center',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  navLink: {
    fontSize: '1rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
    transition: 'color 0.2s',
  },
  navLinkHover: {
    color: 'var(--accent-teal)',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
  },
  loginButton: {
    padding: '0.5rem 1.25rem',
    backgroundColor: 'transparent',
    color: 'var(--text-primary)',
    fontWeight: '600',
    fontSize: '1rem',
    borderRadius: '99px',
    border: '1px solid var(--border-light)',
    transition: 'all 0.2s',
  },
  hamburger: {
    display: 'none', // Hidden by default, shown via CSS class on mobile
    flexDirection: 'column',
    gap: '5px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '5px',
    zIndex: 100,
  },
  burgerLine: {
    width: '25px',
    height: '2px',
    backgroundColor: 'var(--text-primary)',
    transition: 'all 0.3s',
  },
  mobileOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(255, 255, 255, 0.98)', // More solid to prevent background mix-up
    backdropFilter: 'blur(40px)', // High blur for premium look
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  closeButton: {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    fontSize: '2.5rem',
    background: 'none',
    border: 'none',
    color: 'var(--text-primary)',
    cursor: 'pointer',
    padding: '0.5rem',
    lineHeight: 1,
  },
  mobileNav: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3rem',
    width: '100%',
  },
  mobileNavLink: {
    fontSize: '1.75rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
    textDecoration: 'none',
    letterSpacing: '-0.02em',
    transition: 'color 0.2s',
  },
  mobileLoginButton: {
    padding: '1.25rem 3.5rem',
    backgroundColor: 'var(--accent-teal)',
    color: '#fff',
    fontWeight: '800',
    fontSize: '1.25rem',
    borderRadius: '99px',
    border: 'none',
    marginTop: '2rem',
    boxShadow: '0 10px 30px rgba(5, 150, 105, 0.3)',
  }
};

export default Header;

