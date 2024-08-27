
const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-container">
      <nav className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li>Statistics</li>
          <li>Reports</li>
          <li>Analytics</li>
          <li>Reviews</li>
          <li>About</li>
        </ul>
      </nav>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
