import React from 'react'
import Clubs from '../components/Clubs/Clubs'
import ContentSection from '../components/Content-section/Content_section'
import Hero from '../components/Hero/Hero'
import {Message} from '../components/Message/Message'
import Slider from '../components/Slider/Slider'

const HomePage = () => {
    return (
        <div className='pageLoadAnim'>
            <Slider />
            <Hero />
            <Message />
            <ContentSection />
            <Clubs />
        </div>
    )
}

export default HomePage
