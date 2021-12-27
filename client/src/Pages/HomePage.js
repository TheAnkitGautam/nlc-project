import React from 'react'
import Clubs from '../components/Clubs/Clubs'
import Content from '../components/ContentSection/Content'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import Slider from '../components/Slider/Slider'

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <Hero />
            <Content />
            <Clubs />
            <Footer />
        </div>
    )
}

export default HomePage
