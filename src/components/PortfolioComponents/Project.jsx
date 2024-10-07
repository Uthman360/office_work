import React, { useState } from 'react';
import './project.css'; // Link to the CSS file
import HeroSection from './HeroSection';
import ReadMore from './readMore';
import Button from './Button';

// Sample portfolio data
// Sample portfolio data
const portfolioData = [
    // WordPress (4 items)

    {
        id: 1,
        title: 'Ceremony Coffee',
        image: 'https://ceremonycoffee.com/cdn/shop/files/ceremony-order-app-hero-1.jpg?v=1715672103', // Example logo or screenshot URL
        tech: 'WordPress',
        description: 'A beautifully designed coffee shop website built with WordPress.',
        category: 'WordPress',
        link: 'https://ceremonycoffee.com/'
    },
    {
        id: 2,
        title: 'Academy Self Defense',
        image: 'https://academyselfdefense.com/wp-content/uploads/2020/10/slide5.jpg', // Example logo or screenshot URL
        tech: 'WordPress',
        description: 'A self-defense academy website built using WordPress.',
        category: 'WordPress',
        link: 'https://academyselfdefense.com/'
    },
    {
        id: 3,
        title: 'American Scraps',
        image: 'https://americanscraps.com/images/entries-assets/20200411/home-hero.jpg', // Example logo or screenshot URL
        tech: 'WordPress',
        description: 'An e-commerce platform for scrap metal services built with WordPress.',
        category: 'WordPress',
        link: 'https://americanscraps.com/'
    },
    {
        id: 4,
        title: 'Ruya Restaurant',
        image: 'https://cdn.prod.website-files.com/64e71fb45444ae4a3ff415f9/64fc1997c0f28079cbe38d35_tm38Xh%20(2)%404x.png', // Example logo or screenshot URL
        tech: 'WordPress',
        description: 'A high-end restaurant website designed with WordPress.',
        category: 'WordPress',
        link: 'https://ruya.ae/'
    },

    // WooComerce (3 items)
    {
        id: 5,
        title: 'Sockbox',
        image: 'https://eadn-wc04-557488.nxedge.io/wp-content/uploads/2020/05/splash-ca.jpg', // Example logo or screenshot URL
        tech: 'WooCommerce',
        description: 'A custom WooCommerce store specializing in subscription-based sock sales.',
        category: 'WooComerce',
        link: 'https://sockbox.com/'
    },
    {
        id: 6,
        title: 'Magna-Tiles',
        image: 'https://www.magnatiles.com/wp-content/uploads/2024/09/MAG-build-on-hero-image-1024x1024.png', // Example logo or screenshot URL
        tech: 'WooCommerce',
        description: 'A WooCommerce-powered store for selling educational toys and magnetic tiles.',
        category: 'WooComerce',
        link: 'https://www.magnatiles.com/'
    },
    {
        id: 7,
        title: 'PHLEARN',
        image: 'https://phlearn.com/wp-content/uploads/2023/04/Learning-Path-Graphic-02.jpg?w=882&quality=99&strip=all', // Example logo or screenshot URL
        tech: 'WooCommerce',
        description: 'An online store offering photography and Photoshop tutorials, built on WooCommerce.',
        category: 'WooComerce',
        link: 'https://phlearn.com/'
    },
    // Shopify (2 items)
    {
        id: 8,
        title: 'Hiut Denim Co.',
        image: 'https://hiutdenim.co.uk/cdn/shop/files/000025760001.jpg?v=1725877691&width=1540', // Example logo or screenshot URL
        tech: 'Shopify',
        description: 'A premium denim brand built on Shopify with a clean, minimalistic design.',
        category: 'Shopify',
        link: 'https://hiutdenim.co.uk/'
    },
    {
        id: 9,
        title: 'Tentree',
        image: 'https://www.tentree.ca/cdn/shop/files/FW24_RAIN_OR_SHINE_Homepage_Desktop_01_FA.png?v=1727795208&width=1511', // Example logo or screenshot URL
        tech: 'Shopify',
        description: 'An eco-conscious clothing brand powered by Shopify, focusing on sustainability.',
        category: 'Shopify',
        link: 'https://www.tentree.ca/'
    },

    // Elementor (3 items)
    // {
    //     id: 10,
    //     title: 'Creative Portfolio',
    //     image: 'https://example.com/creative_portfolio_image.jpg',
    //     tech: 'Elementor',
    //     description: 'A personal portfolio website built using Elementor, showcasing creative projects.',
    //     category: 'Elementor'
    // },
    // {
    //     id: 11,
    //     title: 'Freelancer Website',
    //     image: 'https://example.com/freelancer_website_image.jpg',
    //     tech: 'Elementor',
    //     description: 'A personal branding website for freelancers, designed with Elementor for easy customization.',
    //     category: 'Elementor'
    // },
    // {
    //     id: 12,
    //     title: 'Business Landing Page',
    //     image: 'https://example.com/business_landing_page_image.jpg',
    //     tech: 'Elementor',
    //     description: 'A fast and SEO-friendly landing page for a business, built using Elementor and optimized for conversions.',
    //     category: 'Elementor'
    // }
];


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
                </div>

                {/* Portfolio Items */}
                <div className="portfolio-items">

                    {filteredItems.map((item, i) => {
                        return (
                            <div className="card">

                                <div className="image_project">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="card__content">
                                    <div className="project_tech">{item.tech}</div>
                                    <div className="project_details">
                                        <p>{item.description}</p>

                                        <a href={item.link} target='_blank'>  <Button title={"Live Now"} /></a>
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
