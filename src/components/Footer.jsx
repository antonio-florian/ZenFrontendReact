import React from 'react';
import './Footer.css';

// Footer component for Zen app
function Footer() {
  return (
    <footer className="zen-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@zenapp.com</p>
          <p>Twitter: @zenapp</p>
        </div>
        <div className="footer-section">
          <h4>Information</h4>
          <p>About Zen</p>
          <p>FAQ</p>
        </div>
        <div className="footer-section">
          <h4>Copyright</h4>
          <p>&copy; {new Date().getFullYear()} Zen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
