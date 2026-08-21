import { Link } from "react-router-dom";

const imageData = [
	{ src: "/images/portfolio/IMG_1325.jpg", w: 1600, h: 1090 },
	{ src: "/images/portfolio/IMG_4485.jpg", w: 1106, h: 1600 },
	{ src: "/images/portfolio/IMG_8790.jpg", w: 1067, h: 1600 },
	{ src: "/images/portfolio/IMG_0413.jpeg", w: 1204, h: 1600 },
	{ src: "/images/portfolio/IMG_6162.jpg", w: 1067, h: 1600 },
	{ src: "/images/portfolio/IMG_1708.jpg", w: 1067, h: 1600 },
	{ src: "/images/portfolio/IMG_6983.jpg", w: 1067, h: 1600 },
	{ src: "/images/portfolio/IMG_6645.JPG", w: 1067, h: 1600 },
	{ src: "/images/portfolio/IMG_6008.jpg", w: 1067, h: 1600 },
];

const EAGER_COUNT = 6;

function Portfolio() {
	return (
		<div className="portfolio-page-container">
			<div className="portfolio-header reveal">
				<span className="section-eyebrow">Our Work</span>
				<h2 className="section-heading">
					A glimpse of <em>our craft</em>
				</h2>
				<p>From intimate ceremonies to grand celebrations</p>
			</div>
			<div className="masonry-grid">
				{imageData.map(({ src, w, h }, i) => (
					<div className="masonry-item" key={i}>
						<img
							src={src}
							alt=""
							width={w}
							height={h}
							loading={i < EAGER_COUNT ? "eager" : "lazy"}
							fetchpriority={i < EAGER_COUNT ? "high" : "auto"}
							onLoad={e => e.target.classList.add('loaded')}
						/>
					</div>
				))}
			</div>
			<Link to="/full-portfolio" className="portfolio-button">
				View Full Portfolio
			</Link>
		</div>
	);
}

export default Portfolio;
