import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { FiSun } from "react-icons/fi";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { IoMoonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const Navbar = () => {

    const[isMenuActive, setIsMenuActive] = useState(false);

    const[theme, setTheme] = useState('dark');

    useEffect(() => {

        document.documentElement.setAttribute('data-theme', theme);

    }, [theme])

    const toggleTheme = () =>{
        setTheme(prev =>(prev === 'dark' ? 'light' : 'dark'));
    }

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    }

  return (
    <header>
       <nav className='mobile-header flex between wrapper navbar'>
        <a href='#' className='logo'>
            <span>J</span> Junaid.
        </a>

        {/* DESKTOP MENU */}
        <ul className='flex gap-2 desktop-menu'>
            <li>
                <Link to="/" className="link">Home</Link>
            </li>
            <li>
                <a href='#services' className='link'>Services</a>
            </li>
            <li>
                <a href='#about' className='link'>About Me</a>
            </li>
            <li>
                <Link to="/projects" className="link">Projects</Link>
            </li>
            <li>
                <a href='#testimonial' className='link'>Testimonials</a>
            </li>
            <li>
                <a href='#contact-me' className='link'>Contact Me</a>
            </li>
        </ul>
            <div className='flex gap-2 nav-action'>
                <a href='#' className='icon-container border-inverse' onClick={toggleTheme}>
                    {theme === 'dark' ? <FiSun /> : <IoMoonOutline />}
                </a>
                <a href='tel:+923152365237' className='btn'>Let's Talk</a>
                <a href='#' className='hamburger' onClick={toggleMenu}>
                    {isMenuActive ? <FaXmark/> : <FaBarsStaggered/>}
                </a>
            </div>
            {/* MOBILE MENU */}
            <ul className={`mobile-menu ${isMenuActive ? 'mobile-menu-active' : null}`}>
            <li>
                <Link to="/" className="link">Home</Link>
            </li>
            <li>
                <a href='#services' className='link'>Services</a>
            </li>
            <li>
                <a href='#about' className='link'>About Me</a>
            </li>
            <li>
                <Link to="/projects" className="link">Projects</Link>
            </li>
            <li>
                <a href='#testimonial' className='link'>Testimonials</a>
            </li>
            <li>
                <a href='#contact-me' className='link'>Contact Me</a>
            </li>
            <li>
                <a href='tel:+923152365237' className='btn'>Let's Talk</a>
            </li>
        </ul>
       </nav>
    </header>
  )
}

export default Navbar
