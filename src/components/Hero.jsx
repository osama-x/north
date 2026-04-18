import React from 'react';
import { useNavigate } from 'react-router-dom';
import scene from '../assets/scene.png';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section style={styles.hero}>
      <div style={styles.content}>
        <div style={styles.badge}>
          <span style={styles.badgeNew}>AI Powered</span>
          <span style={styles.badgeText}>Discovering the Magnificent North of Pakistan</span>
        </div>

        <h1 style={styles.title}>
          <span style={styles.accentText}>Effortlessly</span> plan your perfect northern getaway
        </h1>

        <div style={styles.buttonGroup}>
          <button 
            className="btn-primary-hover"
            style={styles.primaryButton} 
            onClick={() => navigate('/planner')}
          >
            Start Planning
          </button>
          <button 
            className="btn-secondary-hover"
            style={styles.secondaryButton}
          >
            Check Road Status
          </button>
        </div>
      </div>

      <img src={scene} alt="Mountain Panorama" style={styles.sceneImage} />
    </section>
  );
};

const styles = {
  hero: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '2rem',
    flex: 1,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: 'transparent',
    minHeight: '600px', // Ensure enough space for content + image height
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 10,
    maxWidth: '1200px',
    padding: '0 2rem',
    position: 'relative',
  },
  badge: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(12px)',
    borderRadius: '99px',
    padding: '0.25rem 1rem 0.25rem 0.25rem',
    marginBottom: '2rem',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
  },
  badgeNew: {
    backgroundColor: 'var(--accent-teal)',
    color: '#fff',
    fontWeight: '700',
    padding: '0.25rem 0.75rem',
    borderRadius: '99px',
    marginRight: '0.5rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
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
    maxWidth: '1000px',
    lineHeight: '1.05',
    marginBottom: '3rem',
    color: 'var(--text-primary)',
    textShadow: '0 2px 10px rgba(255,255,255,0.5)',
  },
  accentText: {
    color: 'var(--accent-teal)',
    fontStyle: 'italic',
  },
  buttonGroup: {
    display: 'flex',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  primaryButton: {
    backgroundColor: 'var(--accent-teal)',
    color: '#fff',
    padding: '1.25rem 2.75rem',
    borderRadius: '99px',
    fontSize: '1.15rem',
    fontWeight: '700',
    border: '2px solid rgba(255, 255, 255, 0.9)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    border: 'none',
  },
  secondaryButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    color: 'var(--accent-teal)',
    border: '2px solid var(--accent-teal)',
    padding: '1.25rem 2.75rem',
    borderRadius: '99px',
    fontSize: '1.15rem',
    fontWeight: '700',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
  },
  sceneImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 'auto',
    display: 'block',
    zIndex: 1,
    objectFit: 'cover',
    pointerEvents: 'none',
  }
};

export default Hero;
