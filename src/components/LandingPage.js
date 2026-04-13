import Pricing from "./Pricing";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const LandingPage = () => {
	const scrollTo = (id) => {
		const el = document.getElementById(id);
		if (!el) return;
		const h = document.querySelector("header")?.offsetHeight ?? 60;
		window.scrollTo({
			top: el.getBoundingClientRect().top + window.pageYOffset - h,
			behavior: "smooth",
		});
	};

	return (
		<div>
			{/* Hero */}
			<div
				className="hero"
				id="home"
				style={{ backgroundImage: "url(/images/portfolio/IMG_0597.jpeg)" }}
			>
				<div className="hero-overlay" />
				<div className="hero-content">
					<span className="hero-eyebrow">Wedding Floral Design</span>
					<h1 className="hero-headline">
						<em>Shelby Floral</em>
						<span>Company</span>
					</h1>
					<p className="hero-tagline">Where every bloom tells your story</p>
					<div className="hero-actions">
						<button
							className="hero-btn-primary"
							onClick={() => scrollTo("portfolio")}
						>
							View Our Work
						</button>
						<button
							className="hero-btn-outline"
							onClick={() => scrollTo("contact")}
						>
							Get In Touch
						</button>
					</div>
				</div>
				<div className="hero-scroll-hint">
					<div className="hero-scroll-line" />
				</div>
			</div>

			{/* Stats Bar */}
			<div className="stats-bar">
				<div className="stat-item">
					<span className="stat-number">100+</span>
					<span className="stat-label">Events Designed</span>
				</div>
				<div className="stat-item">
					<span className="stat-number">5★</span>
					<span className="stat-label">Client Rating</span>
				</div>
				<div className="stat-item">
					<span className="stat-number">100%</span>
					<span className="stat-label">Custom Designs</span>
				</div>
				<div className="stat-item">
					<span className="stat-number">∞</span>
					<span className="stat-label">Love for Flowers</span>
				</div>
			</div>

			{/* Portfolio */}
			<div id="portfolio">
				<Portfolio />
			</div>

			{/* About */}
			<div className="about-section reveal">
				<div className="about-image">
					<img
						src="/images/portfolio/IMG_4486.jpg"
						alt="Shelby Floral design"
						loading="lazy"
					/>
				</div>
				<div className="about-text">
					<span className="section-eyebrow">Our Story</span>
					<h2 className="section-heading">
						Florals that feel like <em>you</em>
					</h2>
					<p>
						We believe flowers aren't just decoration — they're the emotion of a
						room. The arch you walk under. The bouquet your family notices first.
						The detail that makes your day feel uniquely yours.
					</p>
					<p>
						Shelby Floral Company creates custom, thoughtfully designed
						arrangements that bring your vision to life and exceed every
						expectation.
					</p>
					<button className="about-cta" onClick={() => scrollTo("contact")}>
						Work With Us
					</button>
				</div>
			</div>

			{/* Testimonials */}
			<div id="testimonials">
				<Testimonials />
			</div>

			{/* Pricing */}
			<div id="pricing">
				<Pricing />
			</div>

			{/* Contact */}
			<div id="contact">
				<Contact />
			</div>
		</div>
	);
};

export default LandingPage;
