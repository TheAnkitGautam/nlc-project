import { useState, useEffect } from 'react';
import SliderData from './SliderData';
import './slider.css'

const Slider = () => {
    const [currImg, setCurrImg] = useState(0);
    const len = SliderData.length - 1;

    useEffect(() => {
        setInterval(() => {
            setCurrImg((currImg) => {
                return currImg < len ? currImg + 1 : currImg = 0;
            });
        }, 20000)
    }, [len]);

    const handleLeft = () => {
        setCurrImg((currImg) => {
            return currImg > 0 ? currImg - 1 : currImg = len;
        });
    }

    const handleRight = () => {
        setCurrImg((currImg) => {
            return currImg < len ? currImg + 1 : currImg = 0;
        });
    }

    return (
        <section className='slider'>
            <div className="slide" style={{ backgroundImage: `url(${SliderData[currImg].image})` }}>
                <div className="left-arrow" onClick={handleLeft}><i className="fas fa-chevron-circle-left" /></div>
                <div className="slide-content-wrap">
                    <div className="slide-content">
                        <h1 className='slide-title' >{SliderData[currImg].title}</h1>
                        <p className="slide-text">{SliderData[currImg].text}</p>
                    </div>
                </div>
                <div className="right-arrow" onClick={handleRight}><i className="fas fa-chevron-circle-right" /></div>
            </div>
        </section >
    );
}

export default Slider;