import React from 'react';

export default function Devices() {
  const devices = [
    { name: 'PEGA-301', status: 'Active', lastSeen: '5m ago' },
    { name: 'XS-7310', status: 'Active', lastSeen: '23m ago' },
    { name: 'INSPECT', status: 'Active', lastSeen: '35m ago' },
    { name: 'DELTA-SG', status: 'Active', lastSeen: '1h ago' },
  ];

  return (
    <div className="devices-section">
      <h2 className="section-title">Devices</h2>
      <div className="devices-list">
        {devices.map((device, idx) => (
          <div key={idx} className="device-item">
            <div className="device-info">
              <div className="device-name">{device.name}</div>
            </div>
            <div className="device-status">
              <span className="status-indicator active"></span>
              <span className="status-text">{device.status}</span>
              <span className="last-seen">{device.lastSeen}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}