import styles from '../styles/Dashboard.module.css';

export default function DashboardStats() {
  return (
    <section className={styles.creditUsageStats}>
      <div className={styles.statCard}>
        <div className={styles.statTitle}>AI Usage</div>
        <div className={styles.statValue}>72,000 / 100,000</div>
      </div>
      <div className={styles.statCard}>
        <div className={styles.statTitle}>STT Usage</div>
        <div className={styles.statValue}>350 min</div>
      </div>
      <div className={styles.statCard}>
        <div className={styles.statTitle}>TTS Usage</div>
        <div className={styles.statValue}>480,000 / 1,000,000</div>
      </div>
      <div className={styles.statCard}>
        <div className={styles.statTitle}>Total Conversations</div>
        <div className={styles.statValue}>2,145</div>
      </div>
      <div className={styles.statCard}>
        <div className={styles.statTitle}>Slides Shown</div>
        <div className={styles.statValue}>4,120</div>
      </div>
    </section>
  );
}
