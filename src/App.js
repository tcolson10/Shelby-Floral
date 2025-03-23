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

	// Improved scroll function with precise positioning
	const scrollIfNeeded = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			// Get the exact header height
			const headerHeight = document.querySelector("header").offsetHeight;

			// Calculate the exact position
			const sectionTop =
				section.getBoundingClientRect().top + window.pageYOffset - headerHeight;

			// Scroll with a very short delay to ensure accuracy
			setTimeout(() => {
				window.scrollTo({
					top: sectionTop,
					behavior: "smooth",
				});
			}, 50);
		}
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

			// Still scroll to the section if we're already on the landing page
			if (location.pathname === "/" || path === "home") {
				setTimeout(() => scrollIfNeeded(path), 50);
			}
		} else {
			navigate("/" + path);
		}
	};

	// Scroll to section based on URL path when the page loads
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
			setTimeout(() => scrollIfNeeded(sectionId), 100);
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
