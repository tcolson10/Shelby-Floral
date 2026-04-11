import React from 'react';

function Contact() {
    return (
        <div className='contact-container'>
            <h1 className='page-title'>Let's Chat!</h1>
            <h3>Fill out the form and we will get back to you ASAP</h3>
            <form className='contact-form' action="https://formspree.io/f/mwkgrzrd" method="POST">
                <div className="form-group">
                    <label className="form-label" htmlFor="fullName">Your name & your partner's name (if applicable)</label>
                    <input type="text" id="fullName" name="fullName" />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="location">Location of Event</label>
                    <input type="text" id="location" name="location" />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="date">Date of Event</label>
                    <input type="date" id="date" name="date" />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="eventType">Type of Event (Wedding, Shower, etc.)</label>
                    <input type="text" id="eventType" name="eventType" />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="budget">Your Floral Budget</label>
                    <input type="text" id="budget" name="budget" />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="colors">What are your colors?</label>
                    <input type="text" id="colors" name="colors" />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="flowers">Specific flowers you want included (if applicable)</label>
                    <input type="text" id="flowers" name="flowers" />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="description">Tell us a little bit more about what you are wanting (include quantities)</label>
                    <textarea id="description" name="description" rows="5"></textarea>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="instagramHandle">Instagram Handle</label>
                    <input type="text" id="instagramHandle" name="instagramHandle" />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="pinterestLink">Link to Pinterest Board/Inspiration</label>
                    <input type="url" id="pinterestLink" name="pinterestLink" />
                </div>

                <div className="submit-button-container">
                    <button type="submit" className="submit-button">Send</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
