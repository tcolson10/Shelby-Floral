import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import About from './components/About';
import PortfolioFull from './components/PortfolioFull';
import TestimonialsFull from './components/TestimonialsFull';
import Contact from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Function to handle smooth scrolling with an offset
  const scrollIfNeeded = (sectionId) => {
    const section = document.getElementById(sectionId);
    const offset = 80; // Adjust this value based on your fixed header's height or any other elements
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    }
  };

  // Adjusted navigation function to handle both in-page navigation and route changes with better handling of timing
  const handleNavigation = (path) => {
    setIsMenuOpen(false);
    if (['home', 'about', 'portfolio', 'pricing', 'testimonials', 'contact'].includes(path)) {
      if (window.location.pathname !== '/') {
        navigate('/').then(() => { // Ensure navigation completes before scrolling
          setTimeout(() => scrollIfNeeded(path), 100); // Adjust timeout as needed
        });
      } else {
        setTimeout(() => scrollIfNeeded(path), 0); // Immediate scroll if already on the page
      }
    } else {
      navigate('/' + path);
    }
  };

  return (
    <div className="app-container">
      <header>
        <Link to="/" className="webTitle" onClick={() => setIsMenuOpen(false)}>
          <img src="/images/portfolio/flower-logo.png" alt="Shelby Floral Logo" className='navLogo' />
        </Link>
        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <nav className={isMenuOpen ? 'nav-active' : ''}>
          <ul>
            <li onClick={() => handleNavigation('home')}>Home</li>
            <li onClick={() => handleNavigation('about')}>About</li>
            <li onClick={() => handleNavigation('pricing')}>Pricing</li>
            <li onClick={() => handleNavigation('portfolio')}>Portfolio</li>
            <li onClick={() => handleNavigation('testimonials')}>Testimonials</li>
            <li onClick={() => handleNavigation('contact')}>Contact</li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/full-portfolio" element={<PortfolioFull />} />
          <Route path="/full-testimonials" element={<TestimonialsFull />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <div className="footer-instagram">
          <a href="https://www.instagram.com/shelby_floral/" target="_blank" rel="noopener noreferrer">
            <img src="/images/portfolio/IG.png" alt="Instagram" className="instagram-logo" />
            <span>Instagram</span>
          </a>
        </div>
        <div className="footer-email">
          Email: <a href="mailto:shelbyfloralcompany@gmail.com" target="_blank" rel="noopener noreferrer">
            shelbyfloralcompany@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
