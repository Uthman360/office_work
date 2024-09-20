import React, { useEffect } from 'react'
import "./style.css";
import winnipeg from "../../assets/inner/Rectangle-40128-1.png";
import Single_Banner from './innerComp/Single_Banner';
import Portfolio_Info from './innerComp/Portfolio_Info';
import style_WHS from '../../assets/inner/style-WHS.jpg';
import WHS_b from '../../assets/inner/WHS_b-01.jpg';
import WHS_b_3 from '../../assets/inner/WHS_b-03.jpg';
import WHS_b_2 from '../../assets/inner/WHS_b-02.jpg';
import WHS_flyer_mock from '../../assets/inner/WHS_flyer_mock.png';
import InnerSlider from './innerComp/InnerSlider2';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Winnipeg = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with duration
    }, []);
    return (
        <div className='winnipeg'>
            <Single_Banner link={'/visual-design/productdesign'} role="Visual design" title="Winnipeg Humane Society" image={winnipeg} />
            <div className="being">
                <Portfolio_Info role="Creative Designer" duration="2 years" tools="Adobe Illustrator, Adobe Photoshop, After Effect, Indesign" para="I supported them to design lesson plans and lectures for education programs and other marketing materials including leaflet, flyer, poster, website banner, instagram stories…to encourage people to make donation or attend social activities." />

                <div className="parent">
                    <div className="entry_content">
                        <h2 data-aos="fade-up">Context</h2>
                        <p data-aos="fade-up">The Winnipeg Humane Society is dedicated to protect animals from suffering and to promoting their welfare and dignity. This is a voluntary, non-political, non-profitable organization, which needs to find a graphic designer to help them design communication materials for internal and external use, ensure all designs were created according to their brand guidelines and easily accessible to the Marketing, Fund Development and National team.

                        </p>
                        <img data-aos="fade-right" src={style_WHS} alt="" />

                        <img data-aos="fade-left" src={WHS_b} alt="" />

                        <img data-aos="fade-up" src={WHS_b_3} alt="" />

                        <img data-aos="fade-up" style={{ marginTop: "20px" }} src={WHS_b_2} alt="" />

                        <img data-aos="fade-up" style={{ marginTop: "20px" }} src={WHS_flyer_mock} alt="" />
                    </div>
                    <InnerSlider />
                </div>
            </div>
        </div>
    )
}

export default Winnipeg