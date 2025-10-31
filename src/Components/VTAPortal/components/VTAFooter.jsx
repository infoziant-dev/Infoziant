import { Link } from 'react-router-dom';

const VTAFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="vta-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <img src="/Logo.png" alt="Infoziant" />
            <p className="footer-description">
              Empowering students with high-quality courses to master in-demand skills and advance their careers.
            </p>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/tech">Home</Link></li>
              <li><Link to="/tech/courses">Courses</Link></li>
              {/* <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Sign Up</Link></li> */}
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-subtitle">Support</h4>
            <ul className="footer-links">
              <li><Link to="/help">Help Center</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-subtitle">Contact</h4>
            <div className="contact-info">
              <p><i className="fas fa-map-marker-alt"></i>Akshaya HQ, Rajiv Gandhi Salai, Kazhipattur, Tamil Nadu, Chennai - 603103, India </p>
              <p><i className="fas fa-envelope"></i> <a href="mailto:support@infoziant.com">support@infoziant.com</a></p>
              {/* <p><i className="fas fa-phone"></i>  +1 (314) 732 0300, +91 96000 85988</p> */}
            </div>
            <div className="social-icons">
              
              <a href="https://www.instagram.com/infoziant.inc/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/infoziant/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Copyright Infoziant IT Solutions Inc. All intellectual property rights are reserved. A SOC 2 | ISO 27001:2022 Certified Company
          </p>
          <div className="payment-methods">
            <img src="/payments.png" alt="Payment Methods" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default VTAFooter; 
