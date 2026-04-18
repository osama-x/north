import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import DayCard from './DayCard';
import ItineraryFooter from './ItineraryFooter';

const Itinerary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Use Passed form data or fallback
  const formData = location.state || {
    originCity: 'Lahore',
    destinationCity: 'Naran',
    startDate: new Date().toISOString().split('T')[0],
    duration: 7,
    modeOfTransport: 'By Car'
  };

  const getMonthName = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleString('default', { month: 'long' });
  };

  // Mock initial costs
  const baseCosts = {
    fuelTolls: 49500,
    foodMisc: 35000,
    jeepActivities: 20000,
  };

  // State to track selected stay for each day an option exists
  const [selectedStays, setSelectedStays] = useState({});

  // Dummy AI Data - normally fetched from backend
  const itineraryData = [
    {
      id: 1,
      title: `${formData.originCity} to Shogran`,
      timeline: [
        { time: "05:00 AM", title: `Departure from ${formData.originCity}` },
        { time: "09:30 AM", title: "Breakfast stop at Behra or Islamabad" },
        { time: "01:00 PM", title: "Lunch at Mansehra or Balakot" },
        { time: "04:00 PM", title: "Arrival at Kiwai; transfer to Shogran (Steep 7km drive)" }
      ],
      thingsToDo: ["Check-in, evening walk in Shogran forest", "Dinner with a view of Siri Paye peaks"],
      stays: [] // Handled as part of Day 2 in some itineraries, but let's add one here to demo early state
    },
    {
      id: 2,
      title: "Shogran & Siri Paye Meadows",
      timeline: [
         { time: "09:00 AM", title: "Hire a local 4x4 Jeep for Siri Paye" },
         { time: "10:00 AM", title: "Explore Siri Meadows and Paye Lake" },
         { time: "02:00 PM", title: "Lunch in Shogran" },
         { time: "04:00 PM", title: "Relax or short hike to Forest Rest House" },
      ],
      thingsToDo: ["Horse riding at Siri Paye", "Photography at the 'Famous Swing'", "Bonfire at night"],
      stays: [
        { type: "Budget", price: 8000 },
        { type: "Mid-Range", price: 15000 },
        { type: "Luxury", price: 28000 }
      ]
    },
    {
      id: 3,
      title: `Shogran to ${formData.destinationCity}`,
      timeline: [
         { time: "10:00 AM", title: "Descend to Kiwai" },
         { time: "12:00 PM", title: "Drive along the Kunhar River to Naran" },
         { time: "02:00 PM", title: "Stop at Kaghan for lunch" },
         { time: "04:00 PM", title: "Check-in at Naran Hotel" },
      ],
      thingsToDo: ["Visit Naran Bazaar", "Trout Fish for dinner"],
      stays: [
        { type: "Budget", price: 10000 },
        { type: "Mid-Range", price: 20000 },
        { type: "Luxury", price: 40000 }
      ]
    },
    {
      id: 4,
      title: "Lake Saif-ul-Malook Excursion",
      timeline: [
         { time: "08:30 AM", title: "Hire Jeep for Saif-ul-Malook" },
         { time: "10:00 AM", title: "Boating & Trekking around the lake" },
         { time: "02:00 PM", title: "Return to Naran for Lunch" },
         { time: "04:00 PM", title: "Relaxation and local shopping" },
      ],
      thingsToDo: ["Boating", "Photography"],
      stays: [
        { type: "Budget", price: 10000 },
        { type: "Mid-Range", price: 20000 },
        { type: "Luxury", price: 40000 }
      ]
    }
  ];

  // State to track if user reached the bottom
  const [atBottom, setAtBottom] = useState(false);
  const bottomSentinelRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAtBottom(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: '0px 0px 50px 0px' }
    );

    if (bottomSentinelRef.current) {
      observer.observe(bottomSentinelRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Initialize selected stays arbitrarily (e.g. choose Budget by default)
  useEffect(() => {
    const initialStays = {};
    itineraryData.forEach(day => {
      if (day.stays && day.stays.length > 0) {
        initialStays[day.id] = { type: day.stays[0].type, price: day.stays[0].price };
      }
    });
    setSelectedStays(initialStays);
  }, []);

  const handleStaySelect = (dayId, type, price) => {
    setSelectedStays(prev => ({
      ...prev,
      [dayId]: { type, price }
    }));
  };

  // Calculate dynamic totals
  const totalAccommodation = Object.values(selectedStays).reduce((acc, curr) => acc + curr.price, 0);
  const totalCost = baseCosts.fuelTolls + baseCosts.foodMisc + baseCosts.jeepActivities + totalAccommodation;

  const currentCosts = {
    ...baseCosts,
    accommodation: totalAccommodation,
    total: totalCost
  };

  // Helper to generate dates for each day
  const getDayDateInfo = (dayIndex) => {
    const d = new Date(formData.startDate);
    d.setDate(d.getDate() + dayIndex);
    return {
      dateStr: d.toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      dayOfWeek: d.toLocaleString('en-US', { weekday: 'long' })
    };
  };

  return (
    <div style={styles.pageBackground}>
      <div style={styles.container}>
        
        {/* Header Section */}
        <div className="animate-slide-down delay-100" style={styles.headerArea}>
           <div style={styles.titleContainer}>
             <h1 style={styles.titleText}>{formData.originCity} <span style={{color: 'var(--text-tertiary)', margin:'0 4px'}}>→</span> {formData.destinationCity}</h1>
             <div style={styles.subtitleText}>
                {formData.duration} Days • {getMonthName(formData.startDate)} • {formData.modeOfTransport} • Generated by AI
             </div>
           </div>
        </div>

        {/* Trip Overview Cards */}
        <div className="animate-scale-up delay-200 glass-card" style={styles.overviewSection}>
           <h2 style={styles.sectionTitle}>Trip Overview</h2>
           <p style={styles.sectionSubtitle}>Total Distance: ~1,300 km (Round trip)</p>
           
           <div style={styles.overviewGrid}>
             <div className="glass-card" style={styles.overviewCard}>
                <div style={{color: '#10B981', marginBottom: '0.75rem'}}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>
                </div>
                <div style={styles.overviewCardLabel}>Fuel</div>
                <div style={styles.overviewCardValue}>Rs35k – Rs45k</div>
             </div>
             <div className="glass-card" style={styles.overviewCard}>
                <div style={{color: '#F59E0B', marginBottom: '0.75rem'}}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
                </div>
                <div style={styles.overviewCardLabel}>Food</div>
                <div style={styles.overviewCardValue}>Rs25k – Rs35k</div>
             </div>
             <div className="glass-card" style={styles.overviewCard}>
                <div style={{color: '#10B981', marginBottom: '0.75rem'}}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>
                </div>
                <div style={styles.overviewCardLabel}>Jeep Hires</div>
                <div style={styles.overviewCardValue}>Rs15k – Rs20k</div>
             </div>
             <div className="glass-card" style={styles.overviewCard}>
                <div style={{color: '#F59E0B', marginBottom: '0.75rem'}}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
                </div>
                <div style={styles.overviewCardLabel}>Tolls</div>
                <div style={styles.overviewCardValue}>Rs4k – Rs5k</div>
             </div>
           </div>
        </div>

        {/* Day by Day Itinerary */}
        <div style={styles.daysList}>
          {itineraryData.map((day, index) => {
            const dateInfo = getDayDateInfo(index);
            const delayClass = `delay-${Math.min((index + 3) * 100, 1000)}`;
            return (
              <DayCard 
                key={day.id} 
                dayData={day} 
                dateStr={dateInfo.dateStr}
                dayOfWeek={dateInfo.dayOfWeek}
                onStaySelect={handleStaySelect}
                selectedStayType={selectedStays[day.id]?.type}
                className={`card-hover animate-slide-up ${delayClass}`}
              />
            );
          })}
        </div>

        {/* Sentinel for bottom detection */}
        <div ref={bottomSentinelRef} style={{ height: '20px' }} />

      </div>

      <ItineraryFooter costs={currentCosts} isAtBottom={atBottom} />
    </div>
  );
};

const styles = {
  pageBackground: {
    backgroundColor: 'transparent',
    minHeight: '100vh',
    overflowY: 'auto',
    paddingBottom: '120px', // Ensure content doesn't hit bottom prematurely
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '2rem',
  },
  headerArea: {
    textAlign: 'center',
    marginBottom: '3rem',
    marginTop: '1rem',
  },
  titleText: {
    fontSize: '3rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
    margin: '0 0 0.5rem 0',
    letterSpacing: '-0.02em',
  },
  subtitleText: {
    fontSize: '1.25rem',
    color: 'var(--text-secondary)',
    fontWeight: '500',
  },
  overviewSection: {
    borderRadius: '16px',
    padding: '2rem',
    marginBottom: '3rem',
  },
  sectionTitle: {
    fontSize: '1.25rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
    margin: '0 0 0.5rem 0',
  },
  sectionSubtitle: {
    fontSize: '1rem',
    color: 'var(--text-secondary)',
    marginBottom: '1.5rem',
    marginTop: 0
  },
  overviewGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1rem',
  },
  overviewCard: {
    borderRadius: '12px',
    padding: '1.25rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  overviewCardLabel: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    fontWeight: '500',
    margin: '0.5rem 0 0.25rem 0',
  },
  overviewCardValue: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
  },
  daysList: {
    display: 'flex',
    flexDirection: 'column',
  }
};

export default Itinerary;
