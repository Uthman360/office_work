import React, { useEffect } from 'react'
import "./style.css";
import ThumbUpbeing from "../../assets/inner/Thumb-Upbeing-02.png"
import Check_in_ref from "../../assets/inner/Check-in_ref.png"
import group from "../../assets/inner/Group.png"
import Check_in_change from "../../assets/inner/Check-in-change.png"
import Social from "../../assets/inner/Social-intro.png"
import group1 from "../../assets/inner/Group-1.png"
import research from "../../assets/inner/research-findings.png"
import group2 from "../../assets/inner/Group-2.png"
import group3 from "../../assets/inner/Group-3.png"
import group4 from "../../assets/inner/Group-4.png"
import group5 from "../../assets/inner/Group-5.png"
import mockup from "../../assets/inner/Mock-up.png"
import InnerSlider from './innerComp/InnerSlider';
import Single_Banner from './innerComp/Single_Banner';
import Portfolio_Info from './innerComp/Portfolio_Info';
import AOS from 'aos';
import 'aos/dist/aos.css';
const UpBeing = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with duration
    }, []);
    return (
        <div className='upbeing'>
            <Single_Banner link={'/digital-product/productdesign'} role="Product design" title="UpBeing" image={ThumbUpbeing} />
            <div className="being">
                <Portfolio_Info role="Product Designer" duration="8 months" tools="Figma, Figjam, Dovetail, After effect, Lottiefiled, Google meets" para="A transformative platform, unlocking automated habit-tracking, providing personalized insights, and elevating your daily routine. Where connectivity meets empowerment, it fosters positive habits for intentional and fulfilling personal growth." title="Live product" />

                <div className="parent">
                    <div className="entry_content" data-aos="fade-up">
                        <h2>Context</h2>
                        <p>UpBeing provides valuable insights into users’ moods through daily mood check-ins and passive data collection. Upon joining the team, my primary responsibilities included actively contributing to the maintenance of the Design system, enhancing the Check-in experience, assisting with research initiatives, and successfully launching the Social feature.

                        </p>

                        <h2>The Check-in</h2>
                        <p>UpBeing’s primary feature, check-ins, serves as a link between users’ activities and their emotions. However, our goal was not merely to create an emotion-tracking app. Capturing users’ emotional input in a minute posed a challenge, but we aimed for more than just collection. We aspired to encourage users to reflect deeply and differently on their emotions within that minute.
                        </p>
                        <p>The objective was for UpBeing to help users comprehend the connection between their actions and emotions, unraveling the ‘why’ behind their feelings. Various models were explored, including Likert scale questions, mood wheels, and emoji scales. Likert questions proved too cumbersome for multiple daily check-ins, while the emoji scale oversimplified nuanced emotions. The mood wheel, with its representation of primary and secondary emotions, emerged as a strong contender and remains a preferred mental model.
                        </p>
                        <p>Ultimately, we chose to structure our check-in process based on a modified version of the valence-arousal scale.

                        </p>
                        <img src={Check_in_ref} data-aos="fade-right" alt="" />
                        <p data-aos="fade-up">Initially, this was a single quadrant that asked users to identify what they were feeling. But what we found when we tested this with users was that they struggled to separate energy level from attitude, and had no concept of which moods lived in each quadrant. So, we broke up these four options into two simple binary questions: positive or negative, high or low.
                        </p>
                        <img src={group} data-aos="fade-left" alt="" />
                        <p data-aos="fade-up">In previous app versions, users were confined to a specific quadrant of the mood grid based on their responses to two questions. However, we have since abandoned this approach. We discovered that users derive significant value from the flexibility to explore their likely feelings in relation to the full spectrum of emotions. It is crucial to us that users have the freedom to investigate and, if they find another area of the grid more accurately represents their feelings, they are encouraged to explore it. Our primary goal is to foster an environment where individuals feel empowered to explore and understand their emotions.

                        </p>
                        <img src={Check_in_change} data-aos="fade-up" alt="" />
                        <hr />
                        <h3 data-aos="fade-up">The Social Feature</h3>
                        <p data-aos="fade-up">Aligned with our OKRs, we aspire to launch the “Your Orbit” social feature, a purpose-built MVP designed to enhance interactions among UpBeing users. This feature will enable users to share their moods, fostering genuine support within their intimate circles. Our vision is to cultivate an environment where UpBeing users can connect meaningfully, providing mutual support and understanding.
                        </p>
                        <img src={Social} data-aos="fade-up" alt="" />
                    </div>
                    <div className="statement" data-aos="fade-up">
                        <h2>THE PROBLEM STATEMENT</h2>

                        <p>Our current value prop is based on helping users understand their own wellbeing and empowering them to make change by understanding how their behaviours and emotions affect their wellbeing. However, this ability is only self-reflective, and limited to a ‘Single Player Experience’ which does not allow for users to share or engage with other users.</p>
                        <p>We are at risk for users churning from the app, once they feel they have ‘seen it all’, or made improvements based on their own data.

                        </p>
                        <p>The introduction of social features (or a multi-player experience) for the UpBeing app is intended to achieve an increase in daily active users, and increase user retention overall.

                        </p>
                    </div>
                    <div className="group_about" data-aos="fade-up">
                        <p>We know that social features give an app the potential for virality. But what do social features look like for UpBeing? How do we ensure our social features meet customer expectations?  The overall objective of this research is to develop a deeper understanding of what users expect and want from social/multi-player offerings on the app.
                        </p>
                        <div className="group_content">
                            <div className="left" data-aos="fade-up">

                                <p>This research was conducted to help inform the My Circle product direction, specifically understanding how people manage their emotional wellbeing through connections.

                                </p>
                                <ul>
                                    <li><span>How people get support and from who when having good days and bad days, and who they reach out to on a day-to-day basis for emotional connection. </span></li>
                                    <li><span> Understand what people do when giving support to other people.                            </span></li>
                                    <li><span>Understand people’s motivations and behaviours around wellness technology usage, adoption, and access.
                                    </span></li>
                                    <li><span>Understand how people take action on insights and recommendations from other wellness apps.
                                    </span></li>
                                    <li><span>Understand what would make connecting on wellbeing through the UpBeing a good experience.
                                    </span></li>
                                </ul>
                            </div>
                            <div className="right" data-aos="fade-left"><img src={group1} alt="" /></div>
                        </div>
                    </div>

                    <div className="eco_inner">
                        <img src={research} alt="" data-aos="fade-right" />

                        <h2>EXPLORING SOLUTIONS
                        </h2>
                        <div className="group_content" data-aos="fade-up">
                            <div className="left">

                                <p>As part of our MVP My Orbit launch, users will have the ability to:
                                </p>
                                <ul>
                                    <li><span>Create a post that adds context to their check-in data visible to others in their orbit
                                    </span></li>
                                    <li><span> Indicate their openness to communicate with others based on their current emotional state
                                    </span></li>
                                    <li><span>View and react to other users’ posts
                                    </span></li>
                                    <li><span>View another users profile
                                    </span></li>
                                    <li><span>View their own mood data over a day, week and month
                                    </span></li>
                                    <li><span>View others’ mood data over a day, week and month
                                    </span></li>
                                    <li><span>See some passive data from connected apps and devices
                                    </span></li>
                                </ul>
                            </div>
                            <div className="right"><img src={group2} alt="" /></div>

                        </div>
                    </div>
                    <div className="ecom_content">
                        <h2>KICK OFF THE DESIGN</h2>
                        <p data-aos="fade-down">After synthesizing research data, predominantly gathered through concept testing and user interviews, we meticulously crafted user stories to inform the creation of wireframes.

                        </p>
                        <img src={group3} alt="" />
                        <p data-aos="fade-down">I worked closely with the developer and data team, conducting thorough UX reviews at various stages of the process. My focus was on maintaining alignment with brand visuals and language, with a strong emphasis on prioritizing the usability of the new feature.</p>
                        <img src={group4} alt="" />

                        <h2>FINAL DESIGN</h2>
                        <img data-aos="fade-right" src={mockup} alt="" />
                        <h2 style={{ borderTop: "1px solid" }}>The impact</h2>
                        <p data-aos="fade-up">U‍ser feedback from pre-launch diary study. A diary study is a research method where participants record their experiences in a journal or online platform over a period of time. This provides rich data about their natural behavior and experiences.

                        </p>
                        <img src={group5} style={{ marginBottom: "20px" }} alt="" />
                        <hr />
                    </div>
                    <InnerSlider />
                </div>
            </div>
        </div>
    )
}

export default UpBeing