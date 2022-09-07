import './hero.css'

const Hero = () => {
    return (
        <div className="hero_bg">
            <div className="hero-wrap container">
                <section className="hero">
                    <div className="about">
                        <h2 className="about-title"><span>Who</span> are we?</h2>
                        <p className="about-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
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
