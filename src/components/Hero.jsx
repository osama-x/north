import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import hunzaImg from '../assets/hunza.png';
import skarduImg from '../assets/skardu.png';
import naranImg from '../assets/naran.png';
import nathiaImg from '../assets/nathia_gali.png';
import kalamImg from '../assets/kalam.png';
import neelumImg from '../assets/neelum.png';
import UpdatesAndAlerts from './UpdatesAndAlerts';

const taglines = [
  { prefix: "", accent: "Effortlessly", suffix: " plan your perfect northern getaway" },
  { prefix: "Discover the ", accent: "Majestic", suffix: " beauty of the high peaks" },
  { prefix: "Experience ", accent: "Unparalleled", suffix: " serenity in every valley" },
  { prefix: "Create ", accent: "Everlasting", suffix: " memories in the North" }
];

const popularDestinations = [
  { id: 1, name: 'Hunza', tagline: 'The Valley of Immortals', image: hunzaImg },
  { id: 2, name: 'Skardu', tagline: 'Land of Giants', image: skarduImg },
  { id: 3, name: 'Naran', tagline: 'Alpine Serenity', image: naranImg },
  { id: 4, name: 'Nathia Gali', tagline: 'Misty Mountains', image: nathiaImg },
  { id: 5, name: 'Kalam', tagline: 'Pine Whispers', image: kalamImg },
  { id: 6, name: 'Neelum', tagline: 'Paradise on Earth', image: neelumImg },
];

const newsItems = [
  "Naran opens for tourism on May 15th",
  "Storms and rainfall prediction over the next 4 days",
  "Snowfall expected in Galiyat region this weekend",
  "Road updates: Babusar Top construction in progress"
];

const Hero = () => {
  const navigate = useNavigate();


  const [index, setIndex] = useState(0);
  const [fadeStatus, setFadeStatus] = useState('fade-in');
  const [newsIndex, setNewsIndex] = useState(0);
  const [newsFade, setNewsFade] = useState(true);

  useEffect(() => {
    const taglineTimer = setInterval(() => {
      setFadeStatus('fade-out');
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % taglines.length);
        setFadeStatus('fade-in');
      }, 500);
    }, 4000);

    const newsTimer = setInterval(() => {
      setNewsFade(false);
      setTimeout(() => {
        setNewsIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
        setNewsFade(true);
      }, 500);
    }, 5000);

    return () => {
      clearInterval(taglineTimer);
      clearInterval(newsTimer);
    };
  }, [taglines.length, newsItems.length]);

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


  return (
    <section style={styles.hero} className="hero-section">
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

        {/* News & Updates Section */}
        <div className="animate-slide-up delay-350" style={{ width: '100%' }}>
          <UpdatesAndAlerts />
        </div>

        {/* Popular Destinations Section */}
        <div style={styles.destinationsSection} className="animate-slide-up delay-400">
          <div style={{ paddingLeft: '1rem' }}>
            <h2 style={styles.sectionTitleCenter}>Popular Destinations</h2>
          </div>
          <div style={styles.destinationGrid} className="destination-grid">
            {popularDestinations.map(dest => (
              <div
                key={dest.id}
                className="glass-card card-hover"
                style={styles.destCard}
                onClick={() => navigate('/destination/' + dest.name.toLowerCase().replace(/\s+/g, '-'))}
              >
                <div style={styles.imageContainer}>
                  {dest.image ? (
                    <img src={dest.image} alt={dest.name} style={styles.destImage} />
                  ) : (
                    <div style={{
                      ...styles.destImage,
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(5, 150, 105, 0.05) 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}>
                      <span style={{ fontSize: '3.5rem', opacity: 0.3 }}>🏔️</span>
                      <span style={{
                        marginTop: '1rem',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        color: 'var(--accent-teal)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        opacity: 0.8
                      }}>Coming Soon</span>
                    </div>
                  )}
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
    position: 'relative',
    backgroundColor: 'transparent',
    width: '100%',
    padding: '2rem 0 5rem 0', // Added bottom padding for scroll
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 10,
    width: '100%',
    maxWidth: '1800px',
    padding: '0 2rem 2rem 2rem',
    position: 'relative',
    justifyContent: 'space-between',
    width: '100%',
  },
  topSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '1rem',
    marginBottom: '0',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', // More aggressive clamp for responsiveness
    fontWeight: '800',
    textAlign: 'center',
    letterSpacing: '-0.04em',
    maxWidth: '1200px', // Wider title allowed at 80% scale
    lineHeight: '1.05',
    marginBottom: '1.5rem',
    color: 'var(--text-primary)',
    textShadow: '0 2px 10px rgba(255,255,255,0.5)',
  },
  accentText: {
    color: 'var(--accent-teal)',
    fontStyle: 'italic',
  },
  taglineWrapper: {
    display: 'inline-block',
    minHeight: '1.2em',
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem',
    marginTop: '0.5rem',
  },
  primaryButton: {
    backgroundColor: 'var(--accent-teal)',
    color: '#fff',
    padding: '1.1rem 2.5rem',
    borderRadius: '99px',
    fontSize: '1.1rem',
    fontWeight: '700',
    border: '2px solid rgba(255, 255, 255, 0.9)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
  },
  destinationsSection: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: '0rem', // Reduce margin above to show data below
    width: '100%',
    maxWidth: '1750px',
  },
  sectionTitleCenter: {
    fontSize: '1.5rem', // Bigger size
    fontWeight: '800',
    color: 'var(--accent-teal)',
    backgroundColor: '#ffffff', // Pure white style pill
    backdropFilter: 'blur(12px)',
    padding: '0.8rem 2rem', // Increased padding
    borderRadius: '99px',
    marginBottom: '2rem',
    display: 'inline-block',
    border: '1px solid rgba(5, 150, 105, 0.2)', // Subtle green border
    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
  destinationGrid: {
    display: 'flex',
    flexWrap: 'wrap', // Allow wrapping for scrollable page
    gap: '2rem',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '1750px',
  },
  destCard: {
    flex: '1 1 350px',
    maxWidth: '500px',
    height: '460px',
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
    lineHeight: '1.1',
  },
  destTagline: {
    fontSize: '1rem',
    fontWeight: '600',
    color: 'var(--text-tertiary)',
    lineHeight: '1.1',
    marginTop: '0.3rem',
  },
  newsSection: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: '1rem 0',
  },
  newsPill: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.8rem 2.5rem',
    borderRadius: '99px',
    gap: '1.5rem',
    maxWidth: '900px',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    border: '1px solid rgba(255, 255, 255, 0.6)',
  },
  newsLabel: {
    fontSize: '0.85rem',
    fontWeight: '800',
    color: 'var(--accent-teal)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    whiteSpace: 'nowrap',
  },
  newsLine: {
    width: '1px',
    height: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  newsText: {
    fontSize: '1rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }
};

export default Hero;
