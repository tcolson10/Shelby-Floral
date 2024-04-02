import React from 'react';


// Array of image details
const imageData = [
    { src: "/images/brideLooking.JPG", alt: "Bride image" },
    { src: "/images/ceremony.JPG", alt: "Ceremony image" },
    { src: "/images/Kylie2.JPG", alt: "Image of Kylie 2" },
    { src: "/images/kylieFlowers.JPG", alt: "Image of Kylie 1" },
    { src: "/images/treeNew.jpg", alt: "Kenzie" },
    { src: "/images/treeFarAway.jpg", alt: "Kenzie" },
    { src: "/images/kenzie.jpg", alt: "Kenzie" },
    { src: "/images/grace-and-blake1.JPG", alt: "Carter and Kenzie" },
    { src: "/images/brideWBridesmaids.jpg", alt: "Kenzie" },
    { src: "/images/sandCouple.jpg", alt: "Kenzie" },
    { src: "/images/archCody.jpg", alt: "Kenzie" },
    { src: "/images/laceeWGroom.jpg", alt: "Lacee with Groom" },
    { src: "/images/shelBridesmaids.jpg", alt: "Lacee with Groom" },
    { src: "/images/BrideAndGroomClose.JPG", alt: "Bride and Groom Close-up" },
    { src: "/images/cakeCrop.jpg", alt: "Kenzie" },
    { src: "/images/carterAndKenzie.JPG", alt: "Carter and Kenzie" },

];


function Portfolio() {
    return (
        <div className="portfolio-page-container">
            <div className="portfolio-header">
                <h1 className='page-title'>Portfolio</h1>
                <p>A collection of our latest work</p>
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