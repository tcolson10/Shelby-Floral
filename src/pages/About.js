import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className='about-content-container'>
            <div className='about-image-container'>
                <img src="/images/shelStandFlowers.JPG" alt="Shelby standing with flowers" className='about-page-image' />
            </div>
            <div className='about-text-container'>
                <h1>This is me</h1>
                <h2>I'm really neat</h2>
                <h3>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</h3>
            </div>
        </div>
    );
}

export default About;
