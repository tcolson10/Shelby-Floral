import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

function Home() {
    return (
        <CSSTransition in={true} appear={true} timeout={300} classNames="page-transition">
            <div className='content-container' style={{ backgroundImage: "url('/images/portfolio/rosesCloseUp.JPG')" }}>
                <div className='text-overlay'>
                    <h1>SHELBY FLORAL</h1>
                    <h2>Creating beautiful, bright, romantic florals that make your moments unforgettable.</h2>
                    <Link to="/about" className="button-link">About Me</Link>
                </div>
            </div>
        </CSSTransition>
    );
}

export default Home;
