import React from 'react';
import Header from './Header';
import StatsGrid from './StatsGrid';
import LiveThreat from './LiveThreat';
import ThreatIntelligence from './ThreatIntelligence';
import GeoActivity from './GeoActivity';
import Devices from './Devices';
import ThreatDetections from './ThreatDetections';
import Footer from './Footer';
import './index.css'; 

const App: React.FC = () => {
  return (
    <div className="dashboard-app">
      <Header />
      <main className="main-content">
        <StatsGrid />
        
        <div className="content-grid">
          <LiveThreat />
          <GeoActivity />
        </div>
        
        <div className="bottom-grid">
          <ThreatIntelligence />
          <Devices />
        </div>
        
        <ThreatDetections />
      </main>
      <Footer/>
    </div>
  );
}

export default App;