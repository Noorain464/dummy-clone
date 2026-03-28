import { Globe, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="nav-logo">
              <span className="logo-text">SCALER</span>
              <span className="logo-dot">.</span>
            </div>
            <p className="brand-desc">
              Empowering developers to achieve their maximum potential and get hired by top product companies.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon"><Globe size={20} /></a>
              <a href="#" className="social-icon"><Mail size={20} /></a>
              <a href="#" className="social-icon"><Phone size={20} /></a>
              <a href="#" className="social-icon"><MapPin size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links-group">
            <h4>Programs</h4>
            <ul>
              <li><a href="#">Scaler Academy</a></li>
              <li><a href="#">Data Science & ML</a></li>
              <li><a href="#">Scaler Neovarsity</a></li>
              <li><a href="#">Scaler School of Tech</a></li>
            </ul>
          </div>
          
          <div className="footer-links-group">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Masterclass</a></li>
              <li><a href="#">Scaler Topics</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Outcome Report</a></li>
            </ul>
          </div>
          
          <div className="footer-links-group">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact Support</a></li>
              <li><a href="#">Terms & Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Scaler by Interviewbit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
