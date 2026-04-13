const pricingData = [
	{
		src: "/images/portfolio/Kylie2.JPG",
		title: "Bridal Party",
		items: ["Bridal Bouquet", "Bridesmaid Bouquet", "Boutonniere", "Corsage"],
	},
	{
		src: "/images/portfolio/treeCrop2.jpg",
		title: "Installations",
		items: ["Arch Piece", "Full Arch", "Broken Arch", "Aisle Florals"],
	},
	{
		src: "/images/portfolio/cakeCrop.jpg",
		title: "Reception",
		items: ["Centerpieces", "Welcome Sign Florals", "Cake Meadow", "Bud Vases"],
	},
];

function Pricing() {
	const scrollToContact = () => {
		const el = document.getElementById("contact");
		if (!el) return;
		const h = document.querySelector("header")?.offsetHeight ?? 60;
		window.scrollTo({
			top: el.getBoundingClientRect().top + window.pageYOffset - h,
			behavior: "smooth",
		});
	};

	return (
		<div className="pricing-page-container">
			<div className="pricing-header reveal">
				<span className="section-eyebrow">Investment</span>
				<h2 className="section-heading">
					Services &amp; <em>Pricing</em>
				</h2>
				<p>Every arrangement is custom quoted — reach out for a personalized proposal</p>
			</div>
			<div className="pricing-cards">
				{pricingData.map((item, i) => (
					<div key={i} className="pricing-card reveal">
						<div className="pricing-card-image">
							<img src={item.src} alt={item.title} loading="lazy" />
						</div>
						<div className="pricing-card-body">
							<h3 className="pricing-card-title">{item.title}</h3>
							<ul className="pricing-service-list">
								{item.items.map((line, j) => (
									<li key={j}>{line}</li>
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
