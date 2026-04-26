import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UpdatesAndAlerts from '../UpdatesAndAlerts/UpdatesAndAlerts';
import { fetchHeroData } from './HeroService';
import { styles } from './Hero.styles';

const Hero = () => {
  const navigate = useNavigate();

  const [taglines, setTaglines] = useState([]);
  const [popularDestinations, setPopularDestinations] = useState([]);
  const [newsItems, setNewsItems] = useState([]);

  const [index, setIndex] = useState(0);
  const [fadeStatus, setFadeStatus] = useState('fade-in');
  const [newsIndex, setNewsIndex] = useState(0);
  const [newsFade, setNewsFade] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchHeroData();
      setTaglines(data.taglines || []);
      setPopularDestinations(data.destinations || []);
      setNewsItems(data.newsItems || []);
    };
    loadData();
  }, []);

  useEffect(() => {
    if (taglines.length === 0 || newsItems.length === 0) return;

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
    if (taglines.length === 0) return null;
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

export default Hero;
