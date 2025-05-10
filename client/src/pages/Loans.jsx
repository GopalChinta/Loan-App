import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import '../styles/dashboard.css';

function Loans() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const sampleLoans = [
    { id: 1, borrower: 'John Doe', amount: 5000, status: 'Approved' },
    { id: 2, borrower: 'Jane Smith', amount: 10000, status: 'Pending' },
    { id: 3, borrower: 'Alice Johnson', amount: 7500, status: 'Rejected' },
    { id: 4, borrower: 'Bob Brown', amount: 6500, status: 'Approved' }
  ];

  const filteredLoans = sampleLoans.filter((loan) => {
    const matchesSearch = loan.borrower.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'All' || loan.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="dashboard-widgets">
          <h2>Loan List</h2>
          <div className="filter-bar">
            <input
              type="text"
              placeholder="Search borrower..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="All">All Statuses</option>
              <option value="Approved">Approved</option>
              <option value="Pending">Pending</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
          <table className="loan-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Borrower</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredLoans.length > 0 ? (
                filteredLoans.map((loan) => (
                  <tr key={loan.id}>
                    <td>{loan.id}</td>
                    <td>{loan.borrower}</td>
                    <td>${loan.amount}</td>
                    <td>{loan.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" style={{ textAlign: 'center' }}>
                    No loans found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Loans;
