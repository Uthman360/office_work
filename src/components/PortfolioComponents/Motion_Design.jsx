import React, { useState } from 'react';
import HeroSection from './HeroSection';
import './style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import mo1 from '../../assets/image/mo1.png';
import mo2 from '../../assets/image/mo2.png';
import mo3 from '../../assets/image/mo3.png';
import mo4 from '../../assets/image/mo4.png';
import mo5 from '../../assets/image/mo5.png';
import mo6 from '../../assets/image/mo6.png';
import mo7 from '../../assets/image/mo7.png';
import mo8 from '../../assets/image/mo8.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Example using react-icons
import useDocumentTitle from '../../config/useDocumentTitle';

const Motion_Design = () => {
    useDocumentTitle("Motion Design - Zeeshan")
    const [videoSrc, setVideoSrc] = useState('https://player.vimeo.com/video/1017996427');

    const handleSlideClick = (src) => {
        setVideoSrc(src);
    };

    return (
        <div>
            <HeroSection />
            <div className="motion_design">
                <div className="video_motion">
                    <iframe
                        src={videoSrc}
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="swiper_Wrapper">
                    <Swiper
                        navigation={{
                            prevEl: '.custom-prev',
                            nextEl: '.custom-next',
                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                        spaceBetween={50}
                        loop={true}
                      
                        breakpoints={{
                            576: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                       
                    >
                        <SwiperSlide onClick={() => handleSlideClick("https://player.vimeo.com/video/1017996427")}><img src={"https://i.vimeocdn.com/video/1936103708-bb6de21e67168190f59d8834da829564c328308c46794cb29ebe472568300f01-d?mw=1100&mh=619"} alt="Slide 1" /></SwiperSlide>
                        <SwiperSlide onClick={() => handleSlideClick("https://player.vimeo.com/video/1017996335")}><img src={"https://i.vimeocdn.com/video/1936103576-7819ffda92d7fc66f9fc05324cf2f4cbeef5b5d20aa8d92da572be6248604f0f-d?mw=1100&mh=619"} alt="Slide 2" /></SwiperSlide>
                        <SwiperSlide onClick={() => handleSlideClick("https://player.vimeo.com/video/1017996247")}><img src={"https://i.vimeocdn.com/video/1936103498-1c7e61d99d08c4f453eef2683230dcc01617f9e1b6814482055a84bb3016dba1-d?mw=1100&mh=619"} alt="Slide 3" /></SwiperSlide>
                     

                        {/* Custom Navigation Buttons */}
                            <div className="custom-prev"><FaArrowLeft /></div>
                            <div className="custom-next"><FaArrowRight /></div>
                   
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Motion_Design;