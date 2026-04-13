import { useEffect } from "react";
import { Link } from "react-router-dom";

const imageData = [
	"/images/portfolio/IMG_1325.jpg",
	"/images/portfolio/IMG_4486.jpg",
	"/images/portfolio/013355F8-6967-4C7B-AF4E-5F760C595FA5.jpeg",
	"/images/portfolio/A2F2D38A-6E95-41EA-B5C8-0381F43D38C5.jpeg",
	"/images/portfolio/IMG_1708.jpg",
	"/images/portfolio/9F174CF3-66EE-4E7F-A50D-5F61FF8BD789.jpeg",
	"/images/portfolio/IMG_0597.jpeg",
	"/images/portfolio/IMG_8790.jpg",
	"/images/portfolio/IMG_0413.jpeg",
	"/images/portfolio/69E94533-5E79-4BEE-8264-76315704CB4E.jpeg",
	"/images/portfolio/IMG_6141.jpg",
	"/images/portfolio/IMG_6162.jpg",
	"/images/portfolio/IMG_3099.jpeg",
	"/images/portfolio/IMG_3110.JPG",
	"/images/portfolio/IMG_6645.JPG",
	"/images/portfolio/IMG_6008.jpg",
	"/images/portfolio/IMG_6001.jpg",
	"/images/portfolio/IMG_6428.jpeg",
	"/images/portfolio/IMG_6981.jpg",
	"/images/portfolio/IMG_6983.jpg",
	"/images/portfolio/IMG_8071.jpeg",
	"/images/portfolio/IMG_7238.jpg",
	"/images/portfolio/IMG_7216.jpg",
	"/images/portfolio/IMG_7602.jpg",
	"/images/portfolio/D089FC39-EF2A-42EA-B9C0-B025D0066451.jpeg",
	"/images/portfolio/lol13.jpg",
	"/images/portfolio/o.jpg",
	"/images/portfolio/Kiana Corri Photography- Brooke and Jackson Wedding Day-792_Original.jpg",
	"/images/portfolio/IMG_1690.JPG",
	"/images/portfolio/sneak-1.jpeg",
	"/images/portfolio/IMG_8252.JPG",
	"/images/portfolio/IMG_9441.JPG",
	"/images/portfolio/IMG_4006.JPG",
	"/images/portfolio/IMG_4007.JPG",
	"/images/portfolio/IMG_1362.JPG",
	"/images/portfolio/treeFarAway.jpg",
	"/images/portfolio/IMG_7329.JPG",
	"/images/portfolio/IMG_8955.JPG",
	"/images/portfolio/laceeWGroom.jpg",
	"/images/portfolio/IMG_2952.JPG",
	"/images/portfolio/Kylie2.JPG",
	"/images/portfolio/treeCrop2.jpg",
	"/images/portfolio/cakeCrop.jpg",
];

function PortfolioFull() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="portfolio-page-container full-page">
			<div className="page-nav">
				<Link to="/" className="back-link" style={{ color: "var(--sage)" }}>
					← Back to Home
				</Link>
			</div>
			<div className="portfolio-header reveal">
				<span className="section-eyebrow">Our Work</span>
				<h1 className="section-heading">
					The Full <em>Collection</em>
				</h1>
				<p>Every arrangement, every moment, every bloom</p>
			</div>
			<div className="masonry-grid">
				{imageData.map((src, index) => (
					<div className="masonry-item" key={index}>
						<img src={src} alt="" loading="lazy" />
					</div>
				))}
			</div>
		</div>
	);
}

export default PortfolioFull;
