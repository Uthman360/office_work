import React, { useState } from 'react';
import "./style.css";
import Button from './Button';
import { Link, useLocation } from 'react-router-dom';

const HeroSection = () => {
    const location = useLocation();
    const [activeButton, setActiveButton] = useState(getActiveButton(location.pathname));

    const handleClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    function getActiveButton(pathname) {
        switch (pathname) {
            case '/digital-product':
                return 'Case studies';
            case '/web-dev':
                return 'Web Development';
            case '/mobile-apps':
                return 'Mobile Apps';
            default:
                return 'Case studies';
        }
    }

    return (
        <div className='hero'>
            <div className="marquee">
                <div>I CRAFT INTERACTIVE EXPERIENCE  I CRAFT INTERACTIVE EXPERIENCE</div>
            </div>
            <p>My portfolio highlights the innovative software and mobile applications I've
                developed, showcasing a variety of projects across multiple industries. With a
                strong emphasis on functionality and seamless user experiences, I aim to create
                solutions that not only meet user needs but also inspire genuine engagement. Dive
                in to discover the breadth and creativity of my work.</p>
            <div className="por_btn">
                <Link to={'/digital-product'}>
                    <Button
                        title={"Case studies"}
                        isActive={activeButton === 'Case studies'}
                        onClick={() => handleClick('Case studies')}
                    />
                </Link>
                <Link to={'/web-dev'}>
                    <Button
                        title={"Web Development"}
                        isActive={activeButton === 'Web Development'}
                        onClick={() => handleClick('Web Development')}
                    />
                </Link>
                <Link to={'/mobile-apps'}>
                    <Button
                        title={"Mobile Apps"}
                        isActive={activeButton === 'Mobile Apps'}
                        onClick={() => handleClick('Mobile Apps')}
                    />
                </Link>
            </div>
        </div>
    );
}

export default HeroSection;
