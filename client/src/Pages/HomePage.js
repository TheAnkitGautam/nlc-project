import React from 'react'
import Clubs from '../components/Clubs/Clubs'
import ContentSection from '../components/Content-section/Content_section'
import Hero from '../components/Hero/Hero'
import Slider from '../components/Slider/Slider'

const HomePage = () => {
    return (
        <div className='pageLoadAnim'>
            <Slider />
            <Hero />
            <ContentSection />
            <Clubs />
        </div>
    )
}

export default HomePage
