import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Fruits from './components/Fruits';
import SuccessStories from './components/SuccessStories';
import ContactUs from './components/ContactUS';
import AboutUs from './components/AboutUs';

import Navbar from './components/Navbar';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      {/* Navbar Component */}
      <Navbar />

      {/* Routes for Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/success" element={<SuccessStories />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
      
      </Routes>

      {/* Footer Component */}
      <Footer />
    </Router>
  );
}

export default App;
