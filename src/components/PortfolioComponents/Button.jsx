import React from 'react';
import "./style.css";

const Button = ({ title, isActive }) => {
    return (
        <button
            className={`btn ${isActive ? 'active' : ''}`}
        >
            {title}
        </button>
    );
};

export default Button;
