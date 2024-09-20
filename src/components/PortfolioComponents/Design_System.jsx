import React from 'react'
import HeroSection from './HeroSection'
import update from "../../assets/image/update.gif"
import "./style.css";
const Design_System = () => {
    return (
        <div>
            <HeroSection />

            <div className="update_stay">
                <img src={update} alt="" />

                <h3>Stay tuned for updates!</h3>
                <p>I'm enhancing my portfolio with fresh projects and a revamped design. Please stay tuned for updates showcasing my latest work. Feel free to reach out or explore my past projects. Thanks for your patience!

                </p>
            </div>
        </div>
    )
}

export default Design_System