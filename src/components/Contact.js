import React, { useRef, useEffect } from 'react';

function Contact() {
    const backgroundRef = useRef(null);
    const containerRef = useRef(null);

    const handleScroll = () => {
        if (backgroundRef.current && containerRef.current) {
            const { top } = containerRef.current.getBoundingClientRect();
            backgroundRef.current.style.transform = `translateY(${top * -1}px)`;
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='contact-container' ref={containerRef}>
            <div className="background-container" ref={backgroundRef}>
                <img src="/images/portfolio/ceremony.jpg" alt="Background" className="background-image" />
            </div>
            <div className="form-content">
                <h1 className='page-title'>Let's Chat!</h1>
                <h3>Planning an event and wanting to get more info? Fill out the fields below to get connected with us - we can't wait to hear from you.</h3>
                <form className='contact-form' action="https://formspree.io/f/mwkgrzrd" method="POST">
                    <label htmlFor="fullName">Your name & your partner's name (if applicable)</label>
                    <input type="text" id="fullName" name="fullName" />

                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" />

                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" />

                    <label htmlFor="location">Location of Event</label>
                    <input type="text" id="location" name="location" />

                    <label htmlFor="date">Date of Event</label>
                    <input type="date" id="date" name="date" />

                    <label htmlFor="eventType">Type of Event (Wedding, Shower, etc.)</label>
                    <input type="text" id="eventType" name="eventType" />

                    <label htmlFor="budget">Your Floral Budget $</label>
                    <input type="text" id="budget" name="budget" />

                    <label htmlFor="description">Tell us a little bit more about what you are wanting (include quantities)</label>
                    <textarea id="description" name="description" rows="5"></textarea>

                    <label htmlFor="instagramHandle">Instagram Handle</label>
                    <input type="text" id="instagramHandle" name="instagramHandle" />

                    <label htmlFor="pinterestLink">Link to Pinterest Board/Inspiration</label>
                    <input type="url" id="pinterestLink" name="pinterestLink" />

                    <div className="submit-button-container">
                        <button type="submit" className="submit-button">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
