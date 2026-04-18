import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const testimonialsData = [
    {
        text: "I absolutely loved having Shelby Floral do my flowers! The flowers were perfectly on time where I needed them and she made everything so simple and organized for me. It was just one less thing I had to worry about on my wedding day and I was so obsessed with how amazing my florals were! I completely trusted them and their talents and they executed everything PERFECTLY!! 1000% would recommend them!",
        name: "Bailey B."
    },
    {
        text: "Shelby Floral made my dream bouquet for my wedding! The flowers were beautifully put together and made on time so I never had to worry about anything. I loved them, I still look at the pics at least once a week they just were so gorgeous. They were the perfect final touch!",
        name: "Kensie W."
    },
    {
        text: "Shelby Floral is an absolute dream to work with!! They were able to understand and execute my wedding floral vision perfectly. They are SO knowledgeable and made the planning so much fun, instead of stressful. I strongly recommend them to everyone I know.",
        name: "Grace G."
    },
    {
        text: "Shelby Floral was incredible! I feel like the vision I had was kind of scattered, but they executed it perfectly and exceeded any expectations I had. I still get so many compliments on the florals from my wedding!",
        name: "Lacee J."
    },
    {
        text: "Shelby Floral was amazing to work with! I showed them all of my inspo pics and they made all of my wedding flower dreams come true. They made sure I had flowers everywhere I wanted and my bouquet was gorgeous! They also did all the flowers and table settings for my baby shower a year later and it was to die for. They really listened to what I wanted and brought it to life! I can't wait to keep using them for all my future events. Absolutely recommend to anyone and everyone!",
        name: "Michelle C."
    },
    {
        text: "10/10. Booked Shelby Floral after seeing their work on Instagram and they did not disappoint. My arch was the most beautiful thing I have ever seen in my life and I am not exaggerating.",
        name: "Tatum R."
    },
    {
        text: "I was so nervous about finding a florist because flowers are expensive and I really wanted them to be perfect. From our very first consultation I felt completely at ease. They took my very vague Pinterest board and turned it into something so cohesive and stunning that I actually teared up when I saw my bouquet for the first time. My mom is still talking about the centerpieces three months later. Worth every single penny and then some.",
        name: "Audrey M."
    },
    {
        text: "Simple and stunning. That's all I wanted and that's exactly what I got. Thank you!!",
        name: "Jess T."
    },
    {
        text: "We used Shelby Floral for our daughter's wedding and I cannot say enough good things. The ceremony arch was breathtaking — it looked like something out of a magazine. They were so professional and responsive throughout the entire planning process. Several guests asked us for their contact info before we even left the reception. Highly, highly recommend.",
        name: "Diane H."
    },
    {
        text: "Honestly did not think I was a flower person until I saw what Shelby Floral put together. Changed my mind completely. The whole venue felt so warm and romantic and intentional. My husband and I keep saying it was the best decision we made for our wedding.",
        name: "Rylee N."
    },
    {
        text: "They did the florals for my bridal shower and bachelorette and both were absolutely gorgeous. So versatile! Whether it's a big formal wedding or a fun girls' brunch, they can do it all.",
        name: "Savannah K."
    },
    {
        text: "I reached out to Shelby Floral about six months before my wedding not really knowing what I wanted. Over the course of several conversations they helped me figure out a vision I didn't even know I had. On the day itself, everything was set up perfectly and exactly on schedule. I didn't have to think about a single thing. For a bride who was pretty stressed about logistics, that meant the world to me. The flowers were absolutely gorgeous, but honestly the peace of mind was the real gift.",
        name: "Chloe W."
    },
    {
        text: "The bouquets were fresh, full, and exactly the right shades. Looked incredible in photos.",
        name: "Mia F."
    },
    {
        text: "We booked Shelby Floral for a corporate gala and I was blown away. I had assumed they mostly did weddings but they completely nailed a more modern, sleek aesthetic for our event. The arrangements were the first thing every single attendee mentioned. We will absolutely be calling them again.",
        name: "Rachel D."
    },
    {
        text: "Getting married is stressful. Shelby Floral was one of the very few parts of the process that was genuinely fun. They were excited about our vision, they communicated clearly, and they showed up and made it all real. I felt like they actually cared about our day which is more than I can say for some other vendors we worked with.",
        name: "Peyton A."
    },
    {
        text: "Gorgeous work. Fast responses. Fair pricing. What more can you ask for?",
        name: "Lauren S."
    },
    {
        text: "I had a very specific vision — dried florals mixed with fresh, very earthy and neutral tones, nothing too traditional. I was a little worried it might be hard to pull off but they got it immediately. The final result was even better than the inspiration photos I sent. So many people told me our wedding felt different and special and I truly believe the florals had a lot to do with that.",
        name: "Natalie B."
    },
    {
        text: "They did our ceremony flowers and our rehearsal dinner arrangements and both were stunning. Loved working with them so much. Will be recommending to every engaged friend I have!",
        name: "Harper C."
    },
    {
        text: "We had a pretty tight budget for florals and I was upfront about that from the start. Rather than making me feel bad about it, they worked creatively within our budget and the results were stunning. I never once felt like we were getting a lesser experience because we spent less. That kind of thoughtfulness really stood out to us.",
        name: "Brooke V."
    },
    {
        text: "From the welcome sign florals to the last bud vase on the reception tables, everything was perfect. The attention to detail was unreal. You could tell so much care went into every single arrangement. Our photographer actually said our florals were some of the best she had ever shot. That says it all.",
        name: "Olivia T."
    },
];

function TestimonialsFull() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="testimonials-container full-page">
            <div className="page-nav">
                <Link to="/testimonials" className="back-link" style={{ color: 'rgba(255,255,255,0.85)' }}>← Back to Testimonials</Link>
            </div>
            <div className="testimonials-header">
                <h1 className='page-title'>Testimonials</h1>
                <p>Kind words from clients turned friends</p>
            </div>
            <div className="testimonials-list">
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="testimonial-item">
                        <blockquote>"{testimonial.text}"</blockquote>
                        <p className="client-name">{testimonial.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TestimonialsFull;
