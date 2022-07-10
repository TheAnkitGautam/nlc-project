import React from 'react'
import { Link } from 'react-router-dom';
import eventPoster from './eventPoster.jpg';
import CSS from './public_corner.module.css';

const PublicCorner = () => {
    return (
        <section className='pageLoadAnim'>
            <div className={CSS.imgBox}>
                <img src={eventPoster} alt="" className={CSS.eventImg} />
            </div>
            <div className={CSS.noticeBox} >
                <h2 className={CSS.title}><span>----------</span> Upcoming Events <span>----------</span></h2>
                <div className={CSS.notice}>
                    <div className={CSS.startDate}>
                        <div className={CSS.dateTitle}>starts on</div>
                        <div className={CSS.date}>
                            <div className={CSS.day}>20</div>
                            <div className={CSS.month}>January</div>
                        </div>
                    </div>
                    <div className={CSS.center} >
                        <h3 className={CSS.noticeTitle}>Spill the Ink 3.0 - Debate Competition</h3>
                        <p className={CSS.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam culpa sequi consequatur cupiditate repudiandae quod.</p>
                    </div>
                    <div className={CSS.endDate}>
                        <div className={CSS.dateTitle}>ends on</div>
                        <div className={CSS.date}>
                            <div className={CSS.day}>14</div>
                            <div className={CSS.month}>February</div>
                        </div>
                    </div>
                </div>
            </div >
        </section >

    )
}

export default PublicCorner
