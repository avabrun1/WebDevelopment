import React from 'react';
import './Footer.css';
import jcu_logo from './assets/jcu_logo.png'




function Footer() {
    return (
      <footer className="footer">
        <div>
          <img src={jcu_logo} alt="John Carroll University logo" className="footerImage"/>
          <a href="https://www.jcu.edu/" target="_blank" rel="noopener noreferrer" className="jcuLink">Visit jcu.edu</a>
          <p>&copy; For inquiries, contact otapiaduenas@jcu.edu.</p>
        </div>
        <div>
          <h3>Stay Connected with JCU</h3>
              <a href="https://www.facebook.com/JCU1886" target="_blank" rel="noopener noreferrer" className="socialLink">Facebook</a>
              <a href="https://www.linkedin.com/school/john-carroll-university/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="socialLink">LinkedIn</a>
              <a href="https://www.tiktok.com/@johncarrolluniversity" target="_blank" rel="noopener noreferrer" className="socialLink">TikTok</a>
              <a href="https://x.com/johncarrollu" target="_blank" rel="noopener noreferrer" className="socialLink">X</a>
              <a href="https://www.instagram.com/johncarrollu/" target="_blank" rel="noopener noreferrer" className="socialLink">Instagram</a>
              <a href="https://www.youtube.com/user/JohnCarrollU" target="_blank" rel="noopener noreferrer" className="socialLink">Youtube</a>
        </div>
      </footer>
    );
  }
  
  export default Footer;