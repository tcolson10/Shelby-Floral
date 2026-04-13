import { useEffect } from "react";

const LINE1 = "Shelby Floral";
const LINE2 = "Company";
const LETTER_DELAY = 80;   // ms between each letter in line 1
const LINE2_START = LINE1.length * LETTER_DELAY + 300; // start line 2 after line 1 finishes
const LINE2_LETTER_DELAY = 90;
const LAST_LETTER = LINE2_START + LINE2.length * LINE2_LETTER_DELAY;
const HOLD = 900;
const FADE_DURATION = 800;

function IntroAnimation({ onComplete }) {
	useEffect(() => {
		const exitTimer = setTimeout(() => {
			const overlay = document.querySelector(".intro-overlay");
			if (overlay) overlay.classList.add("intro-overlay--exit");
		}, LAST_LETTER + HOLD);

		const doneTimer = setTimeout(onComplete, LAST_LETTER + HOLD + FADE_DURATION);

		return () => {
			clearTimeout(exitTimer);
			clearTimeout(doneTimer);
		};
	}, [onComplete]);

	return (
		<div className="intro-overlay">
			<div className="intro-name-wrap">
				<em className="intro-name">
					{LINE1.split("").map((char, i) => (
						<span
							key={i}
							className="intro-letter"
							style={{ animationDelay: `${i * LETTER_DELAY}ms` }}
						>
							{char === " " ? "\u00A0" : char}
						</span>
					))}
				</em>
				<span className="intro-company">
					{LINE2.split("").map((char, i) => (
						<span
							key={i}
							className="intro-letter intro-letter--company"
							style={{ animationDelay: `${LINE2_START + i * LINE2_LETTER_DELAY}ms` }}
						>
							{char}
						</span>
					))}
				</span>
			</div>
		</div>
	);
}

export default IntroAnimation;
