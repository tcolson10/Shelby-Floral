import React from 'react';

// Array of image details
const imageData = [
    { src: "/images/bride.JPG", alt: "Bride image" },
    { src: "/images/ceremony.JPG", alt: "Ceremony image" },
    { src: "/images/Kylie2.JPG", alt: "Image of Kylie 2" },
    { src: "/images/Kylie1.JPG", alt: "Image of Kylie 1" },
    { src: "/images/BrideAndGroomClose.JPG", alt: "Bride and Groom Close-up" },
    { src: "/images/BrideAndGroomFurther.JPG", alt: "Bride and Groom Further Away" },
    { src: "/images/carterAndKenzie.JPG", alt: "Carter and Kenzie" },
    { src: "/images/carterSniffKenzie.JPG", alt: "Carter Sniffing Kenzie" },
    { src: "/images/laceeWGroom.jpg", alt: "Lacee with Groom" },
    { src: "/images/laceeVow.JPG", alt: "Lacee Vow" },
    { src: "/images/shelWeddingFlowers.jpg", alt: "Shelby Wedding Flowers" },
    { src: "/images/grace_and_blake.jpg", alt: "Grace and Blake" },
    { src: "/images/kenzie.jpg", alt: "Kenzie" },
    { src: "/images/Kylie3.JPG", alt: "Image of Kylie 3" }
];

function Portfolio() {
    return (
        <div className="portfolio-page-container">
            <div className="portfolio-header">
                <h1>Portfolio</h1>
                <p>Here's a selection of our latest work.</p>
            </div>
            <div className="portfolio-container">
                {imageData.map((image, index) => (
                    <div key={index} className="portfolio-image-container">
                        <img src={image.src} alt={image.alt} className="portfolio-image" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;