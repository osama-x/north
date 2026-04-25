import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const allNews = [
  { id: 1, time: "2 hours ago", title: "Storms and Rainfall Prediction", description: "Expect heavy rainfall across the Galiyat region over the next 4 days. Please travel with caution. Landslides are possible on secondary routes.", icon: "⚠️" },
  { id: 2, time: "5 hours ago", title: "Naran Tourism Season Update", description: "Local authorities are preparing to open regular tourist routes in Naran starting May 15th. Hotels are beginning to take reservations.", icon: "📰" },
  { id: 3, time: "Yesterday", title: "Babusar Top Road Construction", description: "Maintenance work is underway on the Babusar pass to clear snow avalanches. Expected to open by mid-June.", icon: "🚧" },
  { id: 4, time: "2 days ago", title: "New Transport Hub in Skardu", description: "A new central bus and jeep terminal has been inaugurated to streamline tourist transport to Deosai and Shigar.", icon: "🚌" },
  { id: 5, time: "3 days ago", title: "Khunjerab Pass Reopens", description: "The Pak-China border at Khunjerab Pass is now open for trade and tourism after the winter closure.", icon: "🏔️" }
];

const allStatuses = [
  { id: 'naran', name: 'Naran', status: 'yellow', info: 'Partially open - Subject to weather. Kaghan valley is accessible.' },
  { id: 'babusar', name: 'Babusar Top', status: 'red', info: 'Closed for all traffic due to heavy snow.' },
  { id: 'batakundi', name: 'Batakundi', status: 'red', info: 'Road blocked by snow avalanches. Clearance in progress.' },
  { id: 'arangkel', name: 'Arang Kel', status: 'green', info: 'Fully accessible via Kel cable car and hike.' },
  { id: 'taobat', name: 'Taobat', status: 'red', info: 'Inaccessible - Heavy snowfall blocking the final 20km.' },
  { id: 'kalam', name: 'Kalam', status: 'green', info: 'Open and accessible. Weather is currently clear.' },
  { id: 'mahodand', name: 'Mahodand', status: 'red', info: 'Road closed past Ushu forest. Jeeps cannot pass.' },
  { id: 'skardu', name: 'Skardu', status: 'green', info: 'Flights operating normally. Jaglot-Skardu road is clear.' },
  { id: 'hunza', name: 'Hunza', status: 'green', info: 'Karakoram Highway is fully operational.' },
  { id: 'khunjerab', name: 'Khunjerab Pass', status: 'yellow', info: 'Open but expect delays and strict timing protocols.' },
];

const getStatusColor = (status) => {
  switch(status) {
    case 'green': return '#10b981';
    case 'yellow': return '#f59e0b';
    case 'red': return '#ef4444';
    default: return '#94a3b8';
  }
};

const getGlowColor = (status) => {
  switch(status) {
    case 'green': return 'rgba(16, 185, 129, 0.4)';
    case 'yellow': return 'rgba(245, 158, 11, 0.4)';
    case 'red': return 'rgba(239, 68, 68, 0.4)';
    default: return 'rgba(148, 163, 184, 0.4)';
  }
};

const UpdatesPage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('news');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab === 'status' || tab === 'news') {
      setActiveTab(tab);
    }
  }, [location]);

  return (
    <div style={styles.container} className="hero-section">
      <div style={styles.content}>
        
        <div style={styles.headerBox} className="animate-slide-down">
          <h1 style={styles.title}>Updates & Accessibility</h1>
          <p style={styles.tagline}>Stay informed before you travel</p>
        </div>

        {/* Custom Tabs */}
        <div style={styles.tabContainer} className="animate-slide-up delay-100">
          <div style={styles.tabTrack} className="glass-card">
            <button 
              style={{...styles.tabButton, ...(activeTab === 'news' ? styles.activeTab : {})}} 
              onClick={() => setActiveTab('news')}
            >
              📰 Latest News
            </button>
            <button 
              style={{...styles.tabButton, ...(activeTab === 'status' ? styles.activeTab : {})}} 
              onClick={() => setActiveTab('status')}
            >
              🗺️ Accessibility Status
            </button>
          </div>
        </div>

        <div style={styles.contentArea} className="animate-slide-up delay-200">
          {activeTab === 'news' && (
            <div style={styles.grid}>
              {allNews.map(item => (
                <div key={item.id} className="glass-card card-hover" style={styles.card}>
                  <div style={styles.cardIcon}>{item.icon}</div>
                  <div style={styles.cardContent}>
                    <div style={styles.cardHeader}>
                      <h4 style={styles.cardTitle}>{item.title}</h4>
                      <span style={styles.cardTime}>{item.time}</span>
                    </div>
                    <p style={styles.cardDesc}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'status' && (
            <div className="glass-card" style={styles.statusBox}>
              {allStatuses.map((dest, index) => (
                <div 
                  key={dest.id} 
                  style={{
                    ...styles.statusRow,
                    borderBottom: index === allStatuses.length - 1 ? 'none' : '1px solid rgba(0,0,0,0.05)'
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
          )}
        </div>

      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    position: 'relative',
    backgroundColor: 'transparent',
    width: '100%',
    padding: '3rem 0 5rem 0',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
    padding: '0 2rem',
  },
  headerBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: '3rem'
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '800',
    color: 'var(--text-primary)',
    marginBottom: '0.5rem',
    textShadow: '0 2px 10px rgba(255,255,255,0.7)',
  },
  tagline: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: 'var(--accent-teal)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em'
  },
  tabContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginBottom: '3rem',
  },
  tabTrack: {
    display: 'flex',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: '99px',
    padding: '0.5rem',
    gap: '0.5rem',
  },
  tabButton: {
    padding: '1rem 2rem',
    borderRadius: '99px',
    fontSize: '1.05rem',
    fontWeight: '700',
    color: 'var(--text-secondary)',
    backgroundColor: 'transparent',
    transition: 'all 0.3s ease',
  },
  activeTab: {
    backgroundColor: '#fff',
    color: 'var(--accent-teal)',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
  },
  contentArea: {
    width: '100%',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
    gap: '2rem',
    width: '100%',
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '1.5rem 2rem',
    borderRadius: '24px',
    gap: '1.5rem',
  },
  cardIcon: {
    fontSize: '2rem',
    lineHeight: '1',
    paddingTop: '0.2rem',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: '0.5rem',
  },
  cardTitle: {
    fontSize: '1.15rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
  },
  cardTime: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: 'var(--accent-teal)',
    whiteSpace: 'nowrap',
    marginLeft: '1rem',
  },
  cardDesc: {
    fontSize: '1rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
  },
  statusBox: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '24px',
    padding: '1rem 2rem',
    maxWidth: '900px',
    margin: '0 auto',
  },
  statusRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 0',
  },
  statusLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  statusIndicator: {
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    flexShrink: 0,
  },
  destName: {
    fontSize: '1.15rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
    minWidth: '150px',
  },
  destInfo: {
    fontSize: '1rem',
    fontWeight: '600',
    textAlign: 'right',
  }
};

export default UpdatesPage;
