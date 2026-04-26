import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import TripPlanner from './components/TripPlanner/TripPlanner';
import Itinerary from './components/Itinerary/Itinerary';
import DestinationDetail from './components/DestinationDetail/DestinationDetail';
import UpdatesPage from './components/UpdatesPage/UpdatesPage';
import sceneLight from './assets/scene.png';
import sceneDark from './assets/scene_dark.png';

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <BrowserRouter>
      <div className="cloud-container">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
        <div className="cloud cloud-4"></div>
      </div>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main style={styles.mainContent}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/planner" element={<TripPlanner />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/destination/:id" element={<DestinationDetail />} />
          <Route path="/updates" element={<UpdatesPage />} />
        </Routes>
      </main>
      <img src={isDarkMode ? sceneDark : sceneLight} alt="Mountain Panorama" className="global-scene animate-scale-up delay-400" />
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
