import React from 'react';

const StatsGrid: React.FC = () => {
  const stats = [
    { label: 'Total Devices Protected', value: '1,250' },
    { label: 'Threats Blocked (This week)', value: '84' },
    { label: 'Battery Drain % (Avg)', value: '9.2%' },
    { label: 'Zero-Click Exploits Prevented', value: '12' },
  ];

  return (
    <div className="stats-grid">
      {stats.map((stat, idx) => (
        <div key={idx} className="stat-card">
          <p className="stat-label">{stat.label}</p>
          <h2 className="stat-value">{stat.value}</h2>
        </div>
      ))}
    </div>
  );
}

export default StatsGrid;