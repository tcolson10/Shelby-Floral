import React, { useEffect } from 'react';

// Array of image details
const imageData = [

    { src: "/images/portfolio/Kiana Corri Photography- Brooke and Jackson Wedding Day-792_Original.jpg", alt: "Lacee with Groom" },
    { src: "/images/portfolio/IMG_6645.JPG", alt: "Lacee with Groom" },
    { src: "/images/portfolio/IMG_3110.JPG", alt: "Lacee with Groom" },
    { src: "/images/portfolio/IMG_1690.JPG", alt: "Lacee with Groom" },
    { src: "/images/portfolio/IMG_8252.JPG", alt: "Lacee with Groom" },
    { src: "/images/portfolio/IMG_9441.JPG", alt: "Lacee with Groom" },
    { src: "/images/portfolio/IMG_4007.JPG", alt: "Lacee with Groom" },
    { src: "/images/portfolio/IMG_1362.JPG", alt: "Lacee with Groom" },
    { src: "/images/portfolio/treeFarAway.jpg", alt: "Kenzie" },
    { src: "/images/portfolio/IMG_1634.JPG", alt: "Lacee with Groom" },
    { src: "/images/portfolio/IMG_7329.JPG", alt: "Lacee with Groom" },
    { src: "/images/portfolio/IMG_8955.JPG", alt: "Lacee with Groom" },
    { src: "/images/portfolio/IMG_4006.JPG", alt: "Lacee with Groom" },
    { src: "/images/portfolio/C8484553-D2B5-4270-AFCC-A00506B5CC09.JPG", alt: "Lacee with Groom" },
    { src: "/images/portfolio/IMG_9453.JPG", alt: "Lacee with Groom" },
    { src: "/images/portfolio/laceeWGroom.jpg", alt: "Lacee with Groom" },
    { src: "/images/portfolio/IMG_2952.JPG", alt: "Lacee with Groom" },
    { src: "/images/portfolio/closeUpGirl.JPG", alt: "Lacee with Groom" },




];

function PortfolioFull() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the window on component mount
    }, []); // Empty dependency array ensures it runs only once after the initial render

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

export default PortfolioFull;
