import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ClothingStore</h3>
            <p>Your trusted fashion partner for quality clothing.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/cart">Cart</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Email: info@clothingstore.com</p>
            <p>Phone: +91 9876543210</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 ClothingStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
