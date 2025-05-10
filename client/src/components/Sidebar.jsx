import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/layout.css';

function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <h2>Loan Manager</h2>
      <ul>
        <li className={location.pathname === '/dashboard' ? 'active' : ''}>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className={location.pathname === '/loans' ? 'active' : ''}>
          <Link to="/loans">Loans</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/reports">Reports</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;


