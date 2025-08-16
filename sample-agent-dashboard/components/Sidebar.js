import Link from 'next/link';
import styles from '../styles/Dashboard.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2em' }}>
        <img
          src="/isb-logo.png"
          alt="ISB Logo"
          style={{ height: '40px', marginRight: '12px', borderRadius: '4px' }}
        />
        <div className={styles.sidebarTitle}>Insurge AI</div>
      </div>
      <nav className={styles.sidebarNav}>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            <Link href="/agent">Agent Page</Link>
          </li>
          <li>
            <Link href="#">Credit Usage</Link>
          </li>
          <li>
            <Link href="#">Analytics</Link>
          </li>
          <li>
            <Link href="#">Tool Connections</Link>
          </li>
          <li>
            <Link href="#">Knowledge Base</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
