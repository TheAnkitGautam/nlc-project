import React from 'react'
import eventPoster from './eventPoster.jpg';
import Notice from './Notice';
import CSS from './public_corner.module.css';
import RulesPage from './RulesPage';


const PublicCorner = () => {
    return (
        <section className='pageLoadAnim'>
            <div className={CSS.imgBox}>
                <img src={eventPoster} alt="" className={CSS.eventImg} />
            </div>
            <h2 className={CSS.title}><span>----------</span> Upcoming Events <span>----------</span></h2>
            <div className={CSS.noticeBox}>
                <Notice />
                <RulesPage />
            </div>
        </section >
    )
}

export default PublicCorner
