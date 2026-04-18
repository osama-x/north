import React, { useState } from 'react';

const DayCard = ({ dayData, dateStr, dayOfWeek, onStaySelect, selectedStayType }) => {
  const [isOpen, setIsOpen] = useState(true);

  // Format Date String
  const headerDateSubtext = dateStr && dayOfWeek ? `${dateStr}, ${dayOfWeek}` : '';

  return (
    <div style={styles.cardContainer}>
      {/* Header */}
      <div 
        style={styles.header} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div style={styles.headerLeft}>
          <div style={styles.dayNumberCircle}>{dayData.id}</div>
          <h2 style={styles.dayTitle}>{dayData.title}</h2>
        </div>
        
        <div style={styles.headerRight}>
          {headerDateSubtext && <div style={styles.dateSubtextRight}>{headerDateSubtext}</div>}
          <div style={styles.chevron}>
            <svg 
              width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </div>

      {/* Collapsible Content */}
      {isOpen && (
        <div style={styles.content}>
          {/* Timeline */}
          <div style={styles.timeline}>
            {dayData.timeline.map((item, index) => (
              <div key={index} style={styles.timelineItem}>
                <div style={styles.timelineDot}></div>
                <div style={styles.timelineContent}>
                  <div style={styles.timeLineHeader}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px', color: 'var(--text-secondary)'}}>
                        <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span style={styles.timeText}>{item.time}</span>
                  </div>
                  <div style={styles.activityTitle}>{item.title}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Things to Do */}
          {dayData.thingsToDo && dayData.thingsToDo.length > 0 && (
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>THINGS TO DO</h3>
              <div style={styles.tagsContainer}>
                {dayData.thingsToDo.map((thing, idx) => (
                  <div key={idx} style={styles.tag}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-teal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{thing}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stay Choices */}
          {dayData.stays && dayData.stays.length > 0 && (
            <div style={styles.section}>
               <div style={styles.stayHeader}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px', color: 'var(--text-secondary)'}}>
                      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path>
                  </svg>
                  <h3 style={{...styles.sectionTitle, margin: 0}}>STAY CHOICES</h3>
               </div>
               
               <div style={styles.stayGrid}>
                 {dayData.stays.map((stay, idx) => {
                   const isSelected = selectedStayType === stay.type;
                   return (
                     <div 
                       key={idx} 
                       onClick={() => onStaySelect(dayData.id, stay.type, stay.price)}
                       className="card-hover"
                       style={{
                         ...styles.stayCard,
                         borderColor: isSelected ? 'var(--accent-teal)' : 'var(--border-light)',
                         backgroundColor: isSelected ? 'rgba(16, 185, 129, 0.05)' : '#fff'
                       }}>
                        <div style={styles.stayType}>{stay.type}</div>
                        <div style={styles.stayHotelName}>{stay.name || `${stay.type} Hotel`}</div>
                        <div style={styles.stayPrice}>
                           Rs{stay.price.toLocaleString()} <span style={styles.priceNight}>/night</span>
                        </div>
                     </div>
                   );
                 })}
               </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
};

const styles = {
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    border: '1px solid var(--border-light)',
    padding: '2rem',
    marginBottom: '1.5rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  dayNumberCircle: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'var(--accent-teal)',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.1rem',
    fontWeight: '700',
  },
  dayTitle: {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
    margin: 0,
    letterSpacing: '-0.02em',
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  dateSubtextRight: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    fontWeight: '600',
  },
  chevron: {
    color: 'var(--text-secondary)',
  },
  content: {
    marginTop: '2rem',
    paddingLeft: '1rem', // Align with timeline items
  },
  timeline: {
    position: 'relative',
    borderLeft: '2px solid var(--border-light)',
    paddingLeft: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  timelineItem: {
    position: 'relative',
  },
  timelineDot: {
    position: 'absolute',
    left: '-1.5rem',
    top: '0.25rem',
    transform: 'translateX(-50%)',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'var(--accent-teal)',
  },
  timelineContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  timeLineHeader: {
    display: 'flex',
    alignItems: 'center',
  },
  timeText: {
    fontSize: '0.85rem',
    fontWeight: '700',
    color: 'var(--accent-teal)',
  },
  activityTitle: {
    fontSize: '1rem',
    fontWeight: '500',
    color: 'var(--text-primary)',
  },
  section: {
    marginBottom: '2rem',
    paddingLeft: '1.5rem', // Match timeline indent visually
  },
  sectionTitle: {
    fontSize: '0.75rem',
    fontWeight: '800',
    color: 'var(--text-tertiary)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: '1rem',
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
  },
  tag: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    backgroundColor: 'var(--bg-light-gray)',
    borderRadius: '99px',
    fontSize: '0.85rem',
    fontWeight: '500',
    color: 'var(--text-secondary)',
  },
  stayHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  stayGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
  },
  stayCard: {
    border: '2px solid',
    borderRadius: '12px',
    padding: '1.25rem',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  stayType: {
    fontSize: '0.75rem',
    fontWeight: '800',
    color: 'var(--text-tertiary)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '0.5rem',
  },
  stayHotelName: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
    marginBottom: '0.75rem',
  },
  stayPrice: {
    fontSize: '1.2rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
  },
  priceNight: {
    fontSize: '0.8rem',
    fontWeight: '500',
    color: 'var(--text-secondary)',
  }
};

export default DayCard;
