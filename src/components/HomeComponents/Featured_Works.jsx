import React, { useEffect } from 'react'
import Button from './Button'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./style.css";
const Featured_Works = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with duration
    }, []);
    return (
        <div className='featured_works'>
            <div className="left_side">
                <div className="fea_heading custom-fade-up" data-aos="fade-right">
                    <h1>\ MY Featured Works  </h1>
                </div>

                <div className="fea_desc" data-aos="fade-up">
                    <p>Step into a world where your ideas come to life—whether it's building websites or developing mobile apps, I specialize in turning your concepts into standout, niche
                    products. Let’s transform your vision into a profitable reality!

                    </p>
                </div>

            </div>
            <div className="right_side">
               <Button title={"View all projects"} link={'/digital-product'} />
            

            </div>


        </div>
    )
}

export default Featured_Works