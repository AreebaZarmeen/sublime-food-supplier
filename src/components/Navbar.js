import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    const section = e.target.value;
    if (section === 'fruits') {
      navigate('/fruits'); // Navigate to the fruits page (if required)
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
          <Link to="/" style={styles.link}>
            Home
          </Link>
          <Link to="/about" style={styles.link}>
            About
          </Link>
          <select onChange={handleNavigation} style={styles.dropdown}>
            <option value="fruits">Products</option>
            <option value="grapes-section">Grapes</option>
            <option value="potato-section">Potatoes</option>
            <option value="mango-section">Mango</option>
            <option value="orange-section">Orange</option>
            <option value="apple-section">Apple</option>
            <option value="grapefruit-section">Grapefruit</option>
            <option value="melon-section">Melon</option>
            <option value="guava-section">Guava</option>
          </select>
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
  // Image that resizes responsively
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
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: 'rgba(0, 123, 255, 0.8)',
    transition: 'background-color 0.3s, color 0.3s',
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
  },
};

export default Navbar;
