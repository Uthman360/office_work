import React from 'react'
import { visaul_design } from '../../json/portfolio'
import "../HomeComponents/style.css";
import arrow from "../../assets/image/arrow.svg"
import { Link } from 'react-router-dom';
const VisualDesgin = () => {
  return (
    <div className="productdesign">
    <h2 className='product_h'>Visual design</h2>
    <div className="portfolio_wrapper" style={{ padding: "20px" }}>
        {
            visaul_design.map((item, i) => {
                return (
                    <div className="portfolio_container" >
                        <Link to={item.link}><img src={item.image} alt="" className='thumb' /></Link>
                        <div className="portfolio_info">
                        <span><Link to={item.productlink}>{item.role}</Link></span>
                        <h3><Link to={item.link}>{item.Title}</Link></h3>
                            <p>{item.para}

                            </p>
                        </div>
                    </div>
                )
            })
        }

    </div>
</div>  )
}

export default VisualDesgin