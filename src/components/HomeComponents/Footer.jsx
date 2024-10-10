import React from 'react'
import LOGO from "../../assets/image/footer_logo.svg"
import linkedin_footer from "../../assets/image/linkedin_footer.svg"
import Button from './Button'
import "./style.css";
const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className="inner_footer">
                    <img src={LOGO} alt="" />
                    <div className="footer_content">
                        <h3>We welcome your ideas!</h3>
                        <Button title={"Lets Talk"} />
                    </div>
                </div>

            </div>
            <div className="footer_last">
                <p>© Made by Syed Z All rights reserved.</p>
                <a href="https://www.linkedin.com/in/zeeshan-shah-pmp%C2%AE%EF%B8%8F-59406742/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target='_blank'> <img src={linkedin_footer} alt="" /></a>
               
            </div>
        </>
    )
}

export default Footer