import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header style={styles.header} className="glass-header">
      <Link to="/" style={styles.logoLink} className="animate-slide-down delay-100">
        <img src={logo} alt="Northway.pk" style={styles.logoImage} />
      </Link>

      <nav style={styles.nav} className="animate-slide-down delay-200">
        <Link to="/planner" className="nav-link-hover" style={styles.navLink}>AI Trip Planner</Link>
        <Link to="/" className="nav-link-hover" style={styles.navLink}>Updates & Alerts</Link>
        <Link to="/" className="nav-link-hover" style={styles.navLink}>Stays</Link>
      </nav>

      <div style={styles.actions} className="animate-slide-down delay-300">
        <button className="btn-secondary-hover" style={styles.loginButton}>Login</button>
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
  }
};

export default Header;

