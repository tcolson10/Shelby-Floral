import React, { useState, useEffect, useRef } from "react";
import {
	Routes,
	Route,
	Link,
	useNavigate,
	useLocation,
} from "react-router-dom";
import ReactGA4 from "react-ga4";
import "./App.css";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import PortfolioFull from "./components/PortfolioFull";
import TestimonialsFull from "./components/TestimonialsFull";

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const gaInitialized = useRef(false);

	// Initialize GA4 once on mount
	useEffect(() => {
		if (!gaInitialized.current) {
			ReactGA4.initialize("G-9P0D4PPB65");
			gaInitialized.current = true;
		}
	}, []);

	// Track page views on route change
	useEffect(() => {
		ReactGA4.send({
			hitType: "pageview",
			page_title: document.title,
			page_location: window.location.href,
			page_path: location.pathname + location.search,
		});
	}, [location]);

	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (!section) return;
		const headerHeight = document.querySelector("header")?.offsetHeight ?? 80;
		const top =
			section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
		window.scrollTo({ top, behavior: "smooth" });
	};

	// Scroll to section based on URL path when location changes
	useEffect(() => {
		const path = location.pathname.replace(/^\//, "");
		if (
			["", "home", "pricing", "portfolio", "testimonials", "contact"].includes(
				path
			)
		) {
			const sectionId = path === "" ? "home" : path;
			setTimeout(() => scrollToSection(sectionId), 100);
		}
	}, [location.pathname]);

	const handleNavigation = (path) => {
		setIsMenuOpen(false);
		navigate(path === "home" ? "/" : `/${path}`);
	};

	return (
		<div className="app-container">
			<header>
				<Link to="/" className="webTitle" onClick={() => setIsMenuOpen(false)}>
					<img
						src="/images/portfolio/flower-logo.png"
						alt="Shelby Floral Logo"
						className="navLogo"
					/>
				</Link>
				<button
					className={`hamburger ${isMenuOpen ? "active" : ""}`}
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					<span className="hamburger-line"></span>
					<span className="hamburger-line"></span>
					<span className="hamburger-line"></span>
				</button>
				<nav className={isMenuOpen ? "nav-active" : ""}>
					<ul>
						<li>
							<Link to="/" onClick={() => handleNavigation("home")}>
								Home
							</Link>
						</li>
						<li>
							<Link to="/pricing" onClick={() => handleNavigation("pricing")}>
								Pricing
							</Link>
						</li>
						<li>
							<Link
								to="/portfolio"
								onClick={() => handleNavigation("portfolio")}
							>
								Portfolio
							</Link>
						</li>
						<li>
							<Link
								to="/testimonials"
								onClick={() => handleNavigation("testimonials")}
							>
								Testimonials
							</Link>
						</li>
						<li>
							<Link to="/contact" onClick={() => handleNavigation("contact")}>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/about" element={<About />} />
					<Route path="/pricing" element={<LandingPage />} />
					<Route path="/portfolio" element={<LandingPage />} />
					<Route path="/testimonials" element={<LandingPage />} />
					<Route path="/contact" element={<LandingPage />} />
					<Route path="/full-portfolio" element={<PortfolioFull />} />
					<Route path="/full-testimonials" element={<TestimonialsFull />} />
				</Routes>
			</main>
			<footer className="site-footer">
				<div className="footer-instagram">
					<a
						href="https://www.instagram.com/shelby_floral/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="/images/portfolio/IG.png"
							alt="Instagram"
							className="instagram-logo"
						/>
						<span>Instagram</span>
					</a>
				</div>
				<div className="footer-email">
					Email:{" "}
					<a
						href="mailto:shelbyfloralcompany@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						shelbyfloralcompany@gmail.com
					</a>
				</div>
			</footer>
		</div>
	);
}

export default App;
