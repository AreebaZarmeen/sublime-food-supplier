import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.copyRight}>
        &copy; 2025 Sublime Food Suppliers. All rights reserved.
      </p>

      {/* Contact Us link at the bottom */}
      <ul style={styles.linkList}>
        <li style={styles.listItem}>
          <Link to="/contact" style={styles.link}>Contact Us</Link>
        </li>
      </ul>
    </footer>
  );
}

// Inline styles for the footer
const styles = {
  footer: {
    textAlign: 'center',
    padding: '40px 20px',
    background: '#2c3e50', // Darker background color for contrast
    color: '#fff',
    marginTop: '40px',
    borderTop: '4px solid #4CAF50', // Green border at the top
  },
  copyRight: {
    fontSize: '16px',
    marginBottom: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  linkList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    display: 'inline',
    margin: '0 15px',
  },
  link: {
    textDecoration: 'none',
    color: '#4CAF50',
    fontSize: '18px',
    fontWeight: '600',
    transition: 'color 0.3s ease', // Smooth color transition for hover effect
  },
  linkHover: {
    color: '#fff', // Change link color to white on hover
  }
};

export default Footer;
