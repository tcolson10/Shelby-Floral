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

  // Adjusted navigation function to handle both in-page navigation and route changes
  const handleNavigation = (path) => {
    setIsMenuOpen(false);
    // Check if path is part of the home page for smooth scroll
    if (['home', 'about', 'portfolio', 'pricing', 'testimonials', 'contact'].includes(path)) {
      if (window.location.pathname !== '/') {
        // Navigate to home then scroll
        navigate('/');
        setTimeout(() => scrollIfNeeded(path), 100);
      } else {
        scrollIfNeeded(path);
      }
    } else {
      // Navigate to a different route normally
      navigate('/' + path);
    }
  };

  // Function to handle smooth scrolling
  const scrollIfNeeded = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (

    <div className="app-container">
      <header>
        <Link to="/" className="webTitle" onClick={() => setIsMenuOpen(false)}>
          <img src="/images/portfolio/shelby-floral-logo-crop.jpg" alt="Shelby Floral Logo" className='navLogo' />
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
