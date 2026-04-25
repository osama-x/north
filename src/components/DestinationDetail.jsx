import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import hunzaImg from '../assets/hunza.png';
import skarduImg from '../assets/skardu.png';
import naranImg from '../assets/naran.png';
import nathiaImg from '../assets/nathia_gali.png';
import kalamImg from '../assets/kalam.png';

// Mock Data
const destinationsData = {
  'hunza': {
    name: 'Hunza Valley',
    tagline: 'The Valley of Immortals',
    image: hunzaImg,
    summary: 'Hunza is a mountainous valley in the Gilgit-Baltistan region. Known for its breathtaking scenery of the surrounding mountains like Rakaposhi, and the hospitality of its people. A premium destination for any explorer seeking serenity.',
    updates: ["Karakoram Highway is fully open for tourists", "Cherry blossom season starts next week", "New luxury glamping site opened at Attabad Lake"],
    activities: [
      { id: 1, title: 'Attabad Lake Boating', type: 'Adventure', icon: '🚤' },
      { id: 2, title: 'Baltit Fort Tour', type: 'Heritage', icon: '🏰' },
      { id: 3, title: 'Eagle\'s Nest Sunset', type: 'Sightseeing', icon: '🌄' },
      { id: 4, title: 'Passu Cones Trek', type: 'Trekking', icon: '⛰️' },
    ],
    stays: [
      { id: 1, name: 'Luxus Hunza', rating: '4.9', price: 'from $120/night' },
      { id: 2, name: 'Darbar Hotel', rating: '4.7', price: 'from $80/night' },
      { id: 3, name: 'Eagle\'s Nest Hotel', rating: '4.8', price: 'from $95/night' },
    ]
  },
  'skardu': {
    name: 'Skardu',
    tagline: 'Land of Giants',
    image: skarduImg,
    summary: 'The gateway to the mighty Karakoram range. Skardu is famous for its vast cold deserts, high altitude serene lakes like Shangrila, and serving as the base camp for K2 expeditions.',
    updates: ["Skardu Airport now accepts daily international flights", "Deosai Plains road cleared for jeeps", "Annual Polo Festival dates announced"],
    activities: [
      { id: 1, title: 'Deosai Safari', type: 'Adventure', icon: '🚙' },
      { id: 2, title: 'Shangrila Resort Visit', type: 'Leisure', icon: '🛶' },
      { id: 3, title: 'Shigar Fort Exploring', type: 'Heritage', icon: '🏛️' },
      { id: 4, title: 'Cold Desert Camping', type: 'Camping', icon: '⛺' },
    ],
    stays: [
      { id: 1, name: 'Shangrila Resort', rating: '4.9', price: 'from $150/night' },
      { id: 2, name: 'Serena Shigar Fort', rating: '4.8', price: 'from $200/night' },
      { id: 3, name: 'Khoj Resort', rating: '4.6', price: 'from $110/night' },
    ]
  },
  'naran': {
    name: 'Naran',
    tagline: 'Alpine Serenity',
    image: naranImg,
    summary: 'Situated in the upper Kaghan Valley, Naran is lush green and famous for the pristine Saif-ul-Malook lake. It is a prime summer destination for families and adventure seekers alike.',
    updates: ["Babusar Top is accessible", "Trout fishing permits available", "New cafes opened along the Naran bypass"],
    activities: [
      { id: 1, title: 'Lake Saif-ul-Malook', type: 'Sightseeing', icon: '🏞️' },
      { id: 2, title: 'Rafting in Kunhar River', type: 'Sports', icon: '🚣' },
      { id: 3, title: 'Lulusar Lake Drive', type: 'Scenic', icon: '🚙' },
      { id: 4, title: 'Lalazar Trek', type: 'Trekking', icon: '🥾' },
    ],
    stays: [
      { id: 1, name: 'Swiss Wood Cottages', rating: '4.7', price: 'from $90/night' },
      { id: 2, name: 'Pine Park Edge Resort', rating: '4.5', price: 'from $70/night' },
      { id: 3, name: 'Arcadian Riverside', rating: '4.8', price: 'from $100/night' },
    ]
  },
  'nathia-gali': {
    name: 'Nathia Gali',
    tagline: 'Misty Mountains',
    image: nathiaImg,
    summary: 'A mountain resort town or hill station in the Abbottabad District. Known for its dense pine, cedar and oak forests, misty weather, and beautiful hiking tracks.',
    updates: ["Pipeline Track renovation completed", "Weekend snowfall expected", "Kala Mazar peak trail open"],
    activities: [
      { id: 1, title: 'Mushkpuri Trek', type: 'Hiking', icon: '🏔️' },
      { id: 2, title: 'Pipeline Track Walk', type: 'Leisure', icon: '🌲' },
      { id: 3, title: 'Miranjani Hike', type: 'Hiking', icon: '🥾' },
      { id: 4, title: 'Kala Mazar Viewpoint', type: 'Sightseeing', icon: '👀' },
    ],
    stays: [
      { id: 1, name: 'Alpine Hotel', rating: '4.6', price: 'from $85/night' },
      { id: 2, name: 'Elites Hotel', rating: '4.4', price: 'from $60/night' },
      { id: 3, name: 'Summer Retreat Hotel', rating: '4.7', price: 'from $100/night' },
    ]
  },
  'kalam': {
    name: 'Kalam',
    tagline: 'Pine Whispers',
    image: kalamImg,
    summary: 'Located in the Swat Valley, Kalam is known for its waterfalls, lakes, and meadows. It is a stunning natural paradise surrounded by lush green hills, thick forests and the Swat river.',
    updates: ["Ushu forest road maintained for standard cars", "Local trout festival on 20th", "Mahodand lake is partially frozen"],
    activities: [
      { id: 1, title: 'Mahodand Lake Jeep Ride', type: 'Adventure', icon: '🚙' },
      { id: 2, title: 'Ushu Forest Walk', type: 'Nature', icon: '🌲' },
      { id: 3, title: 'Kundol Lake Trek', type: 'Trekking', icon: '🥾' },
      { id: 4, title: 'Swat River Trout Fishing', type: 'Leisure', icon: '🎣' },
    ],
    stays: [
      { id: 1, name: 'Walnut Heights', rating: '4.8', price: 'from $110/night' },
      { id: 2, name: 'Greens Hotel', rating: '4.5', price: 'from $75/night' },
      { id: 3, name: 'Jungle Inn Resort', rating: '4.6', price: 'from $85/night' },
    ]
  },
  'neelum': {
    name: 'Neelum',
    tagline: 'Paradise on Earth',
    image: null,
    summary: 'Neelum Valley is a 144 km long bow-shaped thick forested region in Azad Kashmir. It is named after the Neelum river, known for its excellent scenic beauty, panoramic views, towering hills and pure alpine environment.',
    updates: ["Ratti Gali basecamp opened", "New hanging bridge installed in Kel", "Arang Kel trek safety upgrades"],
    activities: [
      { id: 1, title: 'Arang Kel Trek', type: 'Hiking', icon: '🧗' },
      { id: 2, title: 'Ratti Gali Lake', type: 'Sightseeing', icon: '🏞️' },
      { id: 3, title: 'Kutton Waterfall Visit', type: 'Nature', icon: '🌊' },
      { id: 4, title: 'Keran Border View', type: 'Heritage', icon: '🔭' },
    ],
    stays: [
      { id: 1, name: 'Green Village Resorts', rating: '4.5', price: 'from $65/night' },
      { id: 2, name: 'Neelum Star Safari', rating: '4.7', price: 'from $80/night' },
      { id: 3, name: 'Pine Park Sharda', rating: '4.6', price: 'from $70/night' },
    ]
  }
};

const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (id && destinationsData[id]) {
      setData(destinationsData[id]);
    } else {
      // If destination not found, fallback to something or show error
    }
  }, [id]);

  if (!data) return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.title}>Destination not found!</h2>
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
                {data.updates.map((update, idx) => (
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
              {data.activities.map((act) => (
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
              {data.stays.map((stay) => (
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


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    overflowY: 'auto',
    position: 'relative',
    backgroundColor: 'transparent',
    width: '100%',
    padding: '2rem 0',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
    padding: '0 2rem',
    position: 'relative',
    paddingBottom: '5rem',
  },
  topNav: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: '1rem'
  },
  iconBtn: {
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    border: '1px solid var(--accent-teal)',
    color: 'var(--text-primary)',
    padding: '0.6rem 1.5rem',
    borderRadius: '99px',
    fontWeight: '600',
    fontSize: '0.9rem',
  },
  backBtn: {
    backgroundColor: 'var(--accent-teal)',
    color: '#fff',
    padding: '1rem 2rem',
    borderRadius: '99px',
    fontSize: '1rem',
    fontWeight: '700',
    border: '2px solid rgba(255, 255, 255, 0.9)',
    marginTop: '2rem'
  },
  headerBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    marginBottom: '2.5rem'
  },
  title: {
    fontSize: 'clamp(3rem, 6vw, 4.5rem)',
    fontWeight: '800',
    letterSpacing: '-0.02em',
    color: 'var(--text-primary)',
    textShadow: '0 2px 10px rgba(255,255,255,0.7)',
    lineHeight: '1',
    marginBottom: '0.5rem'
  },
  tagline: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: 'var(--accent-teal)',
    marginBottom: '1.5rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15em'
  },
  summaryCard: {
    maxWidth: '800px',
    padding: '1.5rem 2.5rem',
    borderRadius: '24px',
  },
  summaryText: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: 'var(--text-secondary)',
    fontWeight: '500'
  },
  updatesSection: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '3rem'
  },
  newsPill: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.8rem 2rem',
    borderRadius: '99px',
    gap: '1.5rem',
    width: '100%',
    maxWidth: '900px',
  },
  newsLabel: {
    fontSize: '0.85rem',
    fontWeight: '800',
    color: 'var(--accent-teal)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
  newsLine: {
    width: '1px',
    height: '24px',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  marqueeContainer: {
    flex: 1,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    position: 'relative'
  },
  marqueeContent: {
    display: 'inline-block',
    animation: 'marquee 25s linear infinite',
    // Doubling content for seamless loop effect via CSS can be complex without duplicate render, 
    // so we keep it simple here.
    minWidth: '200%'
  },
  newsItem: {
    fontSize: '1rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
  },
  detailsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '3rem',
    width: '100%'
  },
  activitiesCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  staysCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  sectionHeader: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
    paddingLeft: '0.5rem',
    borderLeft: '4px solid var(--accent-teal)'
  },
  activitiesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  activityCard: {
    display: 'flex',
    alignItems: 'center',
    padding: '1.25rem',
    borderRadius: '20px',
    gap: '1.25rem'
  },
  activityIcon: {
    fontSize: '2.5rem',
    background: 'rgba(255,255,255,0.6)',
    width: '64px',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '16px'
  },
  activityInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  activityTitle: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: 'var(--text-primary)'
  },
  activityType: {
    fontSize: '0.85rem',
    color: 'var(--text-tertiary)',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginTop: '0.2rem'
  },
  staysList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  stayCard: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    borderRadius: '24px',
    padding: '1rem'
  },
  stayImagePlaceholder: {
    width: '100%',
    height: '140px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, rgba(5,150,105,0.2) 0%, rgba(14,165,233,0.1) 100%)',
    marginBottom: '1rem'
  },
  stayInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  stayTitle: {
    fontSize: '1.15rem',
    fontWeight: '700',
    color: 'var(--text-primary)'
  },
  stayRating: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: 'var(--text-secondary)',
    marginTop: '0.2rem'
  },
  stayPrice: {
    fontWeight: '800',
    color: 'var(--accent-teal)',
    fontSize: '1.1rem'
  }
};

export default DestinationDetail;
