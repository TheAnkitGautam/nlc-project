import React, { useState } from 'react';

const ScrollButton = () => {

	const [visible, setVisible] = useState(false)

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true)
		}
		else if (scrolled <= 300) {
			setVisible(false)
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	window.addEventListener('scroll', toggleVisible);

	const scroll_button = {
		position: 'fixed',
		right: '20px',
		bottom: '40px',
		height: '20px',
		fontSize: '1.8rem',
		zIndex: '1',
		cursor: 'pointer',
		color: 'tomato'
	}

	return (
		<div style={scroll_button}>
			<i className="fa-solid fa-circle-chevron-up" onClick={scrollToTop}
				style={{ display: visible ? 'inline' : 'none' }} />
		</div>
	);
}

export default ScrollButton;
