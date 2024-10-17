import React, { useState } from 'react'
import "./style.css"
import LOGO from "../../assets/image/logo.svg"
import { IoMdClose } from "react-icons/io";
import Button from './Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='border-b-2'>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-[2rem] md:p-4">
                <Link to="/" className="flex items-center">
                    <img
                        src={LOGO}
                        className="h-8"
                        alt="Flowbite Logo"
                    />

                </Link>

                {isOpen ? <button onClick={() => setIsOpen(false)}><IoMdClose /></button> : <button
                    onClick={() => setIsOpen(true)}
                    className="inline-flex items-center p-2 text-gray-500 rounded-lg md:hidden"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>}
                <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
                    <ul className="flex flex-col p-4 md:flex-row md:space-x-8">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:border-gray-700">
                            <div className='navbar'>
                                <li>
                                    <Link to={'/'} className="block py-2 px-3 text-black rounded   a_link" aria-current="page">Home</Link>
                                </li>
                                <li>
                                    <Link to={'/digital-product'} className="block py-2 px-3 text-black rounded portfolio-link  a_link" aria-current="page" >Portfolio</Link>
                                </li>
                                <li>
                                    <Link to={'/about-me'} className="block py-2 px-3 text-black a_link" aria-current="page ">About me</Link>
                                </li>
                            </div>
                           
                                <Button title={"Contact with me"} />
                      
                        </ul>

                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Navbar