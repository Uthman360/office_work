import React from 'react'
import { Link } from 'react-router-dom'
import "../style.css";
import arrow from "../../../assets/image/arrow-up.svg"

const Button = ({ title }) => {
    return (
        <Link><button className='but'>{title}<img src={arrow} alt="" /></button></Link>
    )
}

export default Button