import { useEffect } from "react";
import { Link } from "react-router-dom";

const imageData = [
	{
		src: "/images/portfolio/Kiana Corri Photography- Brooke and Jackson Wedding Day-792_Original.jpg",
		alt: "Brooke and Jackson wedding florals",
	},
	{ src: "/images/portfolio/IMG_6645.JPG", alt: "Wedding floral arrangement" },
	{ src: "/images/portfolio/IMG_3110.JPG", alt: "Wedding floral arrangement" },
	{ src: "/images/portfolio/IMG_1690.JPG", alt: "Wedding florals" },
	{ src: "/images/portfolio/IMG_8252.JPG", alt: "Wedding florals" },
	{ src: "/images/portfolio/IMG_9441.JPG", alt: "Wedding florals" },
	{ src: "/images/portfolio/IMG_4007.JPG", alt: "Wedding florals" },
	{ src: "/images/portfolio/IMG_1362.JPG", alt: "Wedding florals" },
	{ src: "/images/portfolio/treeFarAway.jpg", alt: "Floral arch installation" },
	{ src: "/images/portfolio/IMG_1634.JPG", alt: "Wedding florals" },
	{ src: "/images/portfolio/IMG_7329.JPG", alt: "Wedding florals" },
	{ src: "/images/portfolio/sneak-1.jpeg", alt: "Wedding floral preview" },
	{ src: "/images/portfolio/IMG_8955.JPG", alt: "Wedding florals" },
	{ src: "/images/portfolio/IMG_4006.JPG", alt: "Wedding florals" },
	{
		src: "/images/portfolio/C8484553-D2B5-4270-AFCC-A00506B5CC09.JPG",
		alt: "Wedding florals",
	},
	{
		src: "/images/portfolio/laceeWGroom.jpg",
		alt: "Lacee and groom, wedding florals",
	},
	{ src: "/images/portfolio/IMG_2952.JPG", alt: "Wedding florals" },
	{ src: "/images/portfolio/closeUpGirl.JPG", alt: "Bride with bouquet" },
];

function PortfolioFull() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="portfolio-page-container full-page">
			<div className="page-nav">
				<Link to="/portfolio" className="back-link">
					← Back to Home
				</Link>
			</div>
			<div className="portfolio-header">
				<h1 className="page-title">Portfolio</h1>
				<p>A collection of our latest work</p>
			</div>
			<div className="portfolio-container">
				{imageData.map((image, index) => (
					<img
						key={index}
						src={image.src}
						alt={image.alt}
						className="portfolio-image"
						loading="lazy"
					/>
				))}
			</div>
		</div>
	);
}

export default PortfolioFull;
