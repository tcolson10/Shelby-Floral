import Pricing from "./Pricing";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const LandingPage = () => {
	const scrollToContact = () => {
		const section = document.getElementById("contact");
		if (!section) return;
		const headerHeight = document.querySelector("header")?.offsetHeight ?? 60;
		const top =
			section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
		window.scrollTo({ top, behavior: "smooth" });
	};

	return (
		<div>
			<div
				className="content-container"
				id="home"
				style={{ backgroundImage: "url(/images/portfolio/IMG_0597.JPG)" }}
			>
				<div className="hero-content">
					<img
						src="/images/portfolio/shelby-floral-logo-white.png"
						className="OverlayImage"
						alt="Shelby Floral overlay"
					/>
					<button className="hero-contact-btn" onClick={scrollToContact}>
						Contact Us
					</button>
				</div>
			</div>

			<div id="portfolio">
				<Portfolio />
			</div>

			<div id="pricing">
				<Pricing />
			</div>

			<div id="testimonials">
				<Testimonials />
			</div>

			<div id="contact">
				<Contact />
			</div>
		</div>
	);
};

export default LandingPage;
