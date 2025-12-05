import React from "react";

// Updated array of pricing details
const pricingData = [
	{
		src: "/images/portfolio/Kylie2.JPG",
		alt: "Bridal Party",
		description: [
			"Bridal Bouquet",
			"Bridesmaid Bouquet",
			"Boutonniere",
			"Corsage",
		],
	},
	{
		src: "/images/portfolio/treeCrop2.jpg",
		alt: "Installations",
		description: ["Arch Piece", "Full Arch", "Broken Arch", "Aisle Florals"],
	},
	{
		src: "/images/portfolio/cakeCrop.jpg",
		alt: "Reception",
		description: [
			"Centerpieces",
			"Welcome Sign Florals",
			"Cake Meadow",
			"Bud Vases",
		],
	},
];

function Pricing() {
	return (
		<div className="pricing-page-container">
			<div className="pricing-header" style={{ textAlign: "center" }}>
				<h1 className="page-title">Pricing</h1>
				<p>To get a personalized quote please fill out the submission form</p>
			</div>

			<div className="pricing-container">
				{pricingData.map((item, index) => (
					<div key={index} className="pricing-photo-container">
						<img src={item.src} alt={item.alt} className="pricing-photo" />
						<div className="pricing-text-content">
							{" "}
							{/* Additional div for text content if needed */}
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
