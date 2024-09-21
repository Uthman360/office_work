import React, { useEffect } from 'react'
import "./style.css";
import Single_Banner from './innerComp/Single_Banner';
import Portfolio_Info from './innerComp/Portfolio_Info';
import ThumbnailThrive from "../../assets/inner/Thumbnail-Thrive.png"
import inside_Thrive from "../../assets/inner/Portfolio-inside_Thrive.jpg"
import inside_Thrive2 from "../../assets/inner/Portfolio-inside_Thrive-02.png"
import Home_mock_thrive from "../../assets/inner/Home-mock-thrive.png"
import inside_Thrive4 from "../../assets/inner/Portfolio-inside_Thrive-04.jpg"
import checkoutthrive from "../../assets/inner/checkout-thrive.png"
import InnerSlider from './innerComp/InnerSlider2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useDocumentTitle from '../../config/useDocumentTitle';
const Thrive = () => {
    useDocumentTitle("Thrive - Zeeshan")

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with duration
    }, []);
    return (
        <div className='thrive'>
            <Single_Banner link={'/visual-design/productdesign'} role="Visual design" title="Thrive" image={ThumbnailThrive} />

            <div className="being">
                <Portfolio_Info role="Visual Designer" duration="4 weeks" tools="Figma, After Effect, Adobe Illustration" para="The Thrive Forex Trading Platform is a platform that provides users with a powerful platform for trading and also for learning whilst researching more information about trading" />

                <div className="parent">
                    <div className="entry_content">
                        <h2 data-aos="fade-up">Context</h2>
                        <p data-aos="fade-up">Thrive is a FOREX community with more than 500 members. The company provides daily market insights and signals to the group members. When the client reached out to me, their problem was the users can’t find the information they need easily so that they did not trust what Thrive are offering.

                        </p>

                        <p data-aos="fade-up"> Thrive needed a powerful platform to showcase their services as well as offer users of varying backgrounds the opportunity to make extra income by trading forex pairs and learning at the same time. The website developed and launched flaunts Trustpilot’s review of the firm which is what every visitor gets to see first to ensure trust in the firm and its platform. The website also has a very simple yet appealing user interface and high quality infographics and with great consistent aesthetics.

                        </p>
                        <h2 data-aos="fade-up">Solution
                        </h2>
                        <p data-aos="fade-up">My solution was redesigning the website with well-structured navigation and simple interface that provides educational content for beginners. I focused on the homepage and the service pages because of their importance.

                        </p>
                        <img data-aos="fade-right" src={inside_Thrive} alt="" />
                        <img data-aos="fade-right" style={{ backgroundImage: "linear-gradient(0turn, #e3e3e3 0%, #999999 78%)" }} src={inside_Thrive2} alt="" />
                        <img data-aos="fade-up" src={Home_mock_thrive} style={{ marginTop: "10px" }} alt="" />
                        <p data-aos="fade-up">The website has a captivating outlook for an homepage as it not just draws in the attention of anyone who happens to stumble upon the platform but keeps them in with its astonishingly simple yet sophisticated layout which provides everything from Signals section to Testimonials sections that shares inspiring success stories to ensure every visitor makes a decision to sign up and get started with the firm.
                        </p>
                        <p data-aos="fade-up">Also, featuring the Trustpilot rating for Thrive in the homepage is  step in the right direction of convincing all and sundry, especially Forex trading prospects to get started on their life-changing journey first with learning Forex trading from Thrive till they can start trading on their own either by the use of Robin Copy trader, a function of Thrive or simply handling their trades personally, only after having passed through the learning process at Thrive.

                        </p>
                        <img data-aos="fade-up" src={inside_Thrive4} style={{ marginTop: "10px" }} alt="" />
                        <p data-aos="fade-up">The website has a “My Account” tab that allows for users to create separate and personalized accounts on which they are free to learn, and trade. The “Subscribe” button on the homepage is not only “sexy” but alluring as it is designed in such an irresistible way that would make anyone give the platform a trial especially with their unbelievable “Thrive + Robin” free affiliate deal.

                        </p>
                        <img data-aos="fade-up" src={checkoutthrive} alt="" />
                        <p data-aos="fade-up">The website has a somewhat “convincing” outlook that would obviously educate any Forex enthusiast to want to engage in the purchasing and selling currencies to make a profit as this website would as well serve investors, institutions, banks, and traders as a great forum for knowledge-sharing.

                        </p>

                        <p data-aos="fade-up">In as much as trading on the Forex market profitably, is far from straightforward, the website’s visitors and Forex enthusiasts would want to seek Thrive’s help to ensure that the high risks of trading are reduced as they use the industry experts required to ensure that the specifications of all client are met on time.

                        </p>
                    </div>
                    <InnerSlider />
                </div>
            </div>
        </div>
    )
}

export default Thrive