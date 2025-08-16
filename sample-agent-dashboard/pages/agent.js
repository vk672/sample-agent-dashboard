import Head from 'next/head';
import AgentStats from '../components/AgentStats';
import ChatBot from '../components/ChatBot';

export default function AgentPage() {
  return (
    <div style={{ background: '#f6f9fc', minHeight: '100vh' }}>
      <Head>
        <title>Agent Page | I-Venture Assistant</title>
      </Head>
      <header style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '24px 32px', background: '#fff', borderBottom: '1px solid #eaeaea',
        marginBottom: '24px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src='/isb-logo.png' alt='ISB Logo' style={{ height: '40px', marginRight: '12px' }} />
          <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>I-Venture Assistant</span>
        </div>
        <div style={{ color: '#21b573', fontWeight: 'bold' }}>Live Assistant</div>
      </header>
      <main style={{ display: 'flex', gap: '32px', justifyContent: 'center', alignItems: 'flex-start' }}>
        <section style={{ width: '54%', background: '#fff', borderRadius: '16px', padding: '32px', boxShadow: '0px 4px 16px rgba(0,0,0,0.03)' }}>
          <h2>Startup Resources & Information</h2>
          <p style={{ color: '#666' }}>
            Explore programs, events, and opportunities for your venture.
          </p>
          <p>
            I-Venture @ ISB fosters entrepreneurship and nurtures start-ups...
            (Your descriptive text here, similar to the sample.)
          </p>
          <AgentStats />
        </section>
        <section style={{ width: '38%' }}>
          <ChatBot />
        </section>
      </main>
    </div>
  );
}
