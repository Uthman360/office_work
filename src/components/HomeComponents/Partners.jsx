import React from 'react'
import "./style.css";
import p1 from "../../assets/patners/Upbeing.png";
import p2 from "../../assets/patners/Rectangle-40133.png";
import p3 from "../../assets/patners/Rectangle-40134.png";
import p4 from "../../assets/patners/Rectangle-40135.png";
import p5 from "../../assets/patners/Rectangle-40136.png";
import p6 from "../../assets/patners/Rectangle-40132-1.png";
import p7 from "../../assets/patners/Rectangle-40133-1.png";
import p8 from "../../assets/patners/Rectangle-40134-1.png";
import p9 from "../../assets/patners/Rectangle-40135-1.png";
import p10 from "../../assets/patners/Rectangle-40136-1.png";

const Partners = () => {
    return (
        <div className='partners'>
            <h2>COMPANIES AND PARTNERS<br />

                WHO TRUSTED ME WITH THEIR PROJECTS
            </h2>

            <div className="partner_container">
                <div className="inner_partner">
                    <img src={p1} alt="" />
                </div>
                <div className="inner_partner">
                    <img src={p2} alt="" />
                </div>
                <div className="inner_partner">
                    <img src={p3} alt="" />
                </div>
                <div className="inner_partner">
                    <img src={p4} alt="" />
                </div>
                <div className="inner_partner">
                    <img src={p5} alt="" />
                </div>
                <div className="inner_partner">
                    <img src={p6} alt="" />
                </div>
                <div className="inner_partner">
                    <img src={p7} alt="" />
                </div>
                <div className="inner_partner">
                    <img src={p8} alt="" />
                </div>
                <div className="inner_partner">
                    <img src={p9} alt="" />
                </div>
                <div className="inner_partner">
                    <img src={p10} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Partners