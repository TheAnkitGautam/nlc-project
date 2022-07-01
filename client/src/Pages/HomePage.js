import React from 'react'
import Clubs from '../components/Clubs/Clubs'
import ContentGallery from '../components/Content-Gallery/ContentGallery'
import Content from '../components/ContentSection/Content'
import Hero from '../components/Hero/Hero'
import Slider from '../components/Slider/Slider'

const HomePage = () => {
    return (
        <div className='pageLoadAnim'>
            <Slider />
            <Hero />
            <ContentGallery />
            <Content />
            <Clubs />
        </div>
    )
}

export default HomePage
