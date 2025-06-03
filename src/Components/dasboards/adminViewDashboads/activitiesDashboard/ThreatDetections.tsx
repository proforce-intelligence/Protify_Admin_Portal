import React from 'react';

const ThreatDetections: React.FC = () => {
  return (
    <div className="threat-detections">
      <h2 className="section-title">Threat Detections</h2>
      <div className="detection-stats">
        <div className="detection-item">
          <span className="detection-label">Attack Types</span>
          <span className="detection-value">Blocpruel a This Week</span>
          <button className="download-btn">Download</button>
        </div>
        <div className="detection-item">
          <span className="detection-label">Proactive</span>
          <span className="detection-value">0%</span>
        </div>
      </div>
    </div>
  );
}

export default ThreatDetections;