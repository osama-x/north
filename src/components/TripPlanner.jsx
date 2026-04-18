import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AgenticLoader from './AgenticLoader';

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

  // Calculate End Date whenever startDate or duration changes
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

  const inputStyle = {
    padding: '0.75rem 1rem',
    borderRadius: '10px',
    border: '1px solid var(--border-light)',
    fontSize: '0.925rem',
    outline: 'none',
    width: '100%',
    fontFamily: 'inherit',
    backgroundColor: 'var(--bg-light-gray)',
    color: 'var(--text-primary)',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.75rem',
    fontWeight: '700',
    color: 'var(--text-tertiary)',
    marginBottom: '0.4rem',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  };

  return (
    <div style={{ padding: '0 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(100vh - 80px)', backgroundColor: '#fafbfc' }}>
      
      <div style={{ 
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          boxShadow: '0 20px 50px -12px rgba(15, 23, 42, 0.08)',
          border: '1px solid var(--border-light)',
          padding: '2.5rem',
          width: '100%',
          maxWidth: '1000px',
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '2.5rem',
          transform: 'translateY(-5%)'
        }}>
        
        {/* Header */}
        <div style={{ gridColumn: 'span 12', marginBottom: '0.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '12px', border: '1px solid var(--border-light)', color: 'var(--text-secondary)', transition: 'all 0.2s', marginTop: '0.25rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </Link>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--accent-teal)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Phase 01</span>
                <div style={{ width: '12px', height: '1px', backgroundColor: 'var(--border-light)' }}></div>
                <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-tertiary)' }}>Logistics</span>
              </div>
              <h1 style={{ fontSize: '1.75rem', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>Configure Your Expedition</h1>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '4px' }}>
             {[1,2,3].map(i => (
               <div key={i} style={{ width: '24px', height: '4px', borderRadius: '2px', backgroundColor: i===1 ? 'var(--accent-teal)' : 'var(--border-light)' }}></div>
             ))}
          </div>
        </div>

        {/* Left Side: Route & Logistics */}
        <div style={{ gridColumn: 'span 9', display: 'flex', flexDirection: 'column', gap: '2rem', borderRight: '1px solid var(--border-light)', paddingRight: '2rem' }}>
          
          {/* Row 1: Source & Destination */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <label style={labelStyle}>Source City</label>
              <input type="text" name="originCity" placeholder="e.g. Islamabad" value={formData.originCity} onChange={handleChange} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Destination City</label>
              <input type="text" name="destinationCity" placeholder="e.g. Skardu" value={formData.destinationCity} onChange={handleChange} style={inputStyle} />
            </div>
          </div>

          {/* Row 2: Dynamic Dates */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <label style={labelStyle}>Departure</label>
              <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Return (Auto)</label>
              <div style={{ ...inputStyle, backgroundColor: '#f1f5f9', color: 'var(--text-tertiary)', fontWeight: '600' }}>
                {new Date(formData.endDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
              </div>
            </div>
          </div>

          {/* New Row: Duration Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
               <div>
                  <label style={labelStyle}>Trip Duration</label>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', fontWeight: '500' }}>Adjust to set return date</div>
               </div>
               <div style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--accent-teal)' }}>{formData.duration} Days</div>
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1rem' }}>
              <div>
                <label style={labelStyle}>Budget Ceiling</label>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', fontWeight: '500' }}>Estimated trip expenditure</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--bg-light-gray)', padding: '0.5rem 1rem', borderRadius: '10px', border: '1px solid var(--border-light)' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-tertiary)' }}>PKR</span>
                <input 
                  type="number" 
                  name="budgetCeiling" 
                  value={formData.budgetCeiling} 
                  onChange={handleChange}
                  style={{ border: 'none', background: 'transparent', outline: 'none', width: '80px', textAlign: 'right', fontWeight: '800', fontSize: '1rem', color: 'var(--text-primary)' }}
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
        <div style={{ gridColumn: 'span 3', display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingLeft: '1rem' }}>
          <label style={labelStyle}>Travelers</label>
          {[
            { type: 'adults', label: 'Adults', desc: '12+ yrs' },
            { type: 'children', label: 'Children', desc: '2-12 yrs' },
            { type: 'infants', label: 'Infants', desc: '0-2 yrs' },
          ].map(({ type, label, desc }) => (
            <div key={type} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                   <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-primary)' }}>{label}</div>
                   <div style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', fontWeight: '500' }}>{desc}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--bg-light-gray)', padding: '4px 6px', borderRadius: '8px' }}>
                  <button onClick={() => handleTravelerChange(type, false)} style={{ width: '24px', height: '24px', borderRadius: '4px', border: '1px solid var(--border-light)', backgroundColor: '#fff', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>-</button>
                  <span style={{ fontWeight: '700', fontSize: '0.9rem', width: '16px', textAlign: 'center' }}>{formData.travelers[type]}</span>
                  <button onClick={() => handleTravelerChange(type, true)} style={{ width: '24px', height: '24px', borderRadius: '4px', border: '1px solid var(--border-light)', backgroundColor: '#fff', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
                </div>
              </div>
            </div>
          ))}
          
          <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
            <label style={labelStyle}>Mode of Transport</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { id: 'By Car', icon: 'M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z' },
                { id: 'By Bus', icon: 'M18 11.03V7c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2v2c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-2h8v2c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-2c1.1 0 2-.9 2-2v-4.97zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm10 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM18 10H4V7h14v3z' },
                { id: 'By Flight', icon: 'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z' }
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => setFormData(prev => ({ ...prev, modeOfTransport: opt.id }))}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '12px',
                    border: '1px solid',
                    borderColor: formData.modeOfTransport === opt.id ? 'var(--accent-teal)' : 'var(--border-light)',
                    backgroundColor: formData.modeOfTransport === opt.id ? 'rgba(16, 185, 129, 0.05)' : '#fff',
                    color: formData.modeOfTransport === opt.id ? 'var(--accent-teal)' : 'var(--text-secondary)',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    width: '100%',
                    textAlign: 'left'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d={opt.icon} />
                  </svg>
                  <span style={{ fontSize: '0.875rem', fontWeight: '700' }}>{opt.id}</span>
                  {formData.modeOfTransport === opt.id && (
                    <div style={{ marginLeft: 'auto', width: '12px', height: '12px', borderRadius: '50%', border: '3px solid var(--accent-teal)' }}></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer: Action Button centered */}
        <div style={{ gridColumn: 'span 12', display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <button 
            onClick={handleNextClick} 
            style={{ 
              backgroundColor: 'var(--accent-dark)', 
              color: '#fff', 
              padding: '1.125rem 5rem', 
              borderRadius: '16px', 
              fontSize: '1.1rem', 
              fontWeight: '700', 
              transition: 'all 0.2s', 
              boxShadow: '0 15px 30px -10px rgba(15, 23, 42, 0.3)',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-teal)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-dark)'}
          >
            Continue to Itinerary
          </button>
        </div>

      </div>
    </div>
  );
};

export default TripPlanner;

