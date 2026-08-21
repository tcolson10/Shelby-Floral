import { useEffect } from "react";
import { Link } from "react-router-dom";

const imageData = [
	{ src: "/images/portfolio/IMG_1325.jpg", w: 1600, h: 1090 },
	{ src: "/images/portfolio/IMG_4486.jpg", w: 1120, h: 1600 },
	{ src: "/images/portfolio/013355F8-6967-4C7B-AF4E-5F760C595FA5.jpeg", w: 1440, h: 1440 },
	{ src: "/images/portfolio/A2F2D38A-6E95-41EA-B5C8-0381F43D38C5.jpeg", w: 900, h: 1600 },
	{ src: "/images/portfolio/IMG_1708.jpg", w: 1067, h: 1600 },
	{ src: "/images/portfolio/9F174CF3-66EE-4E7F-A50D-5F61FF8BD789.jpeg", w: 1440, h: 1440 },
	{ src: "/images/portfolio/IMG_0597.jpeg", w: 1082, h: 1600 },
	{ src: "/images/portfolio/IMG_8790.jpg", w: 1067, h: 1600 },
	{ src: "/images/portfolio/IMG_0413.jpeg", w: 1204, h: 1600 },
	{ src: "/images/portfolio/69E94533-5E79-4BEE-8264-76315704CB4E.jpeg", w: 1440, h: 1440 },
	{ src: "/images/portfolio/IMG_6141.jpg", w: 1067, h: 1600 },
	{ src: "/images/portfolio/IMG_6162.jpg", w: 1067, h: 1600 },
	{ src: "/images/portfolio/IMG_3099.jpeg", w: 1067, h: 1600 },
	{ src: "/images/portfolio/IMG_3110.JPG", w: 1200, h: 1600 },
	{ src: "/images/portfolio/IMG_6645.JPG", w: 1067, h: 1600 },
	{ src: "/images/portfolio/IMG_6008.jpg", w: 1067, h: 1600 },
	{ src: "/images/portfolio/IMG_6001.jpg", w: 1067, h: 1600 },
	{ src: "/images/portfolio/IMG_6428.jpeg", w: 1143, h: 1600 },
	{ src: "/images/portfolio/IMG_6981.jpg", w: 1067, h: 1600 },
	{ src: "/images/portfolio/IMG_6983.jpg", w: 1067, h: 1600 },
	{ src: "/images/portfolio/IMG_8071.jpeg", w: 1116, h: 1465 },
	{ src: "/images/portfolio/IMG_7238.jpg", w: 1143, h: 1600 },
	{ src: "/images/portfolio/IMG_7216.jpg", w: 1556, h: 1600 },
	{ src: "/images/portfolio/IMG_7602.jpg", w: 1069, h: 1600 },
	{ src: "/images/portfolio/D089FC39-EF2A-42EA-B9C0-B025D0066451.jpeg", w: 1200, h: 1600 },
	{ src: "/images/portfolio/lol13.jpg", w: 1540, h: 1600 },
	{ src: "/images/portfolio/o.jpg", w: 1600, h: 1067 },
	{ src: "/images/portfolio/Kiana Corri Photography- Brooke and Jackson Wedding Day-792_Original.jpg", w: 1143, h: 1600 },
	{ src: "/images/portfolio/IMG_1690.JPG", w: 1067, h: 1600 },
	{ src: "/images/portfolio/sneak-1.jpeg", w: 1600, h: 1067 },
	{ src: "/images/portfolio/IMG_8252.JPG", w: 1067, h: 1600 },
	{ src: "/images/portfolio/IMG_9441.JPG", w: 1067, h: 1600 },
	{ src: "/images/portfolio/IMG_4006.JPG", w: 1067, h: 1600 },
	{ src: "/images/portfolio/IMG_4007.JPG", w: 1067, h: 1600 },
	{ src: "/images/portfolio/IMG_1362.JPG", w: 1236, h: 1600 },
	{ src: "/images/portfolio/treeFarAway.jpg", w: 1102, h: 1600 },
	{ src: "/images/portfolio/IMG_7329.JPG", w: 1067, h: 1600 },
	{ src: "/images/portfolio/IMG_8955.JPG", w: 1067, h: 1600 },
	{ src: "/images/portfolio/laceeWGroom.jpg", w: 1170, h: 1149 },
	{ src: "/images/portfolio/IMG_2952.JPG", w: 1067, h: 1600 },
	{ src: "/images/portfolio/Kylie2.JPG", w: 1072, h: 1600 },
	{ src: "/images/portfolio/treeCrop2.jpg", w: 1260, h: 1600 },
	{ src: "/images/portfolio/cakeCrop.jpg", w: 1314, h: 1600 },
];

const EAGER_COUNT = 9;

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
				{imageData.map(({ src, w, h }, index) => (
					<div className="masonry-item" key={index}>
						<img
							src={src}
							alt=""
							width={w}
							height={h}
							loading={index < EAGER_COUNT ? "eager" : "lazy"}
							fetchpriority={index < EAGER_COUNT ? "high" : "auto"}
							onLoad={e => e.target.classList.add('loaded')}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default PortfolioFull;
