import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text">SCALER</span>
          <span className="logo-dot">.</span>
        </Link>
        
        <nav className="nav-links">
          <a href="/#programs" className="nav-link">Explore Programs</a>
          <Link to="/alumni" className="nav-link">Alumni</Link>
        </nav>
        
        <div className="nav-actions">
          <button className="btn btn-secondary nav-login">Log In</button>
          <button className="btn btn-primary nav-cta">Explore Programs</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
