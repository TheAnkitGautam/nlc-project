import React from 'react'
import Clubs from '../components/Clubs/Clubs'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import Post from '../components/Posts/Post'
import Slider from '../components/Slider/Slider'

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <Hero />
            <Post />
            <Clubs />
            <Footer />
        </div>
    )
}

export default HomePage
