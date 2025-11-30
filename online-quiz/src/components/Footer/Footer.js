import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="landing-footer">
      <div className="footer-col logo-col">
        <div className="logo">Quizzy</div>
        <p>The ultimate quiz platform for students and teachers. Join today!</p>
        {/* Social Icons Placeholder */}
        <div className="social-links">
            {/* Replace with actual social icons */}
            <a href="#">📘</a>
            <a href="#">📸</a>
            <a href="#">🐦</a>
            <a href="#">👔</a>
        </div>
      </div>
      <div className="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>For Teachers</h4>
        <ul>
          <li>Resources</li>
          <li>Contact Us</li>
          <li>Careers</li>
          <li>Terms</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Contacts us</h4>
        <p>✉️ hello@company.com</p>
        <p>📞 414-221-5098</p>
        <p>📍 794 Mcallister St, San Francisco, 94102</p>
      </div>
    </footer>
  );
}

export default Footer;