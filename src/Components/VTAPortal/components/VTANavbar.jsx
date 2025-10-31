import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const VTANavbar = ({ user, handleLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const handleNavLogout = () => {
    handleLogout();
    setIsMobileMenuOpen(false);
  };
  
  return (
    <header className="vta-navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="logo">
            <Link to="https://www.infoziant.com" target="_blank" rel="noopener noreferrer">
              <img src="/Logo.png" alt="Infoziant" />
              
            </Link>
          </div>
          
          <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <ul>
              <li>
                <Link 
                  to="/tech" 
                  className={location.pathname === '/tech' ? 'active' : ''}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/tech/courses" 
                  className={location.pathname === '/tech/courses' ? 'active' : ''}
                >
                  Courses
                </Link>
              </li>
              {/* {user ? (
                <>
                  <li>
                    <Link 
                      to="/dashboard" 
                      className={location.pathname === '/dashboard' ? 'active' : ''}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/enrolled-courses" 
                      className={location.pathname === '/enrolled-courses' ? 'active' : ''}
                    >
                      My Courses
                    </Link>
                  </li>
                  <li>
                    <button className="btn-logout" onClick={handleNavLogout}>
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link 
                      to="/login" 
                      className={location.pathname === '/login' ? 'active' : ''}
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/register" 
                      className="btn btn-primary"
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              )}*/}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default VTANavbar; 