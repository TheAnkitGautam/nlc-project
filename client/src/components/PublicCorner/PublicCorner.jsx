import React from 'react'
import { Outlet } from 'react-router-dom';
import eventPoster from './eventPoster.jpg';
import CSS from './public_corner.module.css';

const PublicCorner = () => {

    return (
        <section className='pageLoadAnim'>
            <div className={CSS.imgBox}>
                <img src={eventPoster} alt="" className={CSS.eventImg} />
            </div>
            <Outlet />
        </section >

    )
}

export default PublicCorner
