import React from 'react';
import '../styles/layout.css';

function Topbar() {
  return (
    <div className="topbar">
      <span>Welcome, Admin</span>
      <div className="topbar-actions">
        <button>Notifications</button>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Topbar;
