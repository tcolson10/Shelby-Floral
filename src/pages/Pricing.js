import React from 'react';

// Array of pricing details
const pricingData = [
    { src: "/images/cody_and_michelle.JPG", alt: "Event 1", description: "Event 1 Description" },
    { src: "/images/closeUpTree.JPG", alt: "Event 2", description: "Event 2 Description" },
    { src: "/images/laceeCake.JPG", alt: "Event 3", description: "Event 3 Description" }
];

function Pricing() {
    return (
        <div className="pricing-page-container">
            {/* Header Section */}
            <div className="pricing-header" style={{ textAlign: 'center' }}>
                <h1>Pricing</h1>
                <p>Explore our pricing options.</p>
            </div>

            {/* Pricing Section */}
            <div className="pricing-container">
                {pricingData.map((item, index) => (
                    <div key={index} className="pricing-photo-container">
                        <img src={item.src} alt={item.alt} className="pricing-photo" />
                        <p className="pricing-photo-text">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pricing;
