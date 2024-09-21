import React from 'react'
import HeroSection from '../../components/PortfolioComponents/HeroSection'
import useDocumentTitle from '../../config/useDocumentTitle'

const Portfolio = () => {
    useDocumentTitle("Porfolio - Zeeshan")
    return (
        <div>
            <HeroSection />
        </div>
    )
}

export default Portfolio