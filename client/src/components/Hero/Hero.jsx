import './hero.css'

const Hero = () => {
    return (
        <div className="hero_bg">
            <div className="hero-wrap container">
                <section className="hero">
                    <div className="about">
                        <h2 className="about-title"><span>Who</span> are we?</h2>
                        <p className="about-text">The Literary Club of NIT Agartala aims to develop analytical and creative thinking skills. It's main objective is to develop the literary skills of the students. It aims to enhance listening, reading, speaking, and writing skills of students and develop soft skills such as effective communication, leadership skills, and interpersonal communication skills.</p>
                    </div>
                    <div className="about-icons container">
                        <div className='icon-item'>
                            <div className="icon">W</div>
                            <p className='icon-txt'>Wisdom</p>
                        </div>
                        <div className='icon-item'>
                            <div className="icon">I</div>
                            <p className='icon-txt'>Inspiration</p>
                        </div>
                        <div className='icon-item'>
                            <div className="icon">S</div>
                            <p className='icon-txt'>Serenity</p>
                        </div>
                        <div className='icon-item'>
                            <div className="icon">H</div>
                            <p className='icon-txt'>Hardwork</p>
                        </div>
                    </div>
                </section >
            </div>
        </div>
    )
}

export default Hero
