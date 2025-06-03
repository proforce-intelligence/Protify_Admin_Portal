import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <span className="logo-icon">◊</span>
          <h1 className="logo-text">Protify</h1>
        </div>
        
        <nav className="navigation">
          <a href="#" className="nav-link active">Dashboard</a>
          <a href="#" className="nav-link">Threat Logs</a>
          <a href="#" className="nav-link">Historical Insights</a>
          <a href="#" className="nav-link">Devices</a>
          <a href="#" className="nav-link">Alerts</a>
          <a href="#" className="nav-link">Settings</a>
        </nav>

        <div className="user-section">
          <button className="user-button">
            <span>👤</span>
            <span>Admin</span>
            <span>▼</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;