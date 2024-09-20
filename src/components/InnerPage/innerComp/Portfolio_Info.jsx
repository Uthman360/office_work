import React from 'react'
import "../style.css";
import Button from './Button';
const Portfolio_Info = ({ role, duration, tools, para, title }) => {
    return (
        <div className="portfolio_info">
            <div className="info_container">
                <div className="left_info">
                    <div className="info_item">
                        <h3>My Role</h3>
                        <span>{role}</span>
                    </div>
                    <div className="info_item">
                        <h3>Duration</h3>
                        <span>{duration}</span>
                    </div>
                    <div className="info_item">
                        <h3>Tools</h3>
                        <span>{tools}</span>
                    </div>
                </div>
                <div className="right_info">
                    <p>{para}</p>

                    {title && <Button title={title} />}
                </div>
            </div>
        </div>)
}

export default Portfolio_Info