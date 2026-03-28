import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text">SCALER</span>
          <span className="logo-dot">.</span>
        </Link>
        
        <nav className="nav-links">
          <a href="/#programs" className="nav-link">Programs</a>
          <Link to="/alumni" className="nav-link">Alumni</Link>
        </nav>
        
        <div className="nav-actions">
          {user ? (
            <>
              <div className="nav-user" style={{display: 'flex', alignItems: 'center', gap: '8px', color: 'white'}}>
                <User size={18} />
                <span style={{fontWeight: '600'}}>{user.name.split(' ')[0]}</span>
              </div>
              <button 
                onClick={handleLogout} 
                className="btn btn-secondary nav-login" 
                style={{padding: '8px 16px', display: 'flex', gap: '6px', alignItems: 'center'}}
              >
                <LogOut size={16} /> Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-secondary nav-login">Log In</Link>
          )}
          <a href="/#programs" className="btn btn-primary nav-cta">Explore Programs</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
