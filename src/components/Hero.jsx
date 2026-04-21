import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import hunzaImg from '../assets/hunza.png';
import skarduImg from '../assets/skardu.png';
import naranImg from '../assets/naran.png';
import nathiaImg from '../assets/nathia_gali.png';
import kalamImg from '../assets/kalam.png';

const Hero = () => {
  const navigate = useNavigate();
  
  const taglines = [
    { prefix: "", accent: "Effortlessly", suffix: " plan your perfect northern getaway" },
    { prefix: "Discover the ", accent: "Majestic", suffix: " beauty of the high peaks" },
    { prefix: "Experience ", accent: "Unparalleled", suffix: " serenity in every valley" },
    { prefix: "Create ", accent: "Everlasting", suffix: " memories in the North" }
  ];

  const [index, setIndex] = useState(0);
  const [fadeStatus, setFadeStatus] = useState('fade-in');

  useEffect(() => {
    const timer = setInterval(() => {
      setFadeStatus('fade-out');
      
      // Wait for fade out to complete before changing text
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % taglines.length);
        setFadeStatus('fade-in');
      }, 500); // Duration of fade-out
      
    }, 4000); // Total time each headline stays visible

    return () => clearInterval(timer);
  }, [taglines.length]);

  const renderTagline = () => {
    const tagline = taglines[index];
    return (
      <span style={{
        ...styles.taglineWrapper,
        opacity: fadeStatus === 'fade-in' ? 1 : 0,
        transform: fadeStatus === 'fade-in' ? 'translateY(0)' : 'translateY(10px)',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        {tagline.prefix}
        <span style={styles.accentText}>{tagline.accent}</span>
        {tagline.suffix}
      </span>
    );
  };

  const popularDestinations = [
    { id: 1, name: 'Hunza', tagline: 'The Valley of Immortals', image: hunzaImg },
    { id: 2, name: 'Skardu', tagline: 'Land of Giants', image: skarduImg },
    { id: 3, name: 'Naran', tagline: 'Alpine Serenity', image: naranImg },
    { id: 4, name: 'Nathia Gali', tagline: 'Misty Mountains', image: nathiaImg },
    { id: 5, name: 'Kalam', tagline: 'Pine Whispers', image: kalamImg },
  ];

  return (
    <section style={styles.hero}>
      <div style={styles.content}>
        {/* Top Hero Section */}
        <div style={styles.topSection}>
          <h1 style={styles.title}>
            {renderTagline()}
          </h1>

          <div style={styles.buttonGroup} className="animate-slide-up delay-300">
            <button
              className="btn-primary-hover"
              style={styles.primaryButton}
              onClick={() => navigate('/planner')}
            >
              Plan your trip
            </button>
            <button
              className="btn-primary-hover"
              style={styles.primaryButton}
            >
              Find your next stay
            </button>
          </div>
        </div>

        {/* Popular Destinations Section */}
        <div style={styles.destinationsSection} className="animate-slide-up delay-400">
          <h2 style={styles.sectionTitleCenter}>Popular Destinations</h2>
          <div style={styles.destinationGrid}>
            {popularDestinations.map(dest => (
              <div key={dest.id} className="glass-card card-hover" style={styles.destCard}>
                <div style={styles.imageContainer}>
                  <img src={dest.image} alt={dest.name} style={styles.destImage} />
                </div>
                <div style={styles.textWrapper}>
                  <h3 style={styles.destName}>{dest.name}</h3>
                  <span style={styles.destTagline}>{dest.tagline}</span>
                </div>
              </div>
            ))}
          </div>
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
    flex: 1,
    overflow: 'hidden', // Enforce single view, no scroll
    position: 'relative',
    backgroundColor: 'transparent',
    width: '100%',
    paddingTop: '2rem',
    paddingBottom: '2rem', // Keep within screen bounds
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 10,
    width: '100%',
    maxWidth: '1600px',
    padding: '0 2rem',
    position: 'relative',
    height: '100%',
    justifyContent: 'center',
  },
  topSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '3rem',
    justifyContent: 'center'
  },
  title: {
    fontSize: 'clamp(3rem, 6vw, 4.5rem)',
    fontWeight: '800',
    textAlign: 'center',
    letterSpacing: '-0.04em',
    maxWidth: '900px',
    lineHeight: '1.05',
    marginBottom: '2rem',
    color: 'var(--text-primary)',
    textShadow: '0 2px 10px rgba(255,255,255,0.5)',
  },
  accentText: {
    color: 'var(--accent-teal)',
    fontStyle: 'italic',
  },
  taglineWrapper: {
    display: 'inline-block',
    minHeight: '1.2em', // Prevent layout shift
  },
  buttonGroup: {
    display: 'flex',
    gap: '1.5rem',
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
  destinationsSection: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  sectionTitleCenter: {
    fontSize: '1.25rem',
    fontWeight: '800',
    color: 'var(--accent-teal)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(12px)',
    padding: '0.75rem 2rem',
    borderRadius: '99px',
    marginBottom: '3rem',
    display: 'inline-block',
    border: '1px solid rgba(255, 255, 255, 0.5)',
    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
  destinationGrid: {
    display: 'flex',
    flexWrap: 'nowrap',
    gap: '2.5rem',
    justifyContent: 'center',
    width: '100%',
  },
  destCard: {
    flex: '1 1 0',
    minWidth: '280px',
    maxWidth: '400px',
    height: '420px',
    borderRadius: '32px',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
  },
  imageContainer: {
    width: '100%',
    flex: 1,
    borderRadius: '24px',
    marginBottom: '1.5rem',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  },
  destImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '60px',
  },
  destName: {
    fontSize: '1.75rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
    lineHeight: '1.2',
  },
  destTagline: {
    fontSize: '1rem',
    fontWeight: '600',
    color: 'var(--text-tertiary)',
    lineHeight: '1.2',
    marginTop: '0.25rem',
  }
};

export default Hero;
