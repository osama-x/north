import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <Link to="/" style={styles.logoLink}>
        <div style={styles.logoContainer}>
          <div style={styles.logoIcon}>N</div>
          <span style={styles.logoText}>Northway.pk</span>
        </div>
      </Link>

      <nav style={styles.nav}>
        <Link to="/planner" style={styles.navLink}>AI Trip Planner</Link>
        <Link to="/" style={styles.navLink}>Updates & Alerts</Link>
        <Link to="/" style={styles.navLink}>Road Status</Link>
      </nav>

      <div style={styles.actions}>
        <button style={styles.loginButton}>Login</button>
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
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    cursor: 'pointer',
  },
  logoIcon: {
    width: '32px',
    height: '32px',
    backgroundColor: 'var(--accent-teal)',
    color: '#fff',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '800',
    fontSize: '1.25rem',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: '700',
    letterSpacing: '-0.03em',
    color: 'var(--text-primary)',
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

