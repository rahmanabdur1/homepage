import React from 'react';
import './Footer.css';
import  logo from '../../assets/logo-black.webp'

const Footer = () => {
  return (
    <footer className="footer">
        <div className='footer_topsection'>
        <div className='left_section'>
         <div className="footer-logo">
          <img src={logo} alt="Axtra Digital Agency Studio Logo" />
          <div className="footer-description">
          <p>
            When do they work well, and when do they on us and finally, when do
            we actually need how can we avoid them.
          </p>
        </div>    
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        </div> 
        <div className='talk_section'>
            <h2>Let’s talk</h2>
        </div>
        </div> 
        <div>
        <div className="footer-links">
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
          <a href="#career">Career</a>
          <a href="#faq">FAQs</a>
        </div>
        <div className="footer-copyright">
          <p>© 2022 – 2025 | All rights reserved by Wealcoder</p>
        </div>
        </div>       
    </footer>
  );
};

export default Footer;
