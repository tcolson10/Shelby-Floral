import Pricing from "./Pricing";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const LandingPage = () => {
	return (
		<div>
			<div className="content-container" id="home" style={{ backgroundImage: 'url(/images/portfolio/IMG_4164.JPG)' }}>
				<img
					src="/images/portfolio/shelby-floral-logo-white.png"
					className="OverlayImage"
					alt="Shelby Floral overlay"
				/>
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
