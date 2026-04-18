import React, { useState } from 'react';

const ItineraryFooter = ({ costs, isAtBottom }) => {
  const [manualToggle, setManualToggle] = useState(false);

  // Expanded if manually toggled OR if user reached the bottom of the page
  const expanded = manualToggle || isAtBottom;

  // SVG Icons
  const icons = {
    hotel: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>,
    car: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>,
    food: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>,
    mountain: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>,
    wallet: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#064E3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path><path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path><path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path></svg>
  };

  return (
    <>
      <div style={{ height: expanded ? '380px' : '90px' }}></div>
      
      <div style={styles.footerWrapper}>
        <div style={expanded ? styles.footerContainerExpanded : styles.footerContainerCompact}>
          
          {expanded ? (
            <div style={styles.expandedContent}>
              <div style={styles.summaryHeader}>
                {icons.wallet}
                <h3 style={styles.summaryTitle}>Cost Summary</h3>
              </div>
              
              <div style={styles.grid}>
                <div style={styles.costCard}>
                   <div style={styles.iconBoxTop}>{icons.hotel}</div>
                   <div style={styles.costLabelCard}>Accommodation</div>
                   <div style={styles.costValueCard}>Rs{costs.accommodation.toLocaleString()}</div>
                </div>
                <div style={styles.costCard}>
                   <div style={styles.iconBoxTop}>{icons.car}</div>
                   <div style={styles.costLabelCard}>Fuel & Tolls</div>
                   <div style={styles.costValueCard}>Rs{costs.fuelTolls.toLocaleString()}</div>
                </div>
                <div style={styles.costCard}>
                   <div style={styles.iconBoxTop}>{icons.food}</div>
                   <div style={styles.costLabelCard}>Food & Misc</div>
                   <div style={styles.costValueCard}>Rs{costs.foodMisc.toLocaleString()}</div>
                </div>
                <div style={styles.costCard}>
                   <div style={styles.iconBoxTop}>{icons.mountain}</div>
                   <div style={styles.costLabelCard}>Jeep & Activities</div>
                   <div style={styles.costValueCard}>Rs{costs.jeepActivities.toLocaleString()}</div>
                </div>
              </div>

              <div style={styles.expandedDivider}></div>

              <div style={styles.expandedTotalRow}>
                <div style={styles.expandedTotalLabel}>Estimated Total</div>
                <div style={styles.expandedTotalValue}>Rs{costs.total.toLocaleString()}</div>
              </div>

              <button onClick={() => setManualToggle(false)} style={styles.toggleBtnAbsolute}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
            </div>
          ) : (
            <div style={styles.compactBar}>
              <div style={styles.compactLeft}>
                <div style={styles.miniItem}>
                   <div style={styles.miniIcon}>{icons.hotel}</div>
                   <div>
                     <div style={styles.miniLabel}>Accommodation</div>
                     <div style={styles.miniValue}>Rs{costs.accommodation.toLocaleString()}</div>
                   </div>
                </div>
                <div style={styles.miniItem}>
                   <div style={styles.miniIcon}>{icons.car}</div>
                   <div>
                     <div style={styles.miniLabel}>Fuel & Tolls</div>
                     <div style={styles.miniValue}>Rs{costs.fuelTolls.toLocaleString()}</div>
                   </div>
                </div>
                 <div style={styles.miniItem}>
                   <div style={styles.miniIcon}>{icons.food}</div>  
                   <div>
                     <div style={styles.miniLabel}>Food & Misc</div>
                     <div style={styles.miniValue}>Rs{costs.foodMisc.toLocaleString()}</div>
                   </div>  
                </div>
                <div style={styles.miniItem}>
                   <div style={styles.miniIcon}>{icons.mountain}</div>
                   <div>
                     <div style={styles.miniLabel}>Jeep & Activities</div>
                     <div style={styles.miniValue}>Rs{costs.jeepActivities.toLocaleString()}</div>
                   </div>
                </div>
              </div>
              
              <div style={styles.compactRight}>
                <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>
                   <div style={styles.totalLabel}>Total</div>
                   <div style={styles.totalValue}>Rs{costs.total.toLocaleString()}</div>
                </div>
                <button onClick={() => setManualToggle(true)} style={styles.toggleBtn}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                </button>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </>
  );
};

const styles = {
  footerWrapper: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    padding: '0 2rem 1rem 2rem',
    zIndex: 100,
    pointerEvents: 'none',
  },
  footerContainerCompact: {
    backgroundColor: '#ffffff',
    borderTop: '1px solid var(--border-light)',
    width: '100%',
    pointerEvents: 'auto',
    // In compact mode, stretch full width at the bottom like a sticky bar
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.05)',
  },
  footerContainerExpanded: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 20px 50px -12px rgba(15, 23, 42, 0.15)',
    border: '1px solid var(--border-light)',
    width: '100%',
    maxWidth: '1000px',
    pointerEvents: 'auto',
    position: 'relative',
    marginBottom: '1rem',
  },
  compactBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0.75rem 2rem',
  },
  compactLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },
  miniItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  miniIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  miniLabel: {
    fontSize: '0.65rem',
    color: 'var(--text-secondary)',
    fontWeight: '600',
  },
  miniValue: {
    fontSize: '0.9rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
  },
  compactRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  totalLabel: {
    fontSize: '0.7rem',
    fontWeight: '600',
    color: 'var(--text-secondary)',
  },
  totalValue: {
    fontSize: '1.25rem',
    fontWeight: '800',
    color: 'var(--accent-teal)',
    lineHeight: '1',
  },
  toggleBtn: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: 'var(--bg-light-gray)',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-secondary)',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  toggleBtnAbsolute: {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: 'var(--bg-light-gray)',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-secondary)',
    cursor: 'pointer',
  },
  expandedContent: {
    padding: '2rem',
  },
  summaryHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '2rem',
  },
  summaryTitle: {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: '#020617', // Very dark blue/black
    margin: 0,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1rem',
    marginBottom: '2rem',
  },
  costCard: {
    backgroundColor: '#f8fafc',
    padding: '1.5rem',
    borderRadius: '12px',
    border: '1px solid var(--border-light)',
  },
  iconBoxTop: {
    marginBottom: '1rem',
  },
  costLabelCard: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    fontWeight: '500',
    marginBottom: '0.5rem',
  },
  costValueCard: {
    fontSize: '1.35rem',
    fontWeight: '800',
    color: '#0f172a',
  },
  expandedDivider: {
    height: '1px',
    backgroundColor: 'var(--border-light)',
    marginBottom: '1.5rem',
  },
  expandedTotalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  expandedTotalLabel: {
    fontSize: '1.1rem',
    fontWeight: '800',
    color: '#0f172a',
  },
  expandedTotalValue: {
    fontSize: '2rem',
    fontWeight: '800',
    color: 'var(--accent-teal)',
  }
};

export default ItineraryFooter;
