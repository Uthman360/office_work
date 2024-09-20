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
            case '/design-system':
                return 'Design system';
            case '/visual-design':
                return 'Visual design';
            case '/motion-design':
                return 'Motion design';
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
                <Link to={'/design-system'}>
                    <Button
                        title={"Design system"}
                        isActive={activeButton === 'Design system'}
                        onClick={() => handleClick('Design system')}
                    />
                </Link>
                <Link to={'/visual-design'}>
                    <Button
                        title={"Visual design"}
                        isActive={activeButton === 'Visual design'}
                        onClick={() => handleClick('Visual design')}
                    />
                </Link>
                <Link to={'/motion-design'}>
                    <Button
                        title={"Motion design"}
                        isActive={activeButton === 'Motion design'}
                        onClick={() => handleClick('Motion design')}
                    />
                </Link>
            </div>
        </div>
    );
}

export default HeroSection;
