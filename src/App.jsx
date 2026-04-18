import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TripPlanner from './components/TripPlanner';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main style={styles.mainContent}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/planner" element={<TripPlanner />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

const styles = {
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    // Ensures the main content doesn't force a global scroll, 
    // allowing internal components to handle their own sizing
    overflow: 'hidden', 
  }
};

export default App;
