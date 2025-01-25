import React from 'react';

function ContactUS() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>

      <div style={styles.content}>
        <p style={styles.paragraph}>
          <strong>Email:</strong> <span style={styles.infoText}>waseem-khan-ghori-mqm@outlook.com</span>
        </p>

        <p style={styles.paragraph}>
          <strong>Phone:</strong> <span style={styles.infoText}>+92 332 8290382</span>
        </p>

        <p style={styles.paragraph}>
          <strong>Location:</strong>
          <span style={styles.infoText}> House#380 College Road, Sir Syed Town 213, Faisalabad, Pakistan, 38000</span>
        </p>
      </div>
    </div>
  );
}

// Inline styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '40px 20px',
    margin: '0 auto',
    maxWidth: '800px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    color: '#4CAF50',
    marginBottom: '30px',
    fontSize: '28px',
    fontWeight: '700',
  },
  content: {
    fontSize: '18px',
    color: '#333',
    lineHeight: '1.6',
  },
  paragraph: {
    marginBottom: '20px',
  },
  infoText: {
    color: ' #5D8AA8',
    fontWeight: '600',
    wordBreak: 'break-word',
  },
};

export default ContactUS;
