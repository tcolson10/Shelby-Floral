import React from 'react';
import { Link } from 'react-router-dom';  // Import Link component from react-router-dom

const testimonialsData = [
    {
        text: "Shelby Floral made my dream bouquet for my wedding! The flowers were beautifully put together and made on time so I never had to worry about anything. I loved them, I still look at the pics at least once a week they just were so gorgeous. They were the perfect final touch!",
        name: "Kensie W."
    },
    {
        text: "Shelby Floral is an absolute dream to work with!! They were able to understand and execute my wedding floral vision perfectly. They are SO knowledgeable and made the planning so much fun, instead of stressful. I strongly recommend them to everyone I know ",
        name: "Grace G."
    },
    {
        text: "Shelby Floral was amazing to work with! I showed them all of my inspo pics and they made all of my wedding flower dreams come true. They made sure I had flowers everywhere I wanted and my bouquet was gorgeous! They also did all the flowers and table settings for my baby shower a year later and it was to die for. They really listened to what I wanted and brought it to life! I can’t wait to keep using them for all my future events. Absolutely recommend to anyone and everyone!",
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
