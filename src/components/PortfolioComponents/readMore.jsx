import React from 'react'
import arrow from "../../assets/image/arrow-up.svg"
import "./style.css";
import { Link } from 'react-router-dom';
const ReadMore = ({ link }) => {
    return (
        <div>
            <Link to={link}><button className='read_more'>Read More <img src={arrow} alt="" /></button></Link>
        </div>
    )
}

export default ReadMore