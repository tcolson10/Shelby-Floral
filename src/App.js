import React, { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
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
import Contact from "./components/Contact";

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	// Initialize Google Analytics 4 and track page views
	useEffect(() => {
		// Initialize GA4 with your Measurement ID
		ReactGA4.initialize("G-9P0D4PPB65"); // Replace with your actual GA4 Measurement ID

		// Send page view whenever the location changes
		ReactGA4.send({
			hitType: "pageview",
			page_title: document.title,
			page_location: window.location.href,
			page_path: location.pathname + location.search,
		});
	}, [location]); // Dependency on location ensures effect runs on route changes

	// Debugging log to check section existence
	useEffect(() => {
		const sections = [
			"home",
			"pricing",
			"portfolio",
			"testimonials",
			"contact",
		];
		sections.forEach((section) => {
			const element = document.getElementById(section);
			console.log(`Section '${section}' exists: ${!!element}`);
		});
	}, []);

	// Enhanced scroll function with more reliability
	const scrollIfNeeded = (sectionId) => {
		console.log(`Attempting to scroll to section: ${sectionId}`);

		// Ensure DOM is fully loaded
		if (document.readyState === "complete") {
			scrollToSection(sectionId);
		} else {
			// Wait for DOM to be fully loaded
			window.addEventListener("load", () => scrollToSection(sectionId));
		}
	};

	const scrollToSection = (sectionId) => {
		// Try multiple times with increasing delay to ensure section is rendered
		const tryScroll = (attempt = 1) => {
			const section = document.getElementById(sectionId);
			console.log(
				`Scroll attempt ${attempt} for ${sectionId}. Found: ${!!section}`
			);

			if (section) {
				// Get the exact header height
				const headerHeight = document.querySelector("header").offsetHeight;
				console.log(`Header height: ${headerHeight}px`);

				// Calculate the exact position
				const sectionTop =
					section.getBoundingClientRect().top +
					window.pageYOffset -
					headerHeight;
				console.log(`Scrolling to position: ${sectionTop}`);

				window.scrollTo({
					top: sectionTop,
					behavior: "smooth",
				});
			} else if (attempt < 5) {
				// Try again with increasing delay
				setTimeout(() => tryScroll(attempt + 1), attempt * 100);
			}
		};

		tryScroll();
	};

	// Updated navigation handler to use clean URLs
	const handleNavigation = (path) => {
		setIsMenuOpen(false);

		if (
			[
				"home",
				"about",
				"portfolio",
				"pricing",
				"testimonials",
				"contact",
			].includes(path)
		) {
			// For same-page navigation sections, use the pathname without hash
			if (path === "home") {
				navigate("/");
			} else {
				navigate("/" + path);
			}
		} else {
			navigate("/" + path);
		}
	};

	// Scroll to section based on URL path when the component mounts or URL changes
	useEffect(() => {
		// Get the path without the leading slash
		const path = location.pathname.replace(/^\//, "");

		if (
			["", "home", "pricing", "portfolio", "testimonials", "contact"].includes(
				path
			)
		) {
			// For home route, path is empty string
			const sectionId = path === "" ? "home" : path;

			// Give time for the component to fully render
			setTimeout(() => scrollIfNeeded(sectionId), 300);
		}
	}, [location.pathname]);

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
