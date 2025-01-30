import React from 'react';

function Contact() {
    return (
        <div className='contact-container'>
            <h1 className='page-title'>Let's Chat!</h1>
            <h3>Fill out the form and we will get back to you ASAP</h3>
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

                <label htmlFor="budget">Your Floral Budget</label>
                <input type="text" id="budget" name="budget" />

                <label htmlFor="budget">What are your colors?</label>
                <input type="text" id="budget" name="colors" />

                <label htmlFor="budget">Specific flowers you want included (if applicable)</label>
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
    );
}

export default Contact;

