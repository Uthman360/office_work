import React from 'react'
import "../style.css";
import { Link } from 'react-router-dom';
const Single_Banner = ({ role,link, title, image }) => {
    return (
        <div className="single_banner">
            <h4><Link to={link}>{role}</Link></h4>
            <h1>{title}</h1>
            <img src={image} alt="" />
        </div>)
}

export default Single_Banner