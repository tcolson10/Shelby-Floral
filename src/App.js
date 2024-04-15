import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import './App.css';
import './index.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Location hook from react-router-dom to detect route changes
  const location = useLocation();

  // Initialize Google Analytics and track page views
  useEffect(() => {
    ReactGA.initialize('G-9P0D4PPB65'); // Replace YOUR_TRACKING_ID with your Google Analytics tracking ID
    ReactGA.pageview(location.pathname + location.search);
  }, [location]); // This will trigger the effect every time the location changes

  return (
    <div className="app-container">
      <header>
        <Link to="/" className="webTitle">
          <img src="/images/portfolio/shelby-floral-logo-crop.jpg" alt="Shelby Floral Logo" className='navLogo' />
        </Link>
        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {/* Hamburger Icon */}
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <nav className={isMenuOpen ? 'nav-active' : ''}>
          <ul>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</Link></li>
            <li><Link to="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link></li>
            <li><Link to="/testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="footer-instagram">
          <a href="https://www.instagram.com/shelby_floral/" target="_blank" rel="noopener noreferrer">
            <img src="/images/portfolio/IG.png" alt="Instagram" className="instagram-logo" /> {' '}
            <span style={{ fontWeight: 'normal' }}>Instagram</span>
          </a>
        </div>
        <div className="footer-email">
          Email:{' '}<a href="mailto:shelbyfloralcompany@gmail.com" target="_blank" rel="noopener noreferrer">
            <span style={{ fontWeight: 'normal' }}>shelbyfloralcompany@gmail.com</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
