import React, { useEffect } from 'react'
import "./style.css";
import Single_Banner from './innerComp/Single_Banner';
import Portfolio_Info from './innerComp/Portfolio_Info';
import Momentum_thumbnail from "../../assets/inner/Momentum-thumbnail.png";
import P_Momentum from "../../assets/inner/P-Momentum.png"
import Momentum_styleguide from "../../assets/inner/Momentum-styleguide.png"
import Rectangle5 from "../../assets/inner/Rectangle5.png"
import Momentum_mock from "../../assets/inner/Momentum_mock.png"
import Momentumblog from "../../assets/inner/Momentum-blog.png"
import Momentumservices from "../../assets/inner/Momentum-services.png"
import InnerSlider from './innerComp/InnerSlider2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useDocumentTitle from '../../config/useDocumentTitle';
const Momentum = () => {
    useDocumentTitle("Momentum - Zeeshan")

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with duration
    }, []);
    return (
        <div className='momentum'>
            <Single_Banner link={'/visual-design/productdesign'} role="Visual design" title="Momentum" image={Momentum_thumbnail} />
            <div className="being">
                <Portfolio_Info role="Visual Designer" duration="3 weeks" tools="Figma, After Effect, Adobe Illustration" para="Momentum is an engaging website dedicated to physical therapy, empowering users with comprehensive knowledge of the underlying scientific principles while facilitating seamless appointment booking." />

                <div className="parent">
                    <div className="entry_content">
                        <h2 data-aos="fade-up">Context</h2>
                        <p data-aos="fade-up">Asking others to take a moment on their health is not an easy task. People are afraid of the unknown. So, they need reassurance. I designed this website with that very intention. This website had to be informative, welcome, and bold. Anyone who visits this site should know it will guide them through a rough time. It needed to instill confidence. I used a direct approach to communicate with the user base.

                        </p>
                        <div className="video_section">
                            <iframe
                                id="videoIframe"
                                src="https://player.vimeo.com/video/921603688"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <h2 data-aos="fade-up">Solution</h2>
                        <p data-aos="fade-up">The easy flow of texts creates a simple yet appealing visual language to retain attention. The layout I designed for the website is decluttered and convenient. Visuals were added to help the client express their services at a single glance.
                        </p>
                        <p data-aos="fade-up">Different font sizes were used for emphasis. It also helped visitors quickly grasp the content structure. The background was easy on the eyes so it could focus on one thing – the services that can help the client’s users.</p>

                        <img data-aos="fade-right" src={P_Momentum} alt="" />
                        <h2 data-aos="fade-up">Style guide
                        </h2>
                        <p data-aos="fade-up">The color scheme I used for the website design was inspired by the logo of the company. It was meant to complement the design and accents. The colors play multiple roles.
                        </p>
                        <p data-aos="fade-up">The color yellow not only helps highlight the key points but also adds a tone of optimism to the website. The other predominant color is dark blue. It is associated with depth but more importantly, expertise.
                        </p>
                        <p data-aos="fade-up">The combination of the two colors resulted in a compelling design!

                        </p>
                        <img data-aos="fade-left" src={Momentum_styleguide} alt="" />
                        <h2 data-aos="fade-up">Website features
                        </h2>
                        <img data-aos="fade-left" src={Rectangle5} alt="" />
                        <h2 data-aos="fade-up">OTHER SCREENS
                        </h2>
                        <img data-aos="fade-left" src={Momentum_mock} alt="" />
                        <img data-aos="fade-up" src={Momentumblog} alt="" />
                        <img data-aos="fade-up" src={Momentumservices} alt="" />

                    </div>
                    <InnerSlider />
                </div>
            </div>

        </div>
    )
}

export default Momentum