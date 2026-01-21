import React from 'react';
import './FooterMap.css';

const FooterMap = () => {
  return (
    <footer className="footer-container" id="contact">
      <div className="footer-content">
        <div className="footer-info">
          {/* Updated Name for Bangalore Location */}
          <h2 className="footer-logo">ಓವೆನ್ಲಿ ಹೋಮ್ ಬೇಕರ್ಸ್ ಮತ್ತು ಪ್ಯಾಟಿಸ್ಸೆರಿ</h2>
          <p className="address">
            Ground, abcd Station xyz Road,  bakery, next to Pizza, opq Nagar, coding Nagar, alphabet world
          </p>
          <div className="contact-details">
            {/* Updated Bangalore Phone Number */}
            <a href="tel:+910000000000">📞 +91 00000 00000</a>
            <p>⏰ Open: 11:30 AM - 8:30 PM</p>
          </div>
        </div>
        
        <div className="footer-map">
          {/* Updated with the exact Bangalore Red Marker Link */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.942743513686!2d77.6042738!3d12.9754869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1685b2aafeed%3A0xed078cf6ffef0f47!2sOvenly%20Home%20Bakers%20and%20Patisserie!5e0!3m2!1sen!2sin!4v1705844400000!5m2!1sen!2sin" 
            width="100%" 
            height="250" 
            style={{border:0, borderRadius: '30px'}} 
            allowFullScreen="" 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ovenly Home Bakers Bangalore"
          ></iframe>
        </div>
      </div>
      <div className="copyright">
        © 2026 Ovenly Home Bakers Bangalore. Freshly baked in the Garden City.
      </div>
    </footer>
  );
};

export default FooterMap;