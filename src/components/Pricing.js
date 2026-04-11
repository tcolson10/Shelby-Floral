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
			<div className="pricing-header">
				<h1 className="page-title">Pricing</h1>
				<p>To get a personalized quote please fill out the submission form</p>
			</div>

			<div className="pricing-container">
				{pricingData.map((item, index) => (
					<div key={index} className="pricing-photo-container">
						<img
							src={item.src}
							alt={item.alt}
							className="pricing-photo"
							loading="lazy"
						/>
						<div className="pricing-text-content">
							<h3>{item.alt}</h3>
							<ul className="pricing-service-list">
								{item.description.map((line, lineIndex) => (
									<li key={lineIndex}>{line}</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Pricing;
