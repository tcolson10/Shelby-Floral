import { useEffect, useRef, useState } from "react";

function Lightbox({ images, startIndex, onClose }) {
	const [index, setIndex] = useState(startIndex);
	const containerRef = useRef(null);

	const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length);
	const goNext = () => setIndex((i) => (i + 1) % images.length);

	useEffect(() => {
		containerRef.current?.focus();
		const prevOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";

		const onKeyDown = (e) => {
			if (e.key === "Escape") onClose();
			else if (e.key === "ArrowLeft" && images.length > 1) goPrev();
			else if (e.key === "ArrowRight" && images.length > 1) goNext();
		};
		window.addEventListener("keydown", onKeyDown);

		return () => {
			document.body.style.overflow = prevOverflow;
			window.removeEventListener("keydown", onKeyDown);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [images.length]);

	const current = images[index];

	return (
		<div
			className="lightbox-overlay"
			role="dialog"
			aria-modal="true"
			aria-label="Image viewer"
			ref={containerRef}
			tabIndex={-1}
			onClick={onClose}
		>
			<button
				type="button"
				className="lightbox-close"
				aria-label="Close"
				onClick={onClose}
			>
				&times;
			</button>

			{images.length > 1 && (
				<button
					type="button"
					className="lightbox-nav lightbox-prev"
					aria-label="Previous image"
					onClick={(e) => { e.stopPropagation(); goPrev(); }}
				>
					&#8249;
				</button>
			)}

			<img
				src={current.src}
				alt=""
				className="lightbox-image"
				onClick={(e) => e.stopPropagation()}
			/>

			{images.length > 1 && (
				<button
					type="button"
					className="lightbox-nav lightbox-next"
					aria-label="Next image"
					onClick={(e) => { e.stopPropagation(); goNext(); }}
				>
					&#8250;
				</button>
			)}

			{images.length > 1 && (
				<div className="lightbox-counter">
					{index + 1} / {images.length}
				</div>
			)}
		</div>
	);
}

export default Lightbox;
