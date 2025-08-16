export default function ChatBot() {
  return (
    <div style={{
      background: 'white', borderRadius: '16px', boxShadow: '0 0 8px rgba(0,0,0,0.05)',
      padding: '24px', marginTop: '16px'
    }}>
      <div style={{ fontWeight: 'bold', color: '#2b59c3', marginBottom: '12px' }}>
        I-Venture Assistant
      </div>
      <div style={{
        background: '#2b59c3', color: 'white', borderRadius: '10px',
        padding: '13px 19px', marginBottom: '16px', maxWidth: '80%'
      }}>
        Tell me about your incubation programs
        <div style={{ fontSize: '0.8em', textAlign: 'right', color: '#e3e3e3' }}>01:07 AM</div>
      </div>
      <div style={{
        background: '#f7fafd', borderRadius: '10px', padding: '14px'
      }}>
        <ul>
          <li>
            <strong>Pre-Incubation Program:</strong> ISPROUTE 4.0 - Flagship, exclusive for ISB PGP Co '25.
          </li>
          <li>
            <strong>Incubation Program:</strong> Sector-Agnostic Incubation Program: Offers mentorship, resources.
          </li>
        </ul>
      </div>
      <input
        style={{
          width: '100%', border: '1px solid #d9d9d9', borderRadius: '8px', padding: '10px',
          fontSize: '1em', marginTop: '10px'
        }}
        placeholder="Type your message..."
        disabled
      />
    </div>
  );
}
