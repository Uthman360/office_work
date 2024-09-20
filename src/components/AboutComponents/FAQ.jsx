import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const FAQ = ({ id, title, para }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with duration
    }, []);
    return (
        <div className="questions">
            <h4 data-aos="fade-right">{id}</h4>
            <div className="question">
                <h4 data-aos="fade-left">{title}
                </h4>
                <p data-aos="fade-up">{para}</p>
            </div>
        </div>
    )
}

export default FAQ