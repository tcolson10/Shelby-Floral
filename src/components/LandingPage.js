import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';  // Update these paths if necessary
import About from './About';
import Portfolio from './Portfolio';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import Contact from './Contact';

const LandingPage = () => {
    return (
        <div>
            <section id="home">
                <Home />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="pricing">
                <Pricing />
            </section>
            <section id="portfolio">
                <Portfolio />
            </section>
            <section id="testimonials">
                <Testimonials />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    );
};

export default LandingPage;
