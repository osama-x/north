import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AgenticLoader from '../AgenticLoader/AgenticLoader';
import { styles } from './TripPlanner.styles';

const TripPlanner = () => {
  const navigate = useNavigate();
  const [isPlanning, setIsPlanning] = useState(false);
  const [formData, setFormData] = useState({
    originCity: '',
    destinationCity: '',
    startDate: new Date().toISOString().split('T')[0],
    endDate: '',
    duration: 3,
    travelers: {
      adults: 1,
      children: 0,
      infants: 0,
    },
    budgetCeiling: 50000,
    modeOfTransport: 'By Car',
  });

  useEffect(() => {
    if (formData.startDate) {
      const start = new Date(formData.startDate);
      const end = new Date(start);
      end.setDate(start.getDate() + parseInt(formData.duration));
      setFormData(prev => ({ ...prev, endDate: end.toISOString().split('T')[0] }));
    }
  }, [formData.startDate, formData.duration]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTravelerChange = (type, increment) => {
    setFormData((prev) => {
      const current = prev.travelers[type];
      const nextValue = increment ? current + 1 : Math.max(0, current - 1);
      return {
        ...prev,
        travelers: {
          ...prev.travelers,
          [type]: type === 'adults' ? Math.max(1, nextValue) : nextValue,
        },
      };
    });
  };

  const handleNextClick = () => {
    setIsPlanning(true);
    console.log('Trip Logistics JSON:', JSON.stringify(formData, null, 2));
  };

  if (isPlanning) {
    return (
      <AgenticLoader 
        source={formData.originCity} 
        destination={formData.destinationCity} 
        onComplete={() => navigate('/itinerary', { state: formData })} 
      />
    );
  }

  return (
    <div style={styles.pageWrapper}>
      
      <div className="animate-scale-up glass-card" style={styles.mainCard}>
        
        {/* Header */}
        <div className="animate-slide-down delay-100" style={styles.headerRow}>
          <div style={styles.headerLeft}>
            <Link to="/" className="btn-secondary-hover" style={styles.backBtn}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </Link>
            <div>
              <div style={styles.phaseTextContainer}>
                <span style={styles.phaseTitle}>Phase 01</span>
                <div style={styles.phaseLine}></div>
                <span style={styles.phaseSubtitle}>Logistics</span>
              </div>
              <h1 style={styles.mainTitle}>Configure Your Expedition</h1>
            </div>
          </div>
          <div style={styles.dotsContainer}>
             {[1,2,3].map(i => (
               <div key={i} style={{ width: '24px', height: '4px', borderRadius: '2px', backgroundColor: i===1 ? 'var(--accent-teal)' : 'var(--border-light)' }}></div>
             ))}
          </div>
        </div>

        {/* Left Side: Route & Logistics */}
        <div className="animate-slide-right delay-200" style={styles.leftSide}>
          
          {/* Row 1: Source & Destination */}
          <div style={styles.formRow}>
            <div>
              <label style={styles.labelStyle}>Source City</label>
              <input type="text" name="originCity" placeholder="e.g. Islamabad" value={formData.originCity} onChange={handleChange} style={styles.inputStyle} />
            </div>
            <div>
              <label style={styles.labelStyle}>Destination City</label>
              <input type="text" name="destinationCity" placeholder="e.g. Skardu" value={formData.destinationCity} onChange={handleChange} style={styles.inputStyle} />
            </div>
          </div>

          {/* Row 2: Dynamic Dates */}
          <div style={styles.formRow}>
            <div>
              <label style={styles.labelStyle}>Departure</label>
              <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} style={styles.inputStyle} />
            </div>
            <div>
              <label style={styles.labelStyle}>Return (Auto)</label>
              <div style={styles.readOnlyDate}>
                {new Date(formData.endDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
              </div>
            </div>
          </div>

          {/* New Row: Duration Slider */}
          <div>
            <div style={styles.sliderContainer}>
               <div>
                  <label style={styles.labelStyle}>Trip Duration</label>
                  <div style={styles.sliderDesc}>Adjust to set return date</div>
               </div>
               <div style={styles.sliderValue}>{formData.duration} Days</div>
            </div>
            <input 
              type="range" 
              name="duration" 
              min="1" 
              max="15" 
              step="1"
              value={formData.duration} 
              onChange={handleChange}
              style={{ width: '100%', cursor: 'pointer', accentColor: 'var(--accent-teal)' }}
            />
          </div>

          {/* Row 3: Budget Slider & Manual Input */}
          <div>
            <div style={{ ...styles.sliderContainer, alignItems: 'flex-end' }}>
              <div>
                <label style={styles.labelStyle}>Budget Ceiling</label>
                <div style={styles.sliderDesc}>Estimated trip expenditure</div>
              </div>
              <div style={styles.budgetBox}>
                <span style={styles.currencyLabel}>PKR</span>
                <input 
                  type="number" 
                  name="budgetCeiling" 
                  value={formData.budgetCeiling} 
                  onChange={handleChange}
                  style={styles.budgetInput}
                />
              </div>
            </div>
            <input 
              type="range" 
              name="budgetCeiling" 
              min="5000" 
              max="500000" 
              step="5000"
              value={formData.budgetCeiling} 
              onChange={handleChange}
              style={{ width: '100%', cursor: 'pointer', accentColor: 'var(--accent-teal)' }}
            />
          </div>
        </div>

        {/* Right Side: Travelers (Vertical) */}
        <div className="animate-slide-left delay-300" style={styles.rightSide}>
          <label style={styles.labelStyle}>Travelers</label>
          {[
            { type: 'adults', label: 'Adults', desc: '12+ yrs' },
            { type: 'children', label: 'Children', desc: '2-12 yrs' },
            { type: 'infants', label: 'Infants', desc: '0-2 yrs' },
          ].map(({ type, label, desc }) => (
            <div key={type} style={styles.travelerTypeContainer}>
              <div style={styles.travelerRow}>
                <div>
                   <div style={styles.travelerLabel}>{label}</div>
                   <div style={styles.travelerDesc}>{desc}</div>
                </div>
                <div style={styles.stepperContainer}>
                  <button className="btn-secondary-hover" onClick={() => handleTravelerChange(type, false)} style={styles.stepperBtn}>-</button>
                  <span style={styles.stepperValue}>{formData.travelers[type]}</span>
                  <button className="btn-secondary-hover" onClick={() => handleTravelerChange(type, true)} style={styles.stepperBtn}>+</button>
                </div>
              </div>
            </div>
          ))}
          
          <div style={styles.transportSection}>
            <label style={styles.labelStyle}>Mode of Transport</label>
            <div style={styles.transportList}>
              {[
                { id: 'By Car', icon: 'M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z' },
                { id: 'By Bus', icon: 'M18 11.03V7c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2v2c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-2h8v2c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-2c1.1 0 2-.9 2-2v-4.97zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm10 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM18 10H4V7h14v3z' },
                { id: 'By Flight', icon: 'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z' }
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => setFormData(prev => ({ ...prev, modeOfTransport: opt.id }))}
                  className="card-hover"
                  style={formData.modeOfTransport === opt.id ? styles.transportOptSelected : styles.transportOptDefault}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d={opt.icon} />
                  </svg>
                  <span style={styles.transportOptText}>{opt.id}</span>
                  {formData.modeOfTransport === opt.id && (
                    <div style={styles.transportSelectedRing}></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer: Action Button centered */}
        <div className="animate-slide-up delay-400" style={styles.footer}>
          <button 
            onClick={handleNextClick} 
            className="btn-primary-hover"
            style={styles.continueBtn}
          >
            Continue to Itinerary
          </button>
        </div>

      </div>
    </div>
  );
};

export default TripPlanner;
