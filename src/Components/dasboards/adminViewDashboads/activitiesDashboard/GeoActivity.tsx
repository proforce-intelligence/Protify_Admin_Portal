import React from "react";

const GeoActivity: React.FC = () => {
  return (
    <div className="geo-activity">
      <h2 className="section-title">Geo Activity</h2>
      <div className="map-container">
        <div className="world-map">
          <div className="threat-ping ping-1"></div>
          <div className="threat-ping ping-2"></div>
          <div className="threat-ping ping-3"></div>
          <div className="threat-ping ping-4"></div>
        </div>
      </div>
    </div>
  );
}

export default GeoActivity;
