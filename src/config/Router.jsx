import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from '../components/HomeComponents/Navbar';
import Footer from '../components/HomeComponents/Footer';
import Portfolio from '../pages/Portfolio';
import Case_studies from '../components/PortfolioComponents/Case_studies';
import Design_System from '../components/PortfolioComponents/Design_System';
import Visual_Design from '../components/PortfolioComponents/Visual_Design';
import Motion_Design from '../components/PortfolioComponents/Motion_Design';
import About from '../pages/About';
import UpBeing from '../components/InnerPage/UpBeing';
import PegDoc from '../components/InnerPage/PegDoc';
import EzyPeg from '../components/InnerPage/EzyPeg';
import Thrive from '../components/InnerPage/Thrive';
import Momentum from '../components/InnerPage/Momentum';
import Brandzino from '../components/InnerPage/Brandzino';
import Shopsolarkits from '../components/InnerPage/Shopsolarkits';
import Winnipeg from '../components/InnerPage/Winnipeg';
import ProductDesign from '../components/InnerPage/ProductDesign';
import VisualDesgin from '../components/InnerPage/VisualDesgin';
import Project from '../components/PortfolioComponents/Project';
import ScrollToTop from './ScrollToTop';

const AppRouter = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <BrowserRouter>
            <Navbar />
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/digital-product' element={<Case_studies />} />
                <Route path='/web-dev' element={<Project />} />
                <Route path='/digital-portfolio' element={<Motion_Design />} />
                <Route path='/about-me' element={<About />} />
                <Route path='/digital-product/upbeing' element={<UpBeing />} />
                <Route path='/digital-product/pegdoc' element={<PegDoc />} />
                <Route path='/digital-product/ezypeg' element={<EzyPeg />} />
                <Route path='/digital-product/productdesign' element={<ProductDesign />} />



            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default AppRouter;