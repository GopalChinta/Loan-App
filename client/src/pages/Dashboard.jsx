import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import '../styles/dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="dashboard-widgets">
          <div className="card">Total Loans: 124</div>
          <div className="card">Active Users: 87</div>
          <div className="card">Pending Approvals: 19</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
