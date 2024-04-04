import React from 'react';


const testimonialsData = [
    {
        text: "I absolutely loved having Shelby do my florals! The flowers were perfectly on time where I needed them and she made everything so simple and organized for me. It was just one less thing I had to worry about on my wedding day and I was so obsessed with how amazing my florals were! I completely trusted her and her talents and she executed everything PERFECTLY!! 1000% would recommend her! ",
        name: "Bailey B."
    },
    {
        text: "Shelby made my dream bouquet for my wedding! The flowers were beautifully put together and made on time so I never had to worry about anything. I loved them, I still look at the pics at least once a week they just were so gorgeous. They were the perfect final touch!",
        name: "Kensie W."
    },
    {
        text: "Shelby is an absolute dream to work with!! She was able to understand and execute my wedding floral vision perfectly. She is SO knowledgeable and made the planning so much fun, instead of stressful. I strongly recommend her to everyone I know ",
        name: "Grace G."
    },

    {
        text: "Shelby was incredible! I feel like the vision I had was kind of scattered, but she executed it perfectly and exceeded any expectations I had. I still get so many compliment on the florals from my wedding!",
        name: "Lacee J."
    },
    {
        text:
            "Shelby was amazing to work with! I showed her all of my inspo pics and she made all of my wedding flower dreams come true. She made sure I had flowers everywhere I wanted and my bouquet was gorgeous! She also did all the flowers and table settings for my baby shower a year later and it was to die for. She really listened to what I wanted and brought it to life! I can’t wait to keep using her for all my future events. Absolutely recommend to anyone and everyone!",
        name: "Michelle C. "
    },

];

function Testimonials() {
    return (
        <div className="testimonials-container">
            <div className="testimonials-header">
                <h1 className='page-title'>Testimonials</h1>
                <p>Kind words from clients turned friends</p>
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
