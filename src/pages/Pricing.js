import React from 'react';

// Updated array of pricing details
const pricingData = [
    {
        src: "/images/portfolio/Kylie2.JPG",
        alt: "Bridal Party",
        description: ["Bridal Bouquet $175-250+", "Bridesmaid Bouquet $65+", "Boutonniere $18", "Corsage $20", "", "For other contact me for price"]
    },
    {
        src: "/images/portfolio/treeCrop2.jpg",
        alt: "Installations",
        description: ["Arch Piece $350+", "Full Arch $1,000+", "Broken Arch $1,000+", "Aisle Florals $75+", "", "For other contact me for price"]
    },
    {
        src: "/images/portfolio/cakeCrop.jpg",
        alt: "Reception",
        description: ["Centerpieces $50+", "Welcome Sign Florals $40+", "Cake florals $25+", "Cake meadow $75+", "Bud Vases $7 with rented vases $5 without vase", "", "For other please contact me"]
    }
];

function Pricing() {
    return (
        <div className="pricing-page-container">
            <div className="pricing-header" style={{ textAlign: 'center' }}>
                <h1 className='page-title'>Pricing</h1>
                <p>Pricing varies based upon the types of flowers <br />To get an exact quote please contact me</p>
            </div>

            <div className="pricing-container">
                {pricingData.map((item, index) => (
                    <div key={index} className="pricing-photo-container">
                        <img src={item.src} alt={item.alt} className="pricing-photo" />
                        <div className="pricing-text-content"> {/* Additional div for text content if needed */}
                            <h3>{item.alt}</h3>
                            {item.description.map((line, lineIndex) => (
                                <React.Fragment key={lineIndex}>
                                    {lineIndex > 0 && <br />} {/* Adds breaks between lines */}
                                    {line}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pricing;

