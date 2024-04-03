import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className='about-content-container'>
            <div className='about-image-container'>
                <img src="/images/portfolio/shelStandFlowers.JPG" alt="Shelby standing with flowers" className='about-page-image' />
            </div>
            <div className='about-text-container'>
                <h1>Hi, my name is Shelby Colson.</h1>
                <h3>
                    The hands behind Shelby Floral. I absolutely LOVE everything, flowers! I got my start at the cutest floral shop where I was trained as a designer and have been creating ever since.  I am so passionate about the work I do and am a perfectionist when it comes to my floral creations. I have my clients' wants and needs in mind at all times when creating. <br></br> <br></br>
                    I would love to get to know you and what your hopes and dreams are when it comes to your florals for those special days in your life. Flowers add so much beauty to those days and can be preserved within photos forever.
                    <br></br><br></br>I am SO SO happy you are here!
                </h3>
            </div>
        </div>
    );
}

export default About;
