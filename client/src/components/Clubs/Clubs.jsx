import React from 'react'
import Dzire from './D-Zire.png'
import Aaveg from './Aaveg.png'
import Sargam from './sargam.png'
import './clubs.css';

const Clubs = () => {
    return (
        <div className="club-section">
            <section className='container'>
                <h1 className="clubs-title"><span>Our</span> Other Cultural Clubs</h1>

                <div className="clubs">
                    <div className='club'>
                        <div className="club-img-box">
                            <img className='club-image' src={Dzire} alt="D-Zire" />
                        </div>
                        <div className="club-info">
                            <h2 className="club-name">D-Zire</h2>
                            <p className="club-desc">The Dance Club</p>
                        </div>
                    </div>
                    <div className='club'>
                        <div className="club-img-box">
                            <img className='club-image' src={Aaveg} alt="D-Zire" />
                        </div>
                        <div className="club-info">
                            <h2 className="club-name">Aaveg</h2>
                            <p className="club-desc">The Dramatics Club</p>
                        </div>
                    </div>
                    <div className='club'>
                        <div className="club-img-box">
                            <img className='club-image' src={Sargam} alt="D-Zire" />
                        </div>
                        <div className="club-info">
                            <h2 className="club-name">Sargam</h2>
                            <p className="club-desc">The Music Club</p>
                        </div>
                    </div>
                </div>
            </section >
        </div>
    )
}

export default Clubs
