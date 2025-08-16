import styles from '../styles/Dashboard.module.css';
import Sidebar from '../components/Sidebar';
import DashboardStats from '../components/DashboardStats';

export default function DashboardPage() {
  return (
    <div className={styles.dashboardWrapper}>
      <Sidebar />
      <main className={styles.mainContent}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <h1 className={styles.sectionHeader}>Conversations</h1>
          <select className={styles.selectDropdown}>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
        </div>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Agent</th>
              <th>Date / Time</th>
              <th>Messages</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1234</td>
              <td>Real Estate Agent</td>
              <td>09 Aug 2025 14:23</td>
              <td><span className={styles.link}>View Transcript</span></td>
            </tr>
            <tr>
              <td>5678</td>
              <td>SaaS Demo Agent</td>
              <td>09 Aug 2025 11:05</td>
              <td><span className={styles.link}>View Transcript</span></td>
            </tr>
          </tbody>
        </table>
        <h2 className={styles.sectionHeader}>Credit Usage</h2>
        <DashboardStats />
      </main>
    </div>
  );
}
