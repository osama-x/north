import React, { useState, useEffect } from 'react';

const AgenticLoader = ({ source, destination, onComplete }) => {
  const steps = [
    `Analyzing route from ${source || 'Origin'} to ${destination || 'Destination'}...`,
    "Calculating fuel costs for mountain terrain...",
    "Finding best hotel options for each stop...",
    "Optimizing daily schedule for sightseeing...",
    "Estimating food & activity expenses..."
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  useEffect(() => {
    if (currentStep < steps.length) {
      const timer = setTimeout(() => {
        setCompletedSteps(prev => [...prev, currentStep]);
        setCurrentStep(prev => prev + 1);
      }, 1500 + Math.random() * 1500); 
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, steps.length, onComplete]);

  return (
    <div style={styles.overlay}>
      <div style={styles.container} className="animate-scale-up">
        {/* Pulsing AI Icon */}
        <div style={styles.iconWrapper}>
          <div style={styles.pulseInner}></div>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={styles.sparkleIcon}>
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1-8.313-12.454z" />
            <path d="M12 3a7.5 7.5 0 0 0 7.92 12.446a9 9 0 0 0-8.313-12.454z" opacity="0.3" />
            <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
            {/* Custom Sparkle Icon based on the image */}
            <path d="M12 7v10M7 12h10" strokeWidth="2.5" />
            <circle cx="12" cy="12" r="3" fill="var(--accent-teal)" />
          </svg>
          {/* Simplified Sparkle SVG to match the image precisely */}
          <div style={styles.sparkleOuter}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L14.5 9.5L21 12L14.5 14.5L12 21L9.5 14.5L3 12L9.5 9.5L12 3Z" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 6L19 8L21 9L19 10L18 12L17 10L15 9L17 8L18 6Z" fill="#10B981"/>
            </svg>
          </div>
        </div>

        <h2 style={styles.title}>Crafting Your Itinerary</h2>
        <p style={styles.subtitle}>Our AI is planning the perfect trip for you</p>

        <div style={styles.stepsList}>
          {steps.map((step, index) => {
            const isCompleted = completedSteps.includes(index);
            const isActive = currentStep === index;
            
            return (
              <div key={index} style={{ ...styles.stepItem, opacity: isCompleted || isActive ? 1 : 0.3 }}>
                <div style={{ 
                  ...styles.statusIcon, 
                  backgroundColor: isCompleted ? 'var(--accent-teal)' : 'transparent',
                  borderColor: isCompleted ? 'var(--accent-teal)' : 'var(--text-tertiary)',
                  animation: isActive ? 'spin 2s linear infinite' : 'none'
                }}>
                  {isCompleted ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : isActive ? (
                    <div style={styles.loadingRing}></div>
                  ) : null}
                </div>
                <span style={{ 
                  ...styles.stepText, 
                  color: isCompleted ? 'var(--text-primary)' : isActive ? 'var(--text-primary)' : 'var(--text-tertiary)',
                  fontWeight: isActive ? '600' : '400'
                }}>
                  {step}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    animation: 'fadeIn 0.5s ease-out',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: '550px',
    width: '90%',
    padding: '3rem 2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(20px)',
    borderRadius: '24px',
    border: '1px solid var(--border-light)',
    boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.15)',
  },
  iconWrapper: {
    position: 'relative',
    width: '80px',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '2rem',
    backgroundColor: 'rgba(16, 185, 129, 0.08)',
    borderRadius: '50%',
  },
  sparkleOuter: {
    animation: 'pulse 2s infinite ease-in-out',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
    marginBottom: '0.5rem',
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontSize: '1rem',
    color: 'var(--text-secondary)',
    marginBottom: '3rem',
  },
  stepsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    width: '100%',
    alignItems: 'flex-start',
    paddingLeft: '2rem',
  },
  stepItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    transition: 'all 0.3s ease',
  },
  statusIcon: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    border: '2px solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: 'all 0.3s ease',
  },
  loadingRing: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    border: '2px solid var(--accent-teal)',
    borderTopColor: 'transparent',
    animation: 'spin 1s linear infinite',
  },
  stepText: {
    fontSize: '1rem',
    textAlign: 'left',
  }
};

export default AgenticLoader;
