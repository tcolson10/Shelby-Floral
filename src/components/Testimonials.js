import React from 'react';
import { Link } from 'react-router-dom';  // Import Link component from react-router-dom

const testimonialsData = [
    {
        text: "Shelby made my dream bouquet for my wedding! The flowers were beautifully put together and made on time so I never had to worry about anything. I loved them, I still look at the pics at least once a week they just were so gorgeous. They were the perfect final touch!",
        name: "Kensie W."
    },
    {
        text: "Shelby is an absolute dream to work with!! She was able to understand and execute my wedding floral vision perfectly. She is SO knowledgeable and made the planning so much fun, instead of stressful. I strongly recommend her to everyone I know ",
        name: "Grace G."
    },
    {
        text: "Shelby was amazing to work with! I showed her all of my inspo pics and she made all of my wedding flower dreams come true. She made sure I had flowers everywhere I wanted and my bouquet was gorgeous! She also did all the flowers and table settings for my baby shower a year later and it was to die for. She really listened to what I wanted and brought it to life! I can’t wait to keep using her for all my future events. Absolutely recommend to anyone and everyone!",
        name: "Michelle C. "
    },
];

function Testimonials() {
    return (
        <div className="testimonials-container">
            <div className="testimonials-header">
                <h1 className='page-title'>Testimonials</h1>
                <p>Kind words from clients turned friends</p>
                {/* Link to the full testimonials page */}
                <Link to="/full-testimonials" className="testimonials-button">See All Testimonials</Link>
            </div>
            <div className="testimonials-list">
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="testimonial-item">
                        <blockquote>"{testimonial.text}"</blockquote>
                        <p className="client-name">- {testimonial.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
