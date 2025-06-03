import React from 'react';

const ThreatIntelligence: React.FC = () => {
  const data = [
    { type: 'Phishing', value: 39, color: '#4299e1' },
    { type: 'Spyware', value: 24, color: '#667eea' },
    { type: 'Exploits', value: 16, color: '#ed64a6' },
  ];

  return (
    <div className="threat-intelligence">
      <h2 className="section-title">Threat Intelligence</h2>
      <div className="chart-subtitle">Attack Types This Week</div>
      <div className="chart-container">
        {data.map((item, idx) => (
          <div key={idx} className="chart-bar-container">
            <div 
              className="chart-bar"
              style={{ 
                height: `${(item.value / 40) * 100}%`,
                backgroundColor: item.color 
              }}
            />
            <div className="chart-label">{item.type}</div>
            <div className="chart-value">{item.value}</div>
          </div>
        ))}
      </div>
      <div className="threat-timeline">
        <div className="timeline-label">Threatbealore.owTime</div>
        <div className="timeline-wave"></div>
      </div>
    </div>
  );
}

export default ThreatIntelligence;