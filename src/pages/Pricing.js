import React from 'react';

// Updated array of pricing details
const pricingData = [
    {
        src: "/images/kylieGood.JPG",
        alt: "Bridal Party",
        description: ["Bridal Bouquet $175-250", "Bridesmaid Bouquet $65+", "Boutonniere $18", "Corsage $20", "", "For other contact me for price"]
    },
    {
        src: "/images/treeCrop3.JPG",
        alt: "Installations",
        description: ["Arch Piece $350+", "Full Arch $1,000+", "Broken Arch $1,000+", "Aisle Florals $100+", "", "For other contact me for price"]
    },
    {
        src: "/images/cakeGood.JPG",
        alt: "Reception",
        description: ["Centerpieces $50+", "Welcome Sign Florals $40+", "Cake florals $25+", "Cake meadow $75+", "Bud Vases $7 with rented vases $5 without vase", "", "For other please contact me"]
    }
];

function Pricing() {
    return (
        <div className="pricing-page-container">
            {/* Header Section */}
            <div className="pricing-header" style={{ textAlign: 'center' }}>
                <h1 className='page-title'>Pricing</h1>
                <p>Pricing varies based upon the types of flowers <br></br>To get an exact quote please contact me</p>
            </div>

            {/* Pricing Section */}
            <div className="pricing-container">
                {pricingData.map((item, index) => (
                    <div key={index} className="pricing-photo-container">
                        <img src={item.src} alt={item.alt} className="pricing-photo" />
                        {/* Title from the alt attribute */}
                        <h3>{item.alt}</h3>
                        {/* Description */}
                        {item.description.map((line, lineIndex) => (
                            <React.Fragment key={lineIndex}>
                                {lineIndex > 0 && <br />} {/* Adds breaks between lines */}
                                {line}
                            </React.Fragment>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pricing;

