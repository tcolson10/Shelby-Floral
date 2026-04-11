import { useEffect } from "react";
import { Link } from "react-router-dom";

const imageData = [
	{ src: "/images/portfolio/IMG_0597.jpeg", alt: "Wedding florals" },
	{ src: "/images/portfolio/IMG_1708.jpg", alt: "Wedding florals" },
	{ src: "/images/portfolio/IMG_4485.jpg", alt: "Wedding florals" },
	{ src: "/images/portfolio/IMG_4486.jpg", alt: "Wedding florals" },
	{ src: "/images/portfolio/IMG_8790.jpg", alt: "Wedding florals" },
	{
		src: "/images/portfolio/69E94533-5E79-4BEE-8264-76315704CB4E.jpeg",
		alt: "Wedding florals",
	},
	{
		src: "/images/portfolio/D089FC39-EF2A-42EA-B9C0-B025D0066451.jpeg",
		alt: "Wedding florals",
	},
	{ src: "/images/portfolio/IMG_0413.jpeg", alt: "Wedding florals" },
	{ src: "/images/portfolio/IMG_1325.jpg", alt: "Wedding florals" },
	{ src: "/images/portfolio/IMG_6008.jpg", alt: "Wedding florals" },
	{ src: "/images/portfolio/IMG_6141.jpg", alt: "Wedding florals" },
	{ src: "/images/portfolio/IMG_6162.jpg", alt: "Wedding florals" },
	{ src: "/images/portfolio/IMG_6428.jpeg", alt: "Wedding florals" },
	{ src: "/images/portfolio/IMG_6515.jpg", alt: "Wedding florals" },
	{ src: "/images/portfolio/IMG_6981.jpg", alt: "Wedding florals" },
	{ src: "/images/portfolio/IMG_6983.jpg", alt: "Wedding florals" },
	{ src: "/images/portfolio/IMG_7216.jpg", alt: "Wedding florals" },
	{ src: "/images/portfolio/IMG_8071.jpeg", alt: "Wedding florals" },
	{ src: "/images/portfolio/013355F8-6967-4C7B-AF4E-5F760C595FA5.jpeg", alt: "Wedding florals" },
	{ src: "/images/portfolio/9F174CF3-66EE-4E7F-A50D-5F61FF8BD789.jpeg", alt: "Wedding florals" },
	{ src: "/images/portfolio/A2F2D38A-6E95-41EA-B5C8-0381F43D38C5.jpeg", alt: "Wedding florals" },
	{ src: "/images/portfolio/AC214E17-8B4E-4A21-8C80-087A23B7C857.jpeg", alt: "Wedding florals" },
	{ src: "/images/portfolio/D4A2986D-C0BA-41FD-BEB3-6029C8EF0DF0.jpeg", alt: "Wedding florals" },
	{ src: "/images/portfolio/IMG_0571.jpeg", alt: "Wedding florals" },
	{ src: "/images/portfolio/IMG_1672.jpg", alt: "Wedding florals" },
	{ src: "/images/portfolio/IMG_3099.jpeg", alt: "Wedding florals" },
	{ src: "/images/portfolio/IMG_6001.jpg", alt: "Wedding florals" },
	{ src: "/images/portfolio/IMG_7238.jpg", alt: "Wedding florals" },
	{ src: "/images/portfolio/IMG_7602.jpg", alt: "Wedding florals" },
	{ src: "/images/portfolio/lol13.jpg", alt: "Wedding florals" },
	{ src: "/images/portfolio/o.jpg", alt: "Wedding florals" },
	{ src: "/images/portfolio/rose.jpg", alt: "Wedding florals" },
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
