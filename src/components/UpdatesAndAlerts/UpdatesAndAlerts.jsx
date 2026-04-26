import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchUpdatesAndAlerts } from './UpdatesAndAlertsService';
import { styles } from './UpdatesAndAlerts.styles';

const getStatusColor = (status) => {
  switch (status) {
    case 'green': return '#10b981'; 
    case 'yellow': return '#f59e0b'; 
    case 'red': return '#ef4444'; 
    default: return '#94a3b8'; 
  }
};

const getGlowColor = (status) => {
  switch (status) {
    case 'green': return 'rgba(16, 185, 129, 0.4)';
    case 'yellow': return 'rgba(245, 158, 11, 0.4)';
    case 'red': return 'rgba(239, 68, 68, 0.4)';
    default: return 'rgba(148, 163, 184, 0.4)';
  }
};

const UpdatesAndAlerts = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [destinationStatus, setDestinationStatus] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchUpdatesAndAlerts();
      setNewsItems(data.newsItems || []);
      setDestinationStatus(data.destinationStatus || []);
    };
    loadData();
  }, []);

  return (
    <div style={styles.container}>

      {/* Left Column: News */}
      <div style={styles.newsCol}>
        <div style={styles.header}>
          <h3 style={styles.title}>Latest Updates</h3>
        </div>
        <div style={styles.newsList}>
          {newsItems.map(item => (
            <div key={item.id} className="glass-card card-hover" style={styles.newsCard}>
              <div style={styles.newsIcon}>{item.icon}</div>
              <div style={styles.newsContent}>
                <div style={styles.newsHeader}>
                  <h4 style={styles.newsTitle}>{item.title}</h4>
                  <span style={styles.newsTime}>{item.time}</span>
                </div>
                <p style={styles.newsDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/updates?tab=news" style={{ ...styles.seeMoreLink, alignSelf: 'flex-start' }} className="btn-primary-hover">
          See more updates →
        </Link>
      </div>

      {/* Right Column: Accessibility Status */}
      <div style={styles.statusCol}>
        <div style={styles.header}>
          <h3 style={styles.title}>Accessibility Status</h3>
        </div>
        <div className="glass-card" style={styles.statusBox}>
          {destinationStatus.map((dest, index) => (
            <div
              key={dest.id}
              style={{
                ...styles.statusRow,
                borderBottom: index === destinationStatus.length - 1 ? 'none' : '1px solid rgba(0,0,0,0.05)'
              }}
            >
              <div style={styles.statusLeft}>
                <div
                  style={{
                    ...styles.statusIndicator,
                    backgroundColor: getStatusColor(dest.status),
                    boxShadow: `0 0 10px ${getGlowColor(dest.status)}`
                  }}
                ></div>
                <span style={styles.destName}>{dest.name}</span>
              </div>
              <span style={{
                ...styles.destInfo,
                color: dest.status === 'red' ? '#dc2626' :
                  dest.status === 'yellow' ? '#d97706' :
                    'var(--text-tertiary)'
              }}>
                {dest.info}
              </span>
            </div>
          ))}
        </div>
        <Link to="/updates?tab=status" style={{ ...styles.seeMoreLink, alignSelf: 'flex-end' }} className="btn-primary-hover">
          View full status map →
        </Link>
      </div>

    </div>
  );
};

export default UpdatesAndAlerts;
