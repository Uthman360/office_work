import React from 'react'
import Thumb from "../../assets/image/Thumb-Upbeing-02.png"
import arrow from "../../assets/image/arrow.svg"
import WT from "../../assets/image/WT-mock.png"
import Rectangle from "../../assets/image/Rectangle.png"
import thumbnail from "../../assets/inner/Momentum-thumbnail.png"

import "./style.css";
import { Link } from 'react-router-dom'
const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="main_img">
                <img src={Thumb} alt="" />

                <Link to={'/digital-product/upbeing'} className='icon_link' style={{ top: "332px" }}>
                    <img width={182} height={182} src={arrow} alt="" />
                </Link>
            </div>
            <div className="portfolio_home">
                <Link to={'/digital-product/productdesign'}>  <span>Product design</span>
                </Link>
                <Link to={'/digital-product/upbeing'}>   <h3>UpBeing</h3>
                    <p>A transformative platform, unlocking automated habit-tracking, providing personalized insights, and elevating your daily routine. Where connectivity meets empowerment, it fosters positive habits for intentional and fulfilling personal growth.

                    </p></Link>
            </div>

            <div className="portfolio_wrapper" style={{ display: "flex", gap: "70px" }}>
                <div className="portfolio_container" >
                    <img src={WT} alt="" className='thumb' />

                    <Link to={'/digital-product/ezypeg'} className='icon_link' style={{ left: "450px" }}>
                        <img width={182} height={182} src={arrow} alt="" />
                    </Link>
                    <div className="portfolio_info">
                        <Link to={'/digital-product/productdesign'}>                        <span>Product design</span>
                        </Link>

                        <Link to={'/digital-product/productdesign'}><h3>EzyPeg</h3>
                            <p>One-stop local transit app that I built to help commuters experience their journey at ease

                            </p></Link>
                    </div>
                </div>
                <div className="portfolio_container" >
                    <img src={thumbnail} alt="" className='thumb' />
                    <Link to={'/digital-product/pegdoc'} className='icon_link' style={{ right: "118px" }}>
                        <img width={182} height={182} src={arrow} alt="" />
                    </Link>
                    <div className="portfolio_info">

                        <Link to={'/digital-product/productdesign'}>                        <span>Product design</span>
                        </Link>
                        <Link to={'/digital-product/pegdoc'}><h3>PegDoc</h3>
                            <p>There is no excerpt because this is a protected post.
                            </p></Link>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Portfolio