import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import Single_Banner from './innerComp/Single_Banner'
import Portfolio_Info from './innerComp/Portfolio_Info'
import Rectangle from "../../assets/inner/Rectangle-40128-2.png"
import Shop_Solar_App_flow from "../../assets/inner/Shop-Solar-App-flow.png"
import Screenshot from "../../assets/inner/Screenshot.png"
import Group_10000 from "../../assets/inner/Group-10000.png"
import Group_2 from "../../assets/inner/Group2.png"
import mockuporder_landing from "../../assets/inner/mock-up-order-landing.jpg"
import { Navigation } from 'swiper/modules';
import General from "../../assets/inner/General-1.png";
import Orders_Selected from "../../assets/inner/Orders-Selected-Resources-1.png";
import Orders_Selected_1 from "../../assets/inner/Orders-Selected-1.png";
import Product_Digital_Assets_Add from "../../assets/inner/Product-Digital-Assets-Add-1.png";
import MyQuotesLanding from "../../assets/inner/My-Quotes-Landing-1.png";
import InnerSlider from './innerComp/InnerSlider2';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Shopsolarkits = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with duration
    }, []);
    return (
        <div className='shopsolarkits'>
            <Single_Banner link={'/visual-design/productdesign'} role="Visual design" title="Shopsolarkits" image={Rectangle} />
            <div className="being">
                <Portfolio_Info role="UX/UI Designer" duration="2 months" tools="Figma" para="Customer Self-Service Portal, empowering customers to effortlessly check their order status anytime." title="Live product" />

                <div className="parent">
                    <div className="entry_content">

                        <h2 data-aos="fade-up">Context</h2>
                        <p data-aos="fade-up">ShopSolar stands out as the premier destination for off-grid, hybrid, portable, and emergency backup solar power systems in the USA. Recognizing the need for enhancement in their operations, they’ve partnered with Rappid Software to address a pressing challenge. Presently, ShopSolar faces a significant volume of customer service inquiries related to order status directed to SSK Customer Service representatives. Additionally, the tracking of shipping statuses for individual components within an order is currently handled manually. Through collaboration with Rappid Software, ShopSolar aims to streamline these processes and elevate the overall efficiency of their customer service and order management systems.</p>

                        <h2 data-aos="fade-up">Solution</h2>

                        <p data-aos="fade-up">A proposed product solution for SSK involves the development of a Customer Self-Service Portal. This portal would empower customers to effortlessly check their order status at any given time. Furthermore, the portal would offer additional functionalities, such as linking to PV Platform tools, downloading wiring diagrams, and reviewing draft orders that can seamlessly transition into actual orders. By implementing this self-service solution, SSK can substantially reduce the staffing needed to handle customer service requests, enhancing operational efficiency.

                        </p>
                        <img data-aos="fade-right" src={Shop_Solar_App_flow} alt="" />
                        <h2 data-aos="fade-up">Visual design
                        </h2>
                        <p data-aos="fade-up">A proposed product solution for SSK involves the development of a Customer Self-Service Portal. This portal would empower customers to effortlessly check their order status at any given time. Furthermore, the portal would offer additional functionalities, such as linking to PV Platform tools, downloading wiring diagrams, and reviewing draft orders that can seamlessly transition into actual orders. By implementing this self-service solution, SSK can substantially reduce the staffing needed to handle customer service requests, enhancing operational efficiency.

                        </p><img data-aos="fade-left" src={Screenshot} alt="" />
                        <h2 data-aos="fade-up">SIGN IN/ SIGN UP WIZARD
                        </h2>
                        <img data-aos="fade-up" src={Group_10000} alt="" />
                        <h2 data-aos="fade-up">ADMIN VIEW
                        </h2>
                        <p data-aos="fade-up">
                            The Admin Views Dashboard is a powerful tool for efficient order management. It provides the capability to seamlessly navigate through order lists, specify components for kits, and link digital assets for customer accessibility. Additionally, the dashboard enables the input of tracking numbers and monitoring the overall status of both orders and individual components. Furthermore, administrators can easily access and review draft orders, initiating their completion on behalf of customers when necessary.


                        </p>
                        <img data-aos="fade-left" src={Group_2} alt="" />

                        <h2 data-aos="fade-up">CUSTOMER VIEW
                        </h2>
                        <p data-aos="fade-up">Empowering customers with a seamless experience in managing draft orders, the Customer View feature offers the ability to effortlessly “Complete” a draft order through integration, initiating the checkout process directly in Shopify. Customers can also access a comprehensive view of their orders and order history. Additionally, they can conveniently view and download wiring diagrams and link to relevant videos hosted on popular platforms like YouTube or Vimeo. This integrated and user-friendly approach enhances customer engagement and facilitates a smoother order management process.

                        </p>
                        <img data-aos="fade-up" src={mockuporder_landing} alt="" />
                    </div>
                    <Swiper navigation={true} modules={[Navigation]} loop={true} breakpoints={{
                        576: {
                            slidesPerView: 1, // 1 slide on small screens
                            spaceBetween: 10, // Adjust space between slides
                        },
                        768: {
                            slidesPerView: 1, // 2 slides on medium screens
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 1, // 4 slides on large screens
                            spaceBetween: 30,
                        },
                    }} id="mySwiper">
                        <SwiperSlide><img src={General} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={Orders_Selected} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={Orders_Selected_1} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={Product_Digital_Assets_Add} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={MyQuotesLanding} alt="" /></SwiperSlide>
                    </Swiper>

                    <InnerSlider />
                </div>
            </div>

        </div>
    )
}

export default Shopsolarkits