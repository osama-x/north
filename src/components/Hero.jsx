import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section style={styles.hero}>
      <div style={styles.badge}>
        <span style={styles.badgeNew}>New</span>
        <span style={styles.badgeText}>✨ Introducing AI Trip Planner</span>
      </div>

      <h1 style={styles.title}>
        <span style={styles.accentText}>Easily</span> plan & track your journeys locally
      </h1>

      <div style={styles.buttonGroup}>
        <button style={styles.primaryButton} onClick={() => navigate('/planner')}>Plan a Trip</button>
        <button style={styles.secondaryButton}>Live Road Status</button>
      </div>

      {/* Placeholder container for the dynamic/API parts, modeling Unsloth's dashboard preview area */}
      <div style={styles.dashboardPreview}>
        <div style={styles.mockPanel}>
           {/* Future API integration area */}
           <p style={{color: 'var(--text-tertiary)'}}>Interactive map and planner dashboard goes here...</p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '4rem 2rem',
    flex: 1,
    overflow: 'hidden', // ensuring it doesn't cause page scroll
  },
  badge: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f1f8f5', // Very light green tint
    borderRadius: '99px',
    padding: '0.25rem 1rem 0.25rem 0.25rem',
    marginBottom: '2rem',
  },
  badgeNew: {
    backgroundColor: '#fff',
    color: 'var(--text-primary)',
    fontWeight: '700',
    padding: '0.25rem 0.75rem',
    borderRadius: '99px',
    marginRight: '0.5rem',
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
  },
  badgeText: {
    fontWeight: '600',
    color: 'var(--text-primary)',
    fontSize: '0.9rem',
  },
  title: {
    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
    fontWeight: '800',
    textAlign: 'center',
    letterSpacing: '-0.04em',
    maxWidth: '900px',
    lineHeight: '1.1',
    marginBottom: '3rem',
    color: 'var(--text-primary)',
  },
  accentText: {
    color: 'var(--accent-teal)',
    fontStyle: 'italic', // Giving it that distinct look 
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '4rem',
  },
  primaryButton: {
    backgroundColor: 'var(--accent-dark)',
    color: '#fff',
    padding: '0.875rem 2rem',
    borderRadius: '99px',
    fontSize: '1.125rem',
    fontWeight: '600',
    transition: 'background-color 0.2s',
  },
  secondaryButton: {
    backgroundColor: 'var(--accent-teal)',
    color: '#fff',
    padding: '0.875rem 2rem',
    borderRadius: '99px',
    fontSize: '1.125rem',
    fontWeight: '600',
    transition: 'background-color 0.2s',
  },
  dashboardPreview: {
    width: '100%',
    maxWidth: '1200px',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  mockPanel: {
    width: '100%',
    backgroundColor: 'var(--bg-color)',
    borderRadius: '24px',
    border: '1px solid var(--border-light)',
    boxShadow: '0 10px 40px -10px rgba(0,0,0,0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    // Taking up remaining space without scrolling
    height: '100%', 
    minHeight: '300px'
  }
};

export default Hero;
