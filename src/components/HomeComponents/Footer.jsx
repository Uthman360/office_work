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
                        <h3>Have something in mind?</h3>
                        <Button title={"lets Talk"} />
                    </div>
                </div>

            </div>
            <div className="footer_last">
                <p>© Made by Ceevisual studio. All rights reserved.</p>
                <img src={linkedin_footer} alt="" />
            </div>
        </>
    )
}

export default Footer