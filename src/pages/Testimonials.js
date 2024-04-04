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
            "Shelby was a dream to work with for our wedding florals! From the beginning, she captured our vision perfectly, bringing it to life with stunning arrangements that exceeded our expectations. Her professionalism and creativity were evident, making our venue look like a fairytale. The flowers were not only beautiful but also delivered on time, allowing us to relax and enjoy our day. Shelby's passion and talent made our wedding unforgettable, and I can't recommend her enough!",
        name: "Emma T."
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
