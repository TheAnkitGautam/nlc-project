import React, {useState} from 'react';
import {FaRegArrowAltCircleUp} from 'react-icons/fa';
import { Button } from './ScrollToTopStyles';

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	<Button>
	<i className="fa-solid fa-circle-chevron-up" onClick={scrollToTop}
	style={{display: visible ? 'inline' : 'none'}} />
	{/* <FaRegArrowAltCircleUp onClick={scrollToTop}
	style={{display: visible ? 'inline' : 'none'}} /> */}
	</Button>
);
}

export default ScrollButton;
