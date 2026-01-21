import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text-bubble">
          <h1>Baked with Love in Bengaluru</h1>
          <p>Your favorite neighborhood spot for warm bread and happy memories. ✨</p>
          {/* Change: Using an anchor tag with the ID of the menu section */}
          <a href="#menu" className="order-btn">Explore Menu</a>
        </div>
      </div>
      <div className="hero-visual">
        <img 
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200" 
          alt="Fresh Bread" 
          className="floating-img" 
        />
      </div>
    </div>
  );
};

export default Hero;