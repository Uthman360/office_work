import React from 'react'
import HeroSection from '../../components/AboutComponents/HeroSection'
import useDocumentTitle from '../../config/useDocumentTitle'

const About = () => {
    useDocumentTitle("About - Zeeshan")

    return (
        <div className='home'>
            <HeroSection />
        </div>
    )
}

export default About