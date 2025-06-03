import React from 'react';




const ThreatTable: React.FC = () =>{
  const threats = [
    { device: 'Iphone11', threat: 'Pegasus Spyware', severity: 'Critical', action: 'Blocked' },
    { device: 'Iphone11', threat: 'Webk1 Exploit', severity: 'High', action: 'Blocked' },
    { device: 'Iphone11', threat: 'Phishing Attempt', severity: 'Medium', action: 'Blocked' },
    { device: 'Iphone11', threat: 'One-Click Exploit', severity: 'Low', action: 'Logged' },
  ];

  return (
    <div className="bg-card p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Live Threat Monitoring</h2>
      <table className="w-full text-sm text-left">
        <thead className="text-gray-400">
          <tr>
            <th className="pb-2">Device</th>
            <th>Threat</th>
            <th>Severity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {threats.map((item, idx) => (
            <tr key={idx} className="border-t border-gray-700">
              <td className="py-2">{item.device}</td>
              <td>{item.threat}</td>
              <td>{item.severity}</td>
              <td>{item.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ThreatTable;
