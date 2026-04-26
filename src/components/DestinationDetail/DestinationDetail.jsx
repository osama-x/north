import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchDestinationData } from './DestinationDetailService';
import { styles } from './DestinationDetail.styles';

const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const destData = await fetchDestinationData(id);
      setData(destData);
    };
    if (id) loadData();
  }, [id]);

  if (!data) return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.title}>Destination not found or loading!</h2>
        <button className="btn-primary-hover" style={styles.backBtn} onClick={() => navigate('/')}>
          Go Back
        </button>
      </div>
    </div>
  );

  return (
    <section style={styles.container} className="hero-section">
      <div style={styles.content} className="animate-slide-up">
        
        {/* Back navigation */}
        <div style={styles.topNav}>
          <button style={styles.iconBtn} className="btn-secondary-hover" onClick={() => navigate('/')}>
            ← Back
          </button>
        </div>

        {/* Header Section */}
        <div style={styles.headerBox}>
          <h1 style={styles.title}>{data.name}</h1>
          <p style={styles.tagline}>{data.tagline}</p>
          <div style={styles.summaryCard} className="glass-card">
            <p style={styles.summaryText}>{data.summary}</p>
          </div>
        </div>

        {/* Updates Auto-scrolling Section */}
        <div style={styles.updatesSection}>
          <div style={styles.newsPill} className="glass-card">
            <span style={styles.newsLabel}>Latest</span>
            <div style={styles.newsLine}></div>
            <div style={styles.marqueeContainer}>
              <div style={styles.marqueeContent}>
                {data.updates && data.updates.map((update, idx) => (
                  <span key={idx} style={styles.newsItem}>• {update} &nbsp;&nbsp;&nbsp;&nbsp; </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Details Grid */}
        <div style={styles.detailsGrid}>
          
          {/* Activities */}
          <div style={styles.activitiesCol}>
            <h3 style={styles.sectionHeader}>Top Activities</h3>
            <div style={styles.activitiesList}>
              {data.activities && data.activities.map((act) => (
                <div key={act.id} className="glass-card card-hover" style={styles.activityCard}>
                  <div style={styles.activityIcon}>{act.icon}</div>
                  <div style={styles.activityInfo}>
                    <h4 style={styles.activityTitle}>{act.title}</h4>
                    <span style={styles.activityType}>{act.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stays */}
          <div style={styles.staysCol}>
            <h3 style={styles.sectionHeader}>Where to Stay</h3>
            <div style={styles.staysList}>
              {data.stays && data.stays.map((stay) => (
                <div key={stay.id} className="glass-card card-hover" style={styles.stayCard}>
                  {/* Placeholder for hotel image */}
                  <div style={styles.stayImagePlaceholder}></div>
                  <div style={styles.stayInfo}>
                    <div>
                      <h4 style={styles.stayTitle}>{stay.name}</h4>
                      <span style={styles.stayRating}>⭐ {stay.rating}</span>
                    </div>
                    <div style={styles.stayPrice}>{stay.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
};

// Custom keyframes injected inline.
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;
document.head.appendChild(styleSheet);

export default DestinationDetail;
