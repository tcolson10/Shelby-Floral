import React from 'react';
import { Link } from 'react-router-dom';  // Import Link component from react-router-dom

const imageData = [
    { src: "/images/portfolio/IMG_3113.JPG", alt: "Bride image" },
    { src: "/images/portfolio/Kiana Corri Photography- Brooke and Jackson Wedding Day-789_Original.jpg", alt: "Image of Kylie 1" },
    { src: "/images/portfolio/IMG_9534.JPG", alt: "Lacee with Groom" },




    // { src: "/images/portfolio/brideLooking.JPG", alt: "Bride image" },
    // { src: "/images/portfolio/ceremony.JPG", alt: "Ceremony image" },
    // { src: "/images/portfolio/Kylie2.JPG", alt: "Image of Kylie 2" },
    // { src: "/images/portfolio/kylieFlowers.JPG", alt: "Image of Kylie 1" },
    // { src: "/images/portfolio/treeNew.JPG" },
    // { src: "/images/portfolio/treeFarAway.jpg", alt: "Kenzie" },
    // { src: "/images/portfolio/kenzie.jpg", alt: "Kenzie" },
    // { src: "/images/portfolio/brideWBridesmaids.JPG", alt: "Kenzie" },
    // { src: "/images/portfolio/sandCouple.JPG", alt: "Kenzie" },
    // { src: "/images/portfolio/archCody.jpg", alt: "Kenzie" },
    // { src: "/images/portfolio/laceeWGroom.jpg", alt: "Lacee with Groom" },
    // { src: "/images/portfolio/shelBridesmaids.jpg", alt: "Lacee with Groom" },
    // { src: "/images/portfolio/BrideAndGroomClose.JPG", alt: "Bride and Groom Close-up" },
    // { src: "/images/portfolio/cakeCrop.jpg", alt: "Kenzie" },
    // { src: "/images/portfolio/carterAndKenzie.JPG", alt: "Carter and Kenzie" },
];

function Portfolio() {
    return (
        <div className="portfolio-page-container">
            <div className="portfolio-header">
                <h1 className='page-title'>Portfolio</h1>
                <p>A collection of our latest work</p>
                <Link to="/full-portfolio" className="portfolio-button">See More Portfolio</Link>
            </div>
            <div className="portfolio-container">
                {imageData.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} className="portfolio-image" />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
