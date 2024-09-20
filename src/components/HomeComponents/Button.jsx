import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ title, link }) => {
    return (
        link ? (
            <Link to={link}>
                <button className='contact_btn'><span>{title}</span></button>
            </Link>
        ) : (
            <Link to={'mailto:zeeshan1dreamso@gmail.com'}>
                <button className='contact_btn'><span>{title}</span></button>
            </Link>

        )
    )
}

export default Button