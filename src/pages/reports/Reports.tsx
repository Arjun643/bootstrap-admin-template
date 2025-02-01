import React from 'react';

const Reports: React.FC = () => {
  return (
    <div className="reports-page">
      <div className="reports-header">
        <h1>Reports</h1>
        <p>View and generate reports for your business</p>
      </div>

      <div className="reports-grid">
        {/* Sales Report Card */}
        <div className="report-card">
          <div className="report-icon">
            <i className="bi bi-graph-up"></i>
          </div>
          <h3>Sales Report</h3>
          <p>View detailed sales analytics and trends</p>
          <button className="generate-btn">Generate Report</button>
        </div>

        {/* User Activity Report Card */}
        <div className="report-card">
          <div className="report-icon">
            <i className="bi bi-people"></i>
          </div>
          <h3>User Activity</h3>
          <p>Track user engagement and behavior</p>
          <button className="generate-btn">Generate Report</button>
        </div>

        {/* Financial Report Card */}
        <div className="report-card">
          <div className="report-icon">
            <i className="bi bi-cash-stack"></i>
          </div>
          <h3>Financial Report</h3>
          <p>Review revenue and expenses</p>
          <button className="generate-btn">Generate Report</button>
        </div>

        {/* Performance Report Card */}
        <div className="report-card">
          <div className="report-icon">
            <i className="bi bi-speedometer2"></i>
          </div>
          <h3>Performance Metrics</h3>
          <p>Analyze system performance data</p>
          <button className="generate-btn">Generate Report</button>
        </div>
      </div>
    </div>
  );
};

export default Reports; 