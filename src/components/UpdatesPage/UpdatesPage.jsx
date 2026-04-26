import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchUpdatesPageData } from './UpdatesPageService';
import { styles } from './UpdatesPage.styles';

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
  const [allNews, setAllNews] = useState([]);
  const [allStatuses, setAllStatuses] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab === 'status' || tab === 'news') {
      setActiveTab(tab);
    }
  }, [location]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchUpdatesPageData();
      setAllNews(data.allNews || []);
      setAllStatuses(data.allStatuses || []);
    };
    loadData();
  }, []);

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

export default UpdatesPage;
