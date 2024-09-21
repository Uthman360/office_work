import React from 'react'
import Navbar from '../../components/HomeComponents/Navbar'
import HeroSection from '../../components/HomeComponents/HeroSection'
import VideoSection from '../../components/HomeComponents/VideoSection'
import Featured_Works from '../../components/HomeComponents/Featured_Works'
import Portfolio from '../../components/HomeComponents/Portfolio'
import Client_Section from '../../components/HomeComponents/Client_Section'
import Partners from '../../components/HomeComponents/Partners'
import "./style.css"
import useDocumentTitle from '../../config/useDocumentTitle'
const Home = () => {
    useDocumentTitle('Zeeshan');

    return (
        <>
            <div className="home">
                <HeroSection />
            </div>
            <VideoSection />
            <div className="home">
                <Featured_Works />
            </div>
            <div className="home">
                <Portfolio />
            </div>

            <Client_Section />
            <div className="home">
                <Partners />
            </div>
        </>
    )
}

export default Home