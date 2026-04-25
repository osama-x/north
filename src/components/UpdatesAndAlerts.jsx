import React from 'react';
import { Link } from 'react-router-dom';

const newsItems = [
  {
    id: 1,
    time: "2 hours ago",
    title: "Storms and Rainfall Prediction",
    description: "Expect heavy rainfall across the Galiyat region over the next 4 days. Please travel with caution.",
    icon: "⚠️"
  },
  {
    id: 2,
    time: "5 hours ago",
    title: "Naran Tourism Season Update",
    description: "Local authorities are preparing to open regular tourist routes in Naran starting May 15th.",
    icon: "📰"
  },
  {
    id: 3,
    time: "Yesterday",
    title: "Babusar Top Road Construction",
    description: "Maintenance work is underway on the Babusar pass to clear snow avalanches.",
    icon: "🚧"
  }
];

const destinationStatus = [
  { id: 'naran', name: 'Naran', status: 'yellow', info: 'Partially open - Subject to weather' },
  { id: 'babusar', name: 'Babusar Top', status: 'red', info: 'Closed for all traffic' },
  { id: 'arangkel', name: 'Arang Kel', status: 'green', info: 'Fully accessible' },
  { id: 'kalam', name: 'Kalam', status: 'green', info: 'Open and accessible' },
  { id: 'mahodand', name: 'Mahodand', status: 'red', info: 'Road closed past Ushu forest' },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'green': return '#10b981'; // Emerald 500
    case 'yellow': return '#f59e0b'; // Amber 500
    case 'red': return '#ef4444'; // Red 500
    default: return '#94a3b8'; // Slate 400
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

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
    gap: '4rem',
    width: '100%',
    maxWidth: '1600px',
    margin: '3rem 0 4rem 0', // Spacing below Top Section, above Destinations
    padding: '0 1rem',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: '800',
    color: 'var(--accent-teal)',
    backgroundColor: '#ffffff',
    padding: '0.6rem 1.75rem',
    borderRadius: '99px',
    border: '1px solid rgba(5, 150, 105, 0.2)',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },

  /* NEWS SECTION */
  newsCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  newsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  newsCard: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '1.25rem 1.5rem',
    borderRadius: '24px', // pill-like large rounded corners
    gap: '1rem',
  },
  newsIcon: {
    fontSize: '1.75rem',
    lineHeight: '1',
    paddingTop: '0.2rem',
  },
  newsContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  newsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: '0.4rem',
  },
  newsTitle: {
    fontSize: '1.05rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
  },
  newsTime: {
    fontSize: '0.8rem',
    fontWeight: '600',
    color: 'var(--accent-teal)',
    whiteSpace: 'nowrap',
    marginLeft: '1rem',
  },
  newsDesc: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.4',
  },

  /* STATUS SECTION */
  statusCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  statusBox: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '24px',
    padding: '0.5rem 1.5rem',
  },
  statusRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 0',
  },
  statusLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  statusIndicator: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    flexShrink: 0,
  },
  destName: {
    fontSize: '1.05rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
    minWidth: '120px',
  },
  destInfo: {
    fontSize: '0.9rem',
    fontWeight: '600',
    textAlign: 'right',
  },
  seeMoreLink: {
    display: 'inline-block',
    marginTop: '1.5rem',
    padding: '0.6rem 1.5rem',
    fontSize: '1rem',
    fontWeight: '800',
    color: '#ffffff',
    backgroundColor: 'var(--accent-teal)',
    borderRadius: '99px',
    textDecoration: 'none',
    boxShadow: '0 10px 20px rgba(5, 150, 105, 0.2)',
    transition: 'all 0.3s ease',
  }
};

export default UpdatesAndAlerts;
