import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <div className="logo-container">
          {/* This path works because logo.png is in public/images/ */}
          <img src="/images/new logo.png" alt="Vienna Bakery Logo" className="nav-logo-img" />
        </div>
        <div className="brand-text">
          <span className="hindi-name">Ovenly Home Bakers and Patisserie</span>
          <span className="eng-name">ಓವೆನ್ಲಿ ಹೋಮ್ ಬೇಕರ್ಸ್ ಮತ್ತು ಪ್ಯಾಟಿಸ್ಸೆರಿ</span>
        </div>
      </div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#menu" onClick={() => setIsOpen(false)}>Menu</a>
        <a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a>
        <a href="#reviews" onClick={() => setIsOpen(false)}>Reviews</a>
        <a href="#contact" className="nav-cta" onClick={() => setIsOpen(false)}>Find Us</a>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;