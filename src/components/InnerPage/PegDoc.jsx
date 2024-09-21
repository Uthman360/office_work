import React, { useEffect } from 'react'
import Single_Banner from './innerComp/Single_Banner';
import Portfolio_Info from './innerComp/Portfolio_Info';
import Rectangle2 from "../../assets/Rectangle2.png";
import functio from "../../assets/inner/function.png";
import Userflow from "../../assets/inner/Userflow.png";
import designsystem from "../../assets/inner/design-system.png";
import prototypepegdoc from "../../assets/inner/prototype-pegdoc.png";
import Signinsignup from "../../assets/inner/Sign-in-sign-up.png";
import featured_pegdoc from "../../assets/inner/main-featured_pegdoc.png";
import doctor from "../../assets/inner/doctor-flow.png";
import clinicflow from "../../assets/inner/clinic-flow.png";
import flow_mockup from "../../assets/inner/clinic-flow_mockup.png";
import InnerSlider from './innerComp/InnerSlider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useDocumentTitle from '../../config/useDocumentTitle';


const PegDoc = () => {
    useDocumentTitle("PegDoc - Zeeshan")

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with duration
    }, []);

    return (
        <div className='peg'>
            <Single_Banner link={'/digital-product/productdesign'} role="Product design" title="PegDoc" image={Rectangle2} />

            <div className="being">
                <Portfolio_Info role="Product Designer" duration="6 months" tools="Figma, Adobe Illustrator, Adobe Photoshop" para="We created PegDoc to solve patient problems, beginning with online appointment booking. With PegDoc, you can find family doctors in your neighborhood, check your doctors’ schedule for appointments, available time slots in walk-in clinic and book instantly online, select family doctor based on verified reviews, and tailored reminders. Fill them out online, just once, and keep them forever." />

              <div className="parent">
              <div className="entry_content">
                    <h2 data-aos="fade-up">My approach to the challenge</h2>

                    <p data-aos="fade-up">When approaching this design challenge, I leveraged design thinking methodology to ensure my focus throughout the process was on the people I was designing and creating for. Most importantly, I needed it to be desirable and address real human needs.</p>

                    <div className="group_content">
                        <div className="left">
                            <h2 data-aos="fade-up">What are we solving?  </h2>
                            <p data-aos="fade-up">Canada has long been well-known for its advanced and affordable healthcare system. Unfortunately, there are still many issues addressed by clinics, family doctors and patients, including long queue times and appointment booking.</p>
                            <p data-aos="fade-up">To remedy the situation, PegDoc has been designed with the mission which is helping clinics, family doctors, and patients to connect and manage their appointment booking with peace of mind.</p>

                        </div>
                        <div className="right" data-aos="fade-right"><img src={functio} alt="" /></div>

                    </div>

                    <h2 data-aos="fade-up">Solution development</h2>
                    <p data-aos="fade-up">From the series of sketches I developed, I highlighted different ideas, features, and components to incorporate into the first round of low-mid-fidelity grayscale prototypes. Developing and working with grayscale prototypes allowed me to quickly test out components, layouts, information hierarchy, and screen flows before adding a visual identity.</p>

                    <img data-aos="fade-left" src={Userflow} alt="" />

                    <div className="e-con-inner">
                        <h4 data-aos="fade-down">Moodboard</h4>
                        <p data-aos="fade-up">After completing my user stories, epics and user flow, I then started to build my UI inspiration moodboard by considering digital components and design elements that I think might be useful for users. To establish my products’ brand, I began writing a list of keywords that embody the brand’s essence and define the personality of the product.</p>

                        <img data-aos="fade-up" src={designsystem} alt="" />

                        <img data-aos="fade-up" src={prototypepegdoc} alt="" />
                        <h2 data-aos="fade-up">Visual design</h2>
                        <h4 data-aos="fade-up" style={{ marginTop: "50px" }}>Sign in & Sign up</h4>
                        <p data-aos="fade-up">Users can instantly sign in or register with their email address. They can also use their Google, Facebook or iCloud accounts to sign up or sign in. If they forget their password, they can easily set their new password by OTP verification.</p>
                        <img data-aos="fade-up" src={Signinsignup} alt="" />
                        <h4 data-aos="fade-up">Key features</h4>
                        <img data-aos="fade-up" src={featured_pegdoc} alt="" />
                        <h4 data-aos="fade-up">1. Find the family doctor and book appointment</h4>
                        <img data-aos="fade-right" src={doctor} alt="" />
                        <h4>2. Virtual booking @Walk-in Clinic</h4>
                        <img data-aos="fade-left" src={clinicflow} alt="" />
                        <h4 data-aos="fade-up" style={{ marginBottom: "40px" }}>3. Other screens</h4 >
                        <img data-aos="fade-up" src={flow_mockup} alt="" />
                    </div>
                </div>
                <InnerSlider />
              </div>

            </div>
        </div>
    )
}

export default PegDoc