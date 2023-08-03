import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-links'>
          <a href='/terms' className='footer-link'>
            T&C
          </a>
          <a href='/privacy' className='footer-link'>
            Privacy Policy
          </a>
          <a href='/contact' className='footer-link'>
            Contact Us
          </a>
        </div>
        <div className='footer-copyright'>
          &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
