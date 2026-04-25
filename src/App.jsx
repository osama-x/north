import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TripPlanner from './components/TripPlanner';
import Itinerary from './components/Itinerary';
import DestinationDetail from './components/DestinationDetail';
import UpdatesPage from './components/UpdatesPage';
import scene from './assets/scene.png';

function App() {
  return (
    <BrowserRouter>
      <div className="cloud-container">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
        <div className="cloud cloud-4"></div>
      </div>
      <Header />
      <main style={styles.mainContent}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/planner" element={<TripPlanner />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/destination/:id" element={<DestinationDetail />} />
          <Route path="/updates" element={<UpdatesPage />} />
        </Routes>
      </main>
      <img src={scene} alt="Mountain Panorama" className="global-scene animate-scale-up delay-400" />
    </BrowserRouter>
  );
}

const styles = {
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    // Content is now naturally scrollable
    paddingTop: '80px',
    backgroundColor: 'transparent',
  }
};

export default App;
