import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // Function to handle products button click
  const handleProductsClick = () => {
    navigate('/fruits');
    setDropdownVisible(true); // Show dropdown when navigating to fruits page
  };

  // Function to handle other button clicks and hide the dropdown
  const handleOtherButtonClick = () => {
    setDropdownVisible(false); // Hide the dropdown when clicking other buttons
  };

  // Handle the selection from the dropdown menu
  const handleNavigation = (e) => {
    const section = e.target.value;
    if (section === 'fruits') {
      navigate('/fruits'); // Stay on the fruits page
    } else {
      const targetSection = document.getElementById(section);
      if (targetSection) {
        // Smooth scroll to the section with a slight offset
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div style={styles.container}>
      {/* Home Image */}
      <div style={styles.imageWrapper}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/home2.avif`} // Using the correct path with process.env.PUBLIC_URL
          alt="Home"
          style={styles.homeImage}
        />

        {/* Navigation Buttons on Image */}
        <div style={styles.navButtonsWrapper}>
          {/* Home Button */}
          <Link to="/" style={styles.button} onClick={handleOtherButtonClick}>
            Home
          </Link>

          {/* About Us Button */}
          <Link to="/about" style={styles.button} onClick={handleOtherButtonClick}>
            About Us
          </Link>

          {/* Products Button (without background color) */}
          <button onClick={handleProductsClick} style={styles.buttonWithoutBg}>
            Products
          </button>

          {/* Dropdown, appears when the user is on the fruits page */}
          {isDropdownVisible && (
            <select onChange={handleNavigation} style={styles.dropdown}>
              <option value="fruits">Items</option>
              <option value="grapes-section">Grapes</option>
              <option value="potato-section">Potatoes</option>
              <option value="mango-section">Mango</option>
              <option value="orange-section">Orange</option>
              <option value="apple-section">Apple</option>
              <option value="grapefruit-section">Grapefruit</option>
              <option value="melon-section">Melon</option>
              <option value="guava-section">Guava</option>
            </select>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    position: 'relative',
    fontFamily: 'Arial, sans-serif',
  },
  imageWrapper: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '33vh',
  },
  homeImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
    transition: 'width 0.5s ease, height 0.5s ease',
  },
  navButtonsWrapper: {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    display: 'flex',
    flexDirection: 'row',
    gap: '15px',
    alignItems: 'center',
    zIndex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  
  // Common button styles (for Home and About Us buttons)
  button: {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 'bold',
    padding: '12px 20px',
    borderRadius: '15px',
    transition: 'background-color 0.3s, color 0.3s',
    cursor: 'pointer',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '150px',
    height: '50px',
    backgroundColor: '#82C8E5',
    marginBottom: '10px',
    boxSizing: 'border-box',
    border: '1px solid ',
    fontSize: '24px', // Ensure consistent font size across all buttons
  },

  // Products button without background color
  buttonWithoutBg: {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 'bold',
    padding: '12px 20px',
    borderRadius: '15px',
    transition: 'color 0.3s',
    cursor: 'pointer',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '150px',
    height: '50px',
    marginBottom: '10px',
    backgroundColor: '#82C8E5', // Remove the background color
    border: '1px solid ', // Transparent border
    boxSizing: 'border-box',
    fontSize: '24px', // Match font size with other buttons
  },
  
  dropdown: {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
    padding: '0 10px',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    border: '1px solid #ddd',
    width: '250px',
    height: '40px',
    marginBottom: '10px',
  },

  // Responsive styles for smaller screens
  '@media (max-width: 768px)': {
    imageWrapper: {
      height: '20vh',
    },
    navButtonsWrapper: {
      bottom: '10px',
      right: '10px',
      flexDirection: 'column',
      gap: '10px',
    },
    button: {
      width: '100%',
      fontSize: '14px',
    },
    buttonWithoutBg: {
      width: '100%',
      fontSize: '14px',
      border: '2px solid transparent', // Transparent border on smaller screens as well
    },
    dropdown: {
      width: '100%',
      marginBottom: '20px',
    },
  },
};

export default Navbar;
