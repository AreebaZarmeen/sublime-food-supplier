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
          <Link to="/" style={styles.link} onClick={handleOtherButtonClick}>
            Home
          </Link>

          {/* About Us Button */}
          <Link to="/about" style={styles.link} onClick={handleOtherButtonClick}>
            About Us
          </Link>

          {/* Products Button */}
          <button onClick={handleProductsClick} style={styles.link}>
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
  },
  imageWrapper: {
    position: 'relative',
    overflow: 'hidden', // Prevents image from overflowing out of the container
    width: '100%',
    height: '33vh', // Adjust height for responsiveness
  },
  homeImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ensures the image covers the whole area without distortion
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0, // Image is behind navigation buttons
    transition: 'width 0.5s ease, height 0.5s ease', // Smooth transition when resizing
  },
  navButtonsWrapper: {
    position: 'absolute',
    bottom: '20px', // Positioned 20px from the bottom of the image
    right: '20px', // Positioned 20px from the right of the image
    display: 'flex',
    flexDirection: 'row',
    gap: '15px',
    alignItems: 'center',
    zIndex: 1, // Ensures the buttons appear on top of the image
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 'bold',
    padding: '12px 20px', // Standardized padding for the buttons
    borderRadius: '8px',
    backgroundColor: 'rgba(0, 123, 255, 0.8)',
    transition: 'background-color 0.3s, color 0.3s',
    cursor: 'pointer',
    display: 'inline-block', // Ensures both <Link> and <button> behave similarly
    textAlign: 'center',
    width: '120px', // Fixed width to make all buttons the same size
    verticalAlign: 'middle', // Ensures vertical alignment is the same for button and link
  },
  dropdown: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ddd',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: '#007bff',
    fontWeight: 'bold',
    transition: 'background-color 0.3s, color 0.3s',
    width: 'auto',
    minWidth: '120px', // Ensure dropdown is also consistent with button size
  },
};

export default Navbar;
