import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className='content-container'>
                <img src="/images/rosesCloseUp.JPG" alt="Shelby home" className='HomePageImage' />
                <div className='text-overlay'>
                    <h1>SHELBY FLORAL</h1>
                    <h2>Creating beautiful, bright, romantic florals that make your moments unforgettable.</h2>
                    <Link to="/about" className="button-link">About Me</Link>
                </div>
            </div>
        </>
    );
}

export default Home;
