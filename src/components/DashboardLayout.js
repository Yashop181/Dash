
const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-container">
      <nav className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li>Overview</li>
          <li>Reports</li>
          <li>Analytics</li>
          <li>Reviews</li>
        </ul>
      </nav>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
