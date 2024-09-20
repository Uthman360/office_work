import React from 'react'
import "../HomeComponents/style.css";
import arrow from "../../assets/image/arrow.svg"
import { portfolio } from '../../json/portfolio';
import { Link } from 'react-router-dom';
const ProductDesign = () => {
    return (
        <div className="productdesign">
            <h2 className='product_h'>Product design</h2>
            <div className="portfolio_wrapper" style={{ padding: "20px" }}>
                {
                    portfolio.map((item, i) => {
                        return (
                            <div className="portfolio_container" >
                                <Link to={item.link}><img src={item.image} alt="" className='thumb' /></Link>                                <div className="portfolio_info">
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
        </div>
    )
}

export default ProductDesign