import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <header>
            <div className="container">
                <div className={`menu-Bar ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="row align-items-center">
                    <div className='col-lg-3 col-md-3 col-4'>
                        <div data-aos="zoom-in" data-aos-duration="1000" className='header-logo'>
                            <Logo />
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-1 col-1'>
                        <nav className={`menuWrap ${isMenuOpen ? 'open' : ''}`}>
                            <ul data-aos="zoom-in-down" data-aos-duration="1000" className='menu'>
                                <li>
                                    <Link >Work</Link>
                                </li>
                                <li>
                                    <Link >Blog</Link>
                                </li>
                                <li>
                                    <Link >About</Link>
                                </li>
                                <li>
                                    <Link >Careers</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='col-lg-3 col-md-8 col-7'>
                        <div data-aos="zoom-in" data-aos-duration="1000" className='signIn-and-btn'>
                            <div className='signIn'>
                                <Link className='white' to="/">Sign In</Link>
                            </div>
                            <div className='header-btn'>
                                <Button content="Get Started" className="btn btn-a" />
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </header >
    );
};

export default Header;


