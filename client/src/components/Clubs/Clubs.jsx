import React from 'react'
import Dzire from './D-Zire.png'
import Aaveg from './Aaveg.png'
import Sargam from './sargam.png'
import DSN from './DSN.png'
import './clubs.css';

const Clubs = () => {
    return (
        <section className='club-section container'>
            <h1 className="about-title"><span>Our</span> Other Cultural Clubs</h1>
            <p className='clubs-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis recusandae tempore enim impedit, nostrum suscipit itaque quidem iure ab. Cumque nostrum temporibus, ratione ab est rem sit distinctio quisquam facilis.</p>
            <div className="club">
                <div className='single-club'>
                    <img src={Dzire} alt="" className='club-logo' />
                    <div className="club-desc">
                        <div className='club-title'>Dance Club</div>
                        <p className='club-about'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since </p>
                    </div>
                </div>
                <div className='single-club'>
                    <img src={Aaveg} alt="" className='club-logo' />
                    <div className="club-desc">
                        <div className='club-title'>Dramatics Society</div>
                        <p className='club-about'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since </p>
                    </div>
                </div>

                <div className='single-club'>
                    <img src={Sargam} alt="" className='club-logo' />
                    <div className="club-desc">
                        <div className='club-title'>Music Club</div>
                        <p className='club-about'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since </p>
                    </div>
                </div>
                <div className='single-club'>
                    <img src={DSN} alt="" className='club-logo' />
                    <div className="club-desc">
                        <div className='club-title'>Debate Society</div>
                        <p className='club-about'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since </p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Clubs
