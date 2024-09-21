import React, { useEffect } from 'react'
import "./style.css";
import wt from "../../assets/image/WT-mock.png"
import Single_Banner from './innerComp/Single_Banner';
import Portfolio_Info from './innerComp/Portfolio_Info';
import designprocess from "../../assets/inner/design-process.png"
import project_goals from "../../assets/inner/project_goals.png"
import testimonials from "../../assets/inner/testimonials.png"
import competitor from "../../assets/inner/competitor.png"
import personas1 from "../../assets/inner/personas-01.png"
import personas2 from "../../assets/inner/personas-02.png"
import experiencemap from "../../assets/inner/experience-map.png"
import IAx from "../../assets/inner/IA@2x.png"
import Task1 from "../../assets/inner/Task1.png"
import Sketch from "../../assets/inner/Sketch.png"
import test from "../../assets/inner/test-ux.png"
import visual from "../../assets/inner/visual-identity.png"
import UIdesign_Page_01 from "../../assets/inner/UI-design-3_Page_01.jpg"
import Frame from "../../assets/inner/Frame.png"
import UIdesign_Page_11 from "../../assets/inner/UI-design-3_Page_11.jpg"
import Planatrip from "../../assets/inner/Plan-a-trip.png"
import Buyticket from "../../assets/inner/Buy-ticket.png"
import Topupandeticket from "../../assets/inner/Top-up-and-eticket.png"
import InnerSlider from './innerComp/InnerSlider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useDocumentTitle from '../../config/useDocumentTitle';


const EzyPeg = () => {
    useDocumentTitle("EzyPeg - Zeeshan")

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with duration
    }, []);

    return (
        <div className='ezypeg'>
            <Single_Banner link={'/digital-product/productdesign'} role="Product design" title="EzyPeg" image={wt} />

            <div className="being">
                <Portfolio_Info role="Product Designer" duration="8 months" tools="Figma, Adobe Illustrator, Adobe Photoshop" para="One-stop local transit app that I built to help commuters experience their journey at ease" />

                <div className="parent">
                    <div className="entry_content">
                        <h2 data-aos="fade-up">Context </h2>
                        <p data-aos="fade-up">An 8-week capstone project to obtain the certificate in UX design at BrainStation that creates a compelling and practical digital experience – EzyPeg. EzyPeg is a one-stop local transit app that I built to help commuters experience their journey at ease. The sole purpose of this project is to enrich the digital experience of users where they can find direction, get real-time traffic updates, contact online support, and process payment.</p>
                        <h2 data-aos="fade-up">The Check-in  </h2>
                        <p data-aos="fade-up">When approaching this design challenge, I leveraged design thinking methodology to ensure my focus throughout the process was on the people I was designing and creating for. Most importantly, I needed it to be desirable and address real human needs.</p>
                        <img data-aos="fade-up" src={designprocess} alt="" />
                    </div>
                    <div className="econ_inner">
                        <span data-aos="fade-down">EMPATHIZE</span>
                    </div>
                    <div style={{ marginLeft: "20px" }} className="e-con-inner">
                        <h2 data-aos="fade-up">DiggingProblem into the </h2>
                        <p data-aos="fade-up">Traveling by bus is the only option for commuters who prefer public transport in Winnipeg. As many people count on the service on a daily basis, having a user-friendly and modern app is very essential for our community. However, most of commuters find it difficult to use the existing app due to lack of information and the time wasted to complete their journey. How do we make it easier for commuters to find info?

                        </p>
                        <h2 data-aos="fade-up">A sneak peak into solutins</h2>
                        <img data-aos="fade-up" style={{ width: "67%", textAlign: "center", margin: "0 auto" }} src={project_goals} alt="" />

                    </div>
                    <div className="statement" data-aos="fade-up">
                        <h2>PROJECT GOAL</h2>

                        <p>This project aims to make a one-stop local transit solution that would transform the commuting experience into a hassle-free and a more predictable one, so that more people are encouraged to use public transport, and existing users have a smoother experience.
                        </p>
                    </div>

                    <div className="econ_inner" style={{ marginTop: "20px" }}>
                        <span data-aos="fade-up">DEFINE</span>
                    </div>
                    <div className="group_content">
                        <div className="left">
                            <h2 data-aos="fade-up" style={{ fontSize: "40px" }}>Digging into the Problem</h2>
                            <p data-aos="fade-up">To understand the “why” behind the problem, I conducted five 30-minute interviews with Winnipeggers between the ages of 18-25 through online video calls in order to observe and gather information directly from the context of the problem. The interviews included 10 open-ended questions. </p>
                            <p data-aos="fade-up">I asked about their experiences, motivations, and pain points on the challenges they face during their journey, from on boarding to getting off the bus.</p>

                        </div>
                        <div className="right"><img data-aos="fade-left" src={testimonials} alt="" /></div>

                    </div>
                    <div className="ezy_cont">
                        <p data-aos="fade-up">After completing the interviews, I combed through the interview notes, classified quotes as pain points, motivations, or behaviours, and used empathy mapping to extract two main themes and insights:

                        </p>
                        <div className="ekit-wid-con">
                            <div className="left_con">
                                <h2>Routine commuters (The Planner)</h2>
                                <span class="bottom-line"></span>
                                <p>Since most regular office-goers and students use a familiar route, they would prefer an app that is quick, clear and accurate transit information. Uncertainly regarding seat availability forces some commuters to start their trips much easier than required in order to wait for an empty bus.

                                </p>
                            </div>
                            <div className="right_con">
                                <h2>Seasonal commuters (The Explorer)</h2>
                                <p>They sometimes forget about topping their transit card or don’t even have a transit card. They expect to have an online ticket booth. Since they don’t commute regularly, they need clear information, live information at quick glance.

                                </p>
                            </div>

                        </div>

                        <h2>Analyzing the competitors</h2>
                        <p>During the interviews, users were asked to rate their perception of competitor apps based on different categories regarding usability. By doing this, I was able to determine the format of strong and weak points/features and mental models that our targeted demographic had around them. I tested out the features to understand these points further — a combination of these key features made their way into my design.

                        </p>
                        <img src={competitor} data-aos="fade-left" alt="" />
                    </div>
                    <div className="econ_inner" style={{ marginTop: "10px" }}>
                        <span data-aos="fade-up">PERSONAS
                        </span>
                    </div>
                    <div className="ezy_cont" style={{ padding: "10px", borderRadius: "10px" }}>
                        <h2 data-aos="fade-up">Bringing Users to Life
                        </h2>
                        <p data-aos="fade-up">After synthesizing my interviews into insights and pulling out a key insight to focus on, I developed 2 personas to ensure my design process was driven by my target user’s goals and behaviours.</p>
                        <div className="ezy_img">
                            <div className="left_ezy">
                                <img src={personas1} alt="" data-aos="fade-left" />
                            </div>
                            <div className="right_ezy">
                                <img src={personas2} alt="" data-aos="fade-right" />
                            </div>
                        </div>
                        <p data-aos="fade-up">Using Irene, I developed an experience map in order to really understand how Irene currently interact within the problem space. I re-imagined the activities and touchpoints for Irene based on information from my interview. I also considered how The explorer would fare. The same experiences would occur but the underlying aim would be to avoid others, rather than to seek them out.

                        </p>
                        <img src={experiencemap} alt="" />

                    </div>
                    <div className="econ_inner" style={{ marginTop: "10px" }}>
                        <span data-aos="fade-up">INFORMATION ARCHITECTURE & TASK FLOWS
                        </span>
                    </div>
                    <div className="ezy_cont" style={{ padding: "10px", borderRadius: "10px" }}>
                        <h2 data-aos="fade-up" style={{ textAlign: "center", marginBottom: "30px" }}>Developing a solution
                        </h2>
                        <img data-aos="zoom-in" src={IAx} alt="" />
                        <h4 data-aos="fade-up">Information Architecture
                        </h4>
                        <img src={Task1} alt="" />
                        <h4 data-aos="fade-up">Primary Task Flow: Plan a journey
                        </h4>

                    </div>
                    <div className="econ_inner" style={{ marginTop: "30px" }}>
                        <span data-aos="fade-up">PROTOTYPE
                        </span>
                    </div>
                    <div className="ezy_cont" style={{ padding: "5px", borderRadius: "10px" }}>
                        <h2 data-aos="fade-up">Sketches and wireframes
                        </h2>
                        <p data-aos="fade-up">Once I was clear on my task flows, I used paper and pen to sketch out possible solutions. I started sketching out different ideas. Below are my top sketches that were translated to wireframes</p>
                        <p data-aos="fade-up">From the series of sketches I developed, I highlighted different ideas, features, and components to incorporate into the first round of low-mid-fidelity grayscale prototypes. Developing and working with grayscale prototypes allowed me to quickly iterate and test out components, layouts, information hierarchy, and screen flows before adding a visual identity.

                        </p>
                        <img data-aos="fade-zoom-in" src={Sketch} alt="" />
                    </div>
                    <div className="econ_inner" style={{ marginTop: "30px" }}>
                        <span data-aos="fade-up">TEST
                        </span>
                    </div>
                    <div className="ezy_cont" style={{ padding: "5px", borderRadius: "10px" }}>
                        <h2 data-aos="fade-up">Is my app user- friendly?
                        </h2>
                        <p data-aos="fade-up">During the wireframing process, I conducted two rounds of usability tests on ten different individuals to obtain practical, real-time feedback that was incorporated to improve the design and deliver a more frictionless user experience. The testers were asked to complete a set of five tasks while navigating through the prototype, which will helped me observe how real users interacted with the app and see if the app’s functions and features helped the user achieve their goals.

                        </p>
                        <img data-aos="fade-up" src={test} alt="" />
                    </div>
                    <div className="econ_inner" style={{ marginTop: "30px" }}>
                        <span data-aos="fade-up">REFINE
                        </span>
                    </div>
                    <div className="ezy_cont" style={{ padding: "5px", borderRadius: "10px" }}>
                        <h2 data-aos="fade-up">What does my brand embody?
                        </h2>
                        <p data-aos="fade-up">From the series of sketches I developed, I highlighted different ideas, features, and components to incorporate into the first round of low-mid-fidelity grayscale prototypes. Developing and working with grayscale prototypes allowed me to quickly test out components, layouts, information hierarchy, and screen flows before adding a visual identity.

                        </p>
                        <img src={visual} alt="" />
                        <h2 >Final UI
                        </h2>
                        <img data-aos="fade-up" style={{ width: "24%", margin: "50px 0px" }} src={UIdesign_Page_01} alt="" />
                        <img data-aos="fade-up" src={Frame} alt="" />

                        <img data-aos="fade-up" src={UIdesign_Page_11} style={{ width: "24%", margin: "50px 0px" }} alt="" />
                        <img data-aos="fade-up" src={Planatrip} alt="" />

                        <img data-aos="fade-up" src={Buyticket} style={{ width: "24%", margin: "50px 0px" }} alt="" />

                        <img src={Topupandeticket} alt="" />

                        <h2 data-aos="fade-up" style={{
                            marginTop: "129px",
                            marginBottom: "100px",
                        }}>New look – new experience
                        </h2>
                        <div className="video_section">
                            <iframe
                                id="videoIframe"
                                src="https://player.vimeo.com/video/734788811"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <hr style={{ marginTop: "30px" }} />

                    </div>
                    <InnerSlider />
                </div>
            </div>
        </div>
    )
}

export default EzyPeg