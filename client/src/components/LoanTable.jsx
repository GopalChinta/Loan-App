import React from 'react';

const loanData = [
  { id: 101, borrower: 'John Doe', amount: 5000, status: 'Approved' },
  { id: 102, borrower: 'Jane Smith', amount: 8000, status: 'Pending' },
  { id: 103, borrower: 'Sam Wilson', amount: 3000, status: 'Rejected' },
];

function LoanTable() {
  return (
    <div className="loan-table-container">
      <table className="loan-table">
        <thead>
          <tr>
            <th>Loan ID</th>
            <th>Borrower</th>
            <th>Amount ($)</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {loanData.map((loan) => (
            <tr key={loan.id}>
              <td>{loan.id}</td>
              <td>{loan.borrower}</td>
              <td>{loan.amount}</td>
              <td>
                <span className={`status ${loan.status.toLowerCase()}`}>
                  {loan.status}
                </span>
              </td>
              <td><button>View</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LoanTable;
