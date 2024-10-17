import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import './Slider.css'; // Update your custom CSS here
import { testimonials } from '../../json/testimonials';
import { Navigation } from 'swiper/modules';



const Slider = () => {
    const swiperRef = useRef(null);

    return (
        <div className="testimonial-slider">
            <Swiper
                ref={swiperRef}

                slidesPerView={1}
                // slidesPerGroup={2}
                spaceBetween={30}
                pagination={{ clickable: true }}
                loop={true}
                modules={[Navigation]}


                className="swiper-container"
            >
                {Array.from({ length: Math.ceil(testimonials.length / 4) }).map((_, slideIndex) => (
                    <SwiperSlide key={slideIndex} className="swiper-slide">
                        <div className="inner_item_container">
                            {testimonials.slice(slideIndex * 4, (slideIndex + 1) * 4).map((testimonial, index) => (
                                <div key={index} className="item_main">
                                    <div  className="inner_item_clients">
                                        <img src={testimonial.Image} alt="" />
                                        <div className="content_item_clients">
                                            <h3>{testimonial.name} <span>{testimonial.position}</span></h3>
                                            <h4>{testimonial.title}</h4>
                                            <a href="#"><img src={testimonial.linkedin} className="linkedin" alt="" /></a>
                                            <p>{testimonial.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
                <div className="custom-navigation">
                    <button className="custom-prev-home" onClick={() => swiperRef.current.swiper.slidePrev()}>
                        <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19 12H5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
                            <path d="M12 5L5 12L12 19" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
                        </svg>


                    </button>
                    <button className="custom-next-home" onClick={() => swiperRef.current.swiper.slideNext()}>
                        <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
                            <path d="M12 5L19 12L12 19" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
                        </svg>

                    </button>
                </div>
            </Swiper>

        </div >
    );
};

export default Slider;
