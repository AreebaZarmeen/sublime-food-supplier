import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Footer() {
  const [hover, setHover] = useState(false); // Track hover state

  return (
    <footer style={styles.footer}>
      <p style={styles.copyRight}>
        &copy; 2025 Sublime Food Suppliers. All rights reserved.
      </p>

      {/* Contact Us link at the bottom */}
      <ul style={styles.linkList}>
        <li style={styles.listItem}>
          <Link 
            to="/contact" 
            style={hover ? { ...styles.link, ...styles.linkHover } : styles.link}
            onMouseEnter={() => setHover(true)}  // Set hover to true when mouse enters
            onMouseLeave={() => setHover(false)} // Set hover to false when mouse leaves
          >
            Contact Us
          </Link>
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
    fontFamily: 'Arial, sans-serif',
  },
  copyRight: {
    fontSize: '16px',
    marginBottom: '20px',
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
  },
  
  // Media Queries for responsiveness
  '@media (max-width: 768px)': {
    footer: {
      padding: '20px 10px', // Reduced padding for smaller screens
    },
    copyRight: {
      fontSize: '14px', // Smaller font size for copyright
      marginBottom: '15px',
    },
    linkList: {
      textAlign: 'center', // Center links on smaller screens
    },
    listItem: {
      display: 'block', // Stack the items vertically
      margin: '5px 0', // Adjust margins for better spacing
    },
    link: {
      fontSize: '16px', // Reduce link size for smaller screens
    },
  },

  '@media (max-width: 480px)': {
    footer: {
      padding: '15px 5px', // Even more reduced padding on very small screens
    },
    copyRight: {
      fontSize: '14px', // Consistent with medium screen size
      marginBottom: '10px',
    },
    linkList: {
      marginTop: '10px', // Add some spacing between text and links
    },
    link: {
      fontSize: '16px', // Ensure readability on small devices
    },
  },
};

export default Footer;
