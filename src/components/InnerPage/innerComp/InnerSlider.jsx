import React from 'react'
import "../style.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import arrow from "../../../assets/image/arrow-up.svg"
import { portfolio } from '../../../json/portfolio';
import { Link } from 'react-router-dom';

const InnerSlider = () => {
    return (
        <div className='inner_slider'>
            <div className="title">
                <h3>SEE MORE PROJECTS</h3>

                <div className="custom-navigation">
                    <button className="custom-prev-inner" >
                        <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19 12H5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
                            <path d="M12 5L5 12L12 19" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
                        </svg>


                    </button>
                    <button className="custom-next-inner" >
                        <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
                            <path d="M12 5L19 12L12 19" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
                        </svg>

                    </button>
                </div>
            </div>

            <div className="swiper_Wrapper">
                <Swiper
                    navigation={{
                        prevEl: '.custom-prev-inner',
                        nextEl: '.custom-next-inner',
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
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1200: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >

                    <div className="portfolio_wrapper">

                        {
                            portfolio.map((item, i) => {
                                console.log(item.productlink)
                                return (
                                    <SwiperSlide key={i}><div className="portfolio_container" >
                                        <img src={item.image} alt="" className='thumb' />
                                        <Link to={item.link} className='icon_link' style={{ top: "400px", right: "80px" }}>
                                            <img width={182} height={182} src={arrow} alt="" />
                                        </Link>
                                        <div className="portfolio_info">
                                            <span><Link to={item.productlink}>{item.role}</Link></span>
                                            <h3><Link to={item.link}>{item.Title}</Link></h3>
                                            <p>{item.para}

                                            </p>
                                        </div>
                                    </div></SwiperSlide>
                                )
                            })

                        }



                    </div>

                </Swiper>
            </div>
        </div>
    )
}

export default InnerSlider