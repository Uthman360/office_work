import React, { useEffect } from 'react'
import "./style.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from '../HomeComponents/Button';
import profilePhoto from "../../assets/image/profile-photo.png"
import DD from "../../assets/image/DD.png"
import FAQ from './FAQ';

const HeroSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with duration
    }, []);
    return (
        <div className='hero_section_about'>
            <div className="inner_hero_about">
                <div className="left_about">
                    <div className="heading" data-aos="fade-down">
                        <h1>Hi! I’m Zeeshan</h1>
                    </div>
                    <div className="description" data-aos="fade-up">
                        <p>I am a seasoned software and mobile app developer dedicated to creating
                            innovative solutions that drive growth for both businesses and non-profits.
                        </p>
                        <p>From a young age, I've been captivated by technology and how it shapes our world.
                            This passion drives my commitment to building intuitive applications that enhance
                            user experiences.
                        </p>
                        <p>My focus lies at the intersection of user needs, technical feasibility, and business
                            goals. Across all my projects, I embrace a robust development process—spanning
                            planning, coding, testing, and iteration—ensuring that each solution is both
                            effective and scalable.
                        </p>
                        <p>I believe in balancing screen time with physical activity. When I’m not coding, you
                            might find me at the gym, exploring nature, experimenting in the kitchen, or
                            unwinding with a good series while enjoying some snacks.
                        </p>
                        <p>I'm always on the lookout for exciting development challenges. Feel free to reach
                            out with your project details!

                        </p>
                    </div>
                    <Button title={"Contact with me"} />

                </div>
                <div className="right_about">
                    <img src={profilePhoto} alt="" />
                </div>
            </div>


            <div className="about_content">
                <div className="left_about_content custom-fade-up" data-aos="fade-right" >
                    <img src={DD} alt="" />
                </div>
                <div className="right_about_content">
                    <div className="heading" data-aos="fade-left">
                        <h3>\ MY DEVELOPMENT PHILOSOPHY </h3>
                    </div>
                    <FAQ id="01." title={"Quiet the noise"} para="Streamline code and design to eliminate clutter, ensuring a seamless user experience. Achieve a balance between functionality and aesthetics to forge a meaningful connection between the application and its users." />
                    <FAQ id="02." title={"Solve the real problem"} para="I focus on addressing both user and business needs. Instead of chasing trendy features, I invest my energy in understanding the core problem. For me, development is not just technical; it’s a purposeful journey that adapts to users’ needs." />
                    <FAQ id="03." title={"Be humble"} para="Collaboration is key to successful development. Sharing ideas and code with peers leads to a richer pool of solutions. Each iteration builds upon the last resulting in a stronger final product." />
                    <FAQ id="04." title={"Work fast, like really fast"} para="Rapid iteration allows us to explore possibilities efficiently, ensuring we quickly arrive at solutions that resonate with users and meet project goals." />

                </div>

            </div>

            <div className="footer_about">
                <h3>THANKS FOR STOPPING BY</h3>
                <a href="#"> <span>Get in touch with me on Linkedin</span></a>
            </div>
        </div>
    )
}

export default HeroSection