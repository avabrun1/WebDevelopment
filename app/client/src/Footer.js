import React from 'react';
import './Footer.css';
import jcu_logo from './assets/jcu_logo.jpg'




function Footer() {
    return (
      <footer className="footer">
        <div>
          <img src={jcu_logo} alt="John Carroll University logo"/>
          <a href="https://www.jcu.edu/" target="_blank" rel="noopener noreferrer" className="jcuLink">Visit jcu.edu</a>
          <p>&copy; For inquiries, contact otapiaduenas@jcu.edu.</p>
        </div>
        <div>
          <h3>Stay Connected with JCU</h3>
              <a href="https://www.facebook.com/JCU1886" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.linkedin.com/school/john-carroll-university/posts/?feedView=all" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://www.tiktok.com/@johncarrolluniversity" target="_blank" rel="noopener noreferrer">TikTok</a>
              <a href="https://x.com/johncarrollu" target="_blank" rel="noopener noreferrer">X</a>
              <a href="https://www.instagram.com/johncarrollu/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.youtube.com/user/JohnCarrollU" target="_blank" rel="noopener noreferrer">Youtube</a>
        </div>
      </footer>
    );
  }
  
  export default Footer;