import React, { useEffect } from 'react'
import "./style.css"
import Button from './Button'
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with duration
    }, []);
    return (
        <div className='hero_section'>
            <div className="inner_hero">
                <div className="heading" data-aos="fade-up">
                    <h1>Hi! I’m Zeeshan</h1>
                </div>
                <div className="description" data-aos="fade-up">
                    <p>I specialize in delivering high-performance solutions that transform ideas into 
                    impactful digital products.

                    </p>
                </div>
                <Button title={"Contact with me"} />
            </div>

        </div>
    )
}

export default HeroSection