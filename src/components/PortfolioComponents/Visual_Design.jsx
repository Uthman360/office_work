import React from 'react'
import "./style.css";
import HeroSection from './HeroSection';
import ReadMore from './readMore';
import { Visualdesign } from '../../json/visual_design';
import { Link } from 'react-router-dom';
import useDocumentTitle from '../../config/useDocumentTitle';
const Visual_Design = () => {
    useDocumentTitle("Visual Design - Zeeshan")

    return (
        <div>
            <HeroSection />
            <div className='container'>
                {Visualdesign.map((caseStudy) => (
                    <div className="item" key={caseStudy.id}>
                        <div className="left">
                            <img src={caseStudy.image} alt={caseStudy.title} />
                        </div>
                        <div className="right">
                            <div className="inner">
                                <span><Link to={caseStudy.productlink}>{caseStudy.category}</Link></span>
                                <h3><Link to={caseStudy.link}>{caseStudy.title}</Link></h3>                                <p>{caseStudy.description}</p>
                                <ReadMore link={caseStudy.link} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Visual_Design