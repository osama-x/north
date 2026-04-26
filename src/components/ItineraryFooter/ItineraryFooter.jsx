import React, { useState } from 'react';
import { styles } from './ItineraryFooter.styles';

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
                <div className="card-hover" style={styles.costCard}>
                   <div style={styles.iconBoxTop}>{icons.hotel}</div>
                   <div style={styles.costLabelCard}>Accommodation</div>
                   <div style={styles.costValueCard}>Rs{costs.accommodation ? costs.accommodation.toLocaleString() : 0}</div>
                </div>
                <div className="card-hover" style={styles.costCard}>
                   <div style={styles.iconBoxTop}>{icons.car}</div>
                   <div style={styles.costLabelCard}>Fuel & Tolls</div>
                   <div style={styles.costValueCard}>Rs{costs.fuelTolls ? costs.fuelTolls.toLocaleString() : 0}</div>
                </div>
                <div className="card-hover" style={styles.costCard}>
                   <div style={styles.iconBoxTop}>{icons.food}</div>
                   <div style={styles.costLabelCard}>Food & Misc</div>
                   <div style={styles.costValueCard}>Rs{costs.foodMisc ? costs.foodMisc.toLocaleString() : 0}</div>
                </div>
                <div className="card-hover" style={styles.costCard}>
                   <div style={styles.iconBoxTop}>{icons.mountain}</div>
                   <div style={styles.costLabelCard}>Jeep & Activities</div>
                   <div style={styles.costValueCard}>Rs{costs.jeepActivities ? costs.jeepActivities.toLocaleString() : 0}</div>
                </div>
              </div>

              <div style={styles.expandedDivider}></div>

              <div style={styles.expandedTotalRow}>
                <div style={styles.expandedTotalLabel}>Estimated Total</div>
                <div style={styles.expandedTotalValue}>Rs{costs.total ? costs.total.toLocaleString() : 0}</div>
              </div>

              <button onClick={() => setManualToggle(false)} className="btn-secondary-hover" style={styles.toggleBtnAbsolute}>
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
                     <div style={styles.miniValue}>Rs{costs.accommodation ? costs.accommodation.toLocaleString() : 0}</div>
                   </div>
                </div>
                <div style={styles.miniItem}>
                   <div style={styles.miniIcon}>{icons.car}</div>
                   <div>
                     <div style={styles.miniLabel}>Fuel & Tolls</div>
                     <div style={styles.miniValue}>Rs{costs.fuelTolls ? costs.fuelTolls.toLocaleString() : 0}</div>
                   </div>
                </div>
                 <div style={styles.miniItem}>
                   <div style={styles.miniIcon}>{icons.food}</div>  
                   <div>
                     <div style={styles.miniLabel}>Food & Misc</div>
                     <div style={styles.miniValue}>Rs{costs.foodMisc ? costs.foodMisc.toLocaleString() : 0}</div>
                   </div>  
                </div>
                <div style={styles.miniItem}>
                   <div style={styles.miniIcon}>{icons.mountain}</div>
                   <div>
                     <div style={styles.miniLabel}>Jeep & Activities</div>
                     <div style={styles.miniValue}>Rs{costs.jeepActivities ? costs.jeepActivities.toLocaleString() : 0}</div>
                   </div>
                </div>
              </div>
              
              <div style={styles.compactRight}>
                <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>
                   <div style={styles.totalLabel}>Total</div>
                   <div style={styles.totalValue}>Rs{costs.total ? costs.total.toLocaleString() : 0}</div>
                </div>
                <button onClick={() => setManualToggle(true)} className="btn-secondary-hover" style={styles.toggleBtn}>
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

export default ItineraryFooter;
