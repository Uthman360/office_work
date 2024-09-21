import React, { useEffect } from 'react'
import "./style.css";
import Single_Banner from './innerComp/Single_Banner';
import brandzino from "../../assets/inner/Rectangle14.png";
import Portfolio_Info from './innerComp/Portfolio_Info';
import Group from "../../assets/inner/Group-31.png";
import MockupBrandzino from "../../assets/inner/Mockup-Brandzino.jpg";
import MockupBrandzino_3 from "../../assets/inner/Mockup-Brandzino-3.jpg";
import Brandzinosolutions from "../../assets/inner/Brandzino-solutions.png";
import Group_1000 from "../../assets/inner/Group-1000.png";
import Group_10695 from "../../assets/inner/Group-10695.png";
import InnerSlider from './innerComp/InnerSlider2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useDocumentTitle from '../../config/useDocumentTitle';
const Brandzino = () => {
    useDocumentTitle("Brandzino - Zeeshan")

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with duration
    }, []);
    return (
        <div className='brandzino'>
            <Single_Banner link={'/visual-design/productdesign'} role="Visual design" title="Brandzino" image={brandzino} />
            <div className="being">
                <Portfolio_Info role="Visual Designer" duration="3 weeks" tools="Figma, After Effect, Adobe Illustration" para="Momentum is an engaging website dedicated to physical therapy, empowering users with comprehensive knowledge of the underlying scientific principles while facilitating seamless appointment booking." />
                <div className="parent">
                    <div className="entry_content">
                        <h2 data-aos="fade-up">Context</h2>
                        <p data-aos="fade-up">Current brand marketing through social media faces inefficiencies as the process of securing creator endorsements is time-consuming, leading to reduced audience engagement. For content creators, brand partnerships are a primary revenue stream, yet the manual nature of the current approach is limited to consumer goods and basic services. Verticals with high ad spend, like insurance or healthcare, struggle to participate through influencer endorsements. The lack of alignment between brand endorsements and a creator’s existing content diminishes their favorability, resulting in lower audience engagement. Additionally, the prolonged timeline for simple paid partnerships, taking weeks to months, hampers the effectiveness of marketing efforts. There is a critical need for an innovative and efficient approach that addresses these challenges, ensuring timely, versatile, and seamlessly aligned creator-brand collaborations for more impactful social media marketing.
                        </p>
                    </div>
                    <div className="group_content" data-aos="fade-up">
                        <div className="left">
                            <h2 style={{ marginLeft: "20px", fontSize: "55px" }}>Solution</h2>
                            <p>Brandzino emerges as the solution—an innovative content marketplace designed to simplify the process of seamlessly integrating your brand into content. Brandzino empowers creators to organically weave brand messaging into their original content, captivating viewership in a natural and engaging manner. Born out of the need to enhance the synergy between brands and creators, Brandzino streamlines the creation of compelling content that effortlessly carries the brand’s identity. By leveraging this platform, brands can effortlessly stamp their mark on content, fostering a more authentic connection with their audience while maximizing the impact of social media marketing. Brandzino stands as a testament to the evolution of content creation, offering a dynamic solution that aligns brand objectives with the creativity of content creators in an intuitive and effective way.
                            </p>

                        </div>
                        <div className="right" ><img style={{ backgroundColor: "#322E79", padding: "37px 37px 37px 37px" }} src={Group} alt="" /></div>

                    </div>

                    <div className="entry_content">
                        <h2 data-aos="fade-up">Visual design
                        </h2>
                        <img data-aos="fade-left" src={MockupBrandzino} alt="" />
                        <h2 data-aos="fade-up">Sign up Wizard
                        </h2>
                        <img data-aos="fade-up" src={MockupBrandzino_3} alt="" />
                        <h2 data-aos="fade-up">How Brandzino’s Marketplace Works
                        </h2>
                        <img data-aos="fade-up" src={Brandzinosolutions} alt="" />
                        <h2 data-aos="fade-up" style={{ fontSize: "30px" }}>Promote Brand Alongside Engaging Content and Creators
                        </h2>
                        <p data-aos="fade-up">Creators seamlessly integrate brands into their content on Brandzino, tagging and notifying brands of Ready-to-Post content eligible for sponsorship. Unlock an expansive pool of creative talent as creators actively seek sponsorship for their content, providing your brand with a wealth of engaging opportunities.

                        </p>
                        <p data-aos="fade-up">Moreover, our creator contracts grant brands explicit permission to utilize sponsored content in their promotional materials. This transparent and collaborative approach ensures a smooth partnership experience, enabling brands to leverage captivating content for their broader promotional strategies. With Brandzino, the synergy between creators and brands is streamlined, fostering a dynamic and mutually beneficial relationship in the realm of content marketing.

                        </p>
                        <img data-aos="fade-up" src={Group_1000} alt="" />
                        <h2 data-aos="fade-up">Performance Tracking
                        </h2>
                        <p data-aos="fade-up">Enhance the ability to measure and monitor sponsored content effectively by utilizing our platform. We offer comprehensive tracking of essential metrics for both individual posts and entire campaigns, seamlessly integrated with Instagram and TikTok. Our solution goes beyond by providing full integration across major social media platforms, delivering real-time insights into viewership and engagement performance. With this integrated approach, you gain a holistic understanding of your content’s impact, empowering you to make data-driven decisions and optimize your sponsored posts for maximum reach and engagement across diverse social media landscapes.

                        </p>
                        <img data-aos="fade-up" style={{ marginTop: "20px" }} src={Group_10695} alt="" />
                    </div>

                    <InnerSlider />
                </div>
            </div>

        </div>)
}

export default Brandzino