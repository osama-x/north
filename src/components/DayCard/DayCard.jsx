import React, { useState } from 'react';
import { styles } from './DayCard.styles';

const DayCard = ({ dayData, dateStr, dayOfWeek, onStaySelect, selectedStayType, className }) => {
  const [isOpen, setIsOpen] = useState(true);

  const headerDateSubtext = dateStr && dayOfWeek ? `${dateStr}, ${dayOfWeek}` : '';

  return (
    <div style={styles.cardContainer} className={`glass-card ${className || ''}`}>
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
            {dayData.timeline && dayData.timeline.map((item, index) => (
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

export default DayCard;
