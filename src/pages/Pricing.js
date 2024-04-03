import React from 'react';

function Pricing() {
    return (
        <div className="pricing-page-container">
            <div className="pricing-header" style={{ textAlign: 'center' }}>
                <h1 className='page-title'>Pricing</h1>
                <p>Pricing varies based upon the types of flowers<br />To get an exact quote please contact me</p>
            </div>

            <div className="pricing-container">
                <div className="pricing-photo-container">
                    <img src="/images/portfolio/kylie1.JPG" alt="Bridal Party" className="pricing-photo" />
                    <div className="pricing-text-content">
                        <h3>Bridal Party</h3>
                        Bridal Bouquet $175-250<br />
                        Bridesmaid Bouquet $65+<br />
                        Boutonniere $18<br />
                        Corsage $20<br />
                        <br />For other contact me for price
                    </div>
                </div>

                <div className="pricing-photo-container">
                    <img src="/images/portfolio/tree.JPG" alt="Installations" className="pricing-photo" />
                    <div className="pricing-text-content">
                        <h3>Installations</h3>
                        Arch Piece $350+<br />
                        Full Arch $1,000+<br />
                        Broken Arch $1,000+<br />
                        Aisle Florals $100+<br />
                        <br />For other contact me for price
                    </div>
                </div>

                <div className="pricing-photo-container">
                    <img src="/images/portfolio/ceremony.JPG" alt="Reception" className="pricing-photo" />
                    <div className="pricing-text-content">
                        <h3>Reception</h3>
                        Centerpieces $50+<br />
                        Welcome Sign Florals $40+<br />
                        Cake florals $25+<br />
                        Cake meadow $75+<br />
                        Bud Vases $7 with rented vases $5 without vase<br />
                        <br />For other please contact me
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;

