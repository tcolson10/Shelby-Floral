import React from 'react';

function Contact() {
    return (
        <div className='contact-container'>
            <h1>Let's Chat!</h1> {/* Heading for the Contact Form */}
            <h3>Planning an event and wanting to get more info? This is a great place to start! Fill out the fields below to get<br></br> connected with us - we can't wait to hear from you.</h3>
            <form className='contact-form'>
                <label htmlFor="firstName">Your name & your partner's name (if applicable)</label>
                <input type="text" id="firstName" name="firstName" />

                <label htmlFor="lastName">Phone Number</label>
                <input type="text" id="lastName" name="lastName" />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />

                {/* Placeholder for additional fields */}
                {/* <label htmlFor="newField">New Field:</label> */}
                {/* <input type="text" id="newField" name="newField" /> */}

                <button type="submit" className="submit-button">Send</button>
            </form>
        </div>
    );
}

export default Contact;
