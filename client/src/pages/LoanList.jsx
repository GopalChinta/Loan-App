import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import '../styles/dashboard.css';

const initialLoans = [
  { id: 'LN001', user: 'John Doe', amount: 5000, status: 'Approved', date: '2025-05-01' },
  { id: 'LN002', user: 'Jane Smith', amount: 8000, status: 'Pending', date: '2025-05-03' },
  { id: 'LN003', user: 'Alice Brown', amount: 12000, status: 'Rejected', date: '2025-05-04' },
];

function LoanList() {
  const [loans, setLoans] = useState(initialLoans);

  const updateStatus = (id, newStatus) => {
    const updatedLoans = loans.map((loan) =>
      loan.id === id ? { ...loan, status: newStatus } : loan
    );
    setLoans(updatedLoans);
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="dashboard-widgets">
          <h2>Loan Applications</h2>
          <table className="loan-table">
            <thead>
              <tr>
                <th>Loan ID</th>
                <th>User</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loans.map((loan) => (
                <tr key={loan.id}>
                  <td>{loan.id}</td>
                  <td>{loan.user}</td>
                  <td>${loan.amount}</td>
                  <td>{loan.status}</td>
                  <td>{loan.date}</td>
                  <td>
                    {loan.status === 'Pending' && (
                      <>
                        <button className="approve-btn" onClick={() => updateStatus(loan.id, 'Approved')}>
                          Approve
                        </button>
                        <button className="reject-btn" onClick={() => updateStatus(loan.id, 'Rejected')}>
                          Reject
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default LoanList;
