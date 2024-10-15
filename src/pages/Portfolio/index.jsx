import React, { useEffect } from 'react'
import HeroSection from '../../components/PortfolioComponents/HeroSection'
import useDocumentTitle from '../../config/useDocumentTitle'

const Portfolio = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    useDocumentTitle("Porfolio - Zeeshan")
    return (
        <div>
            <HeroSection />
        </div>
    )
}

export default Portfolio