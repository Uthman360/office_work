import React, { useState } from 'react';
import './project.css'; // Link to the CSS file
import HeroSection from './HeroSection';
import ReadMore from './readMore';
import Button from './Button';

import { portfolioData } from '../../json/project';

// Sample portfolio data
// Sample portfolio data



const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredItems, setFilteredItems] = useState(portfolioData);

    // Filter function
    const handleFilterChange = (category) => {
        setSelectedCategory(category);
        if (category === 'All') {
            setFilteredItems(portfolioData);
        } else {
            setFilteredItems(portfolioData.filter((item) => item.category === category));
        }
    };

    return (
        <div>
            <HeroSection />
            <div className="portfolio-section">
                {/* Filter buttons */}
                <div className="portfolio-filters">
                    <button
                        className={selectedCategory === 'All' ? 'active' : ''}
                        onClick={() => handleFilterChange('All')}
                    >
                        All
                    </button>
                    <button
                        className={selectedCategory === 'WordPress' ? 'active' : ''}
                        onClick={() => handleFilterChange('WordPress')}
                    >
                        WordPress
                    </button>
                    <button
                        className={selectedCategory === 'WooComerce' ? 'active' : ''}
                        onClick={() => handleFilterChange('WooComerce')}
                    >
                        WooComerce
                    </button>
                    <button
                        className={selectedCategory === 'Shopify' ? 'active' : ''}
                        onClick={() => handleFilterChange('Shopify')}
                    >
                        Shopify

                    </button>
                    <button
                        className={selectedCategory === 'Elementor' ? 'active' : ''}
                        onClick={() => handleFilterChange('Elementor')}
                    >
                        Elementor
                    </button>
                    <button
                        className={selectedCategory === 'SaaS Products' ? 'active' : ''}
                        onClick={() => handleFilterChange('SaaS Products')}
                    >
                        SaaS Products
                    </button>
                    <button
                        className={selectedCategory === 'WIX' ? 'active' : ''}
                        onClick={() => handleFilterChange('WIX')}
                    >
                        WIX
                    </button>
                    <button
                        className={selectedCategory === 'Bubble.io' ? 'active' : ''}
                        onClick={() => handleFilterChange('Bubble.io')}
                    >
                        Bubble.io
                    </button>
                    <button
                        className={selectedCategory === 'Go High Level' ? 'active' : ''}
                        onClick={() => handleFilterChange('Go High Level')}
                    >
                        GHL
                    </button>
                    <button
                        className={selectedCategory === 'NFT & Crypto' ? 'active' : ''}
                        onClick={() => handleFilterChange('NFT & Crypto')}
                    >
                        NFT & Crypto
                    </button>
                    <button
                        className={selectedCategory === 'SquareSpace' ? 'active' : ''}
                        onClick={() => handleFilterChange('SquareSpace')}
                    >
                        SquareSpace
                    </button>
                    <button
                        className={selectedCategory === 'Landing Pages' ? 'active' : ''}
                        onClick={() => handleFilterChange('Landing Pages')}
                    >
                        Landing Pages
                    </button>
                    <button
                        className={selectedCategory === 'React & Angular' ? 'active' : ''}
                        onClick={() => handleFilterChange('React & Angular')}
                    >
                        React & Angular
                    </button>
                    <button
                        className={selectedCategory === 'Magento' ? 'active' : ''}
                        onClick={() => handleFilterChange('Magento')}
                    >
                        Magento
                    </button>
                    <button
                        className={selectedCategory === '.NET Core' ? 'active' : ''}
                        onClick={() => handleFilterChange('.NET Core')}
                    >
                        .NET Core
                    </button>
                </div>

                {/* Portfolio Items */}
                <div className="portfolio-items">

                    {filteredItems && filteredItems.map((item, i) => {
                        return (
                            <div className="card">

                                <div className="image_project">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="card__content">
                                    <div className="project_tech">{item.tech}</div>
                                    <div className="project_details">
                                        <p>{item.description}</p>

                                        <a href={item.link} target='_blank'>  <Button title={"Visit Website"} /></a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}


                </div>
            </div>
        </div>
    );
};

export default Portfolio;
