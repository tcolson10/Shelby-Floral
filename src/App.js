import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <header>
        <a href="/" className="webTitle">
          <h1 className='navTitle'>Shelby Floral</h1>
        </a>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />  {/* This renders the current route's component */}
      </main>
      {/* Updated Footer */}
      <footer className="site-footer">
        <div className="footer-email">
          Email:<a href="mailto:shelbyfloral@gmail.com">shelbyfloral@gmail.com</a>
        </div>
        <div className="footer-instagram">
          <a href="https://www.instagram.com/shelby_floral/" target="_blank" rel="noopener noreferrer">
            <img src="/images/IG.png" alt="Instagram" className="instagram-logo" /> Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
