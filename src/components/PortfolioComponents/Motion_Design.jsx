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
    const [videoSrc, setVideoSrc] = useState('https://player.vimeo.com/video/734788811');

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
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
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
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide onClick={() => handleSlideClick("https://player.vimeo.com/video/512676002")}><img src={mo1} alt="Slide 1" /></SwiperSlide>
                    <SwiperSlide onClick={() => handleSlideClick("https://player.vimeo.com/video/709573559")}><img src={mo2} alt="Slide 2" /></SwiperSlide>
                    <SwiperSlide onClick={() => handleSlideClick("https://player.vimeo.com/video/411858147")}><img src={mo3} alt="Slide 3" /></SwiperSlide>
                    <SwiperSlide onClick={() => handleSlideClick("https://player.vimeo.com/video/734788811")}><img src={mo4} alt="Slide 4" /></SwiperSlide>
                    <SwiperSlide onClick={() => handleSlideClick("https://player.vimeo.com/video/784811167")}><img src={mo5} alt="Slide 5" /></SwiperSlide>
                    <SwiperSlide onClick={() => handleSlideClick("https://player.vimeo.com/video/391016097")}><img src={mo6} alt="Slide 6" /></SwiperSlide>
                    <SwiperSlide onClick={() => handleSlideClick("https://player.vimeo.com/video/391014210")}><img src={mo7} alt="Slide 7" /></SwiperSlide>
                    <SwiperSlide onClick={() => handleSlideClick("https://player.vimeo.com/video/411827376")}><img src={mo8} alt="Slide 8" /></SwiperSlide>

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
