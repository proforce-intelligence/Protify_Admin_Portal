import React from 'react';

const LiveThreat: React.FC = () => {
  const threats = [
    { device: 'PEGA-301', threat: 'Pegasus Spyware', severity: 'Critical', action: 'Blocked' },
    { device: 'XS-7310', threat: 'Webk 1 Exploit', severity: 'High', action: 'Blocked' },
    { device: 'DELTA-SG', threat: 'Phishing Attempt', severity: 'Medium', action: 'Blocked' },
    { device: 'P-ELITE', threat: 'One-Click Exploit', severity: 'Low', action: 'Logged' },
  ];

  interface Threat {
    device: string;
    threat: string;
    severity: 'Critical' | 'High' | 'Medium' | 'Low' | string;
    action: string;
  }

  const getSeverityColor = (severity: Threat['severity']): string => {
    switch (severity) {
      case 'Critical': return '#ff6b6b';
      case 'High': return '#ffa726';
      case 'Medium': return '#ffcc02';
      case 'Low': return '#66bb6a';
      default: return '#ffffff';
    }
  };

  return (
    <div className="threat-monitoring">
      <h2 className="section-title">Live Threat Monitoring</h2>
      <div className="table-container">
        <table className="threat-table">
          <thead>
            <tr>
              <th>Device</th>
              <th>Threat</th>
              <th>Severity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {threats.map((threat, idx) => (
              <tr key={idx}>
                <td>{threat.device}</td>
                <td>{threat.threat}</td>
                <td style={{ color: getSeverityColor(threat.severity) }}>
                  {threat.severity}
                </td>
                <td className="action-cell">{threat.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LiveThreat;