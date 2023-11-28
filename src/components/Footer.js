import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import fb from '../images/fb.png';
import twiter from '../images/twiter.png';
import insta from '../images/insta.png';
import shadow8 from "../images/shadow8.png"
import shape8 from "../images/shape8.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <footer className='position-relative'>
            <div data-aos="fade-up-right" data-aos-duration="3000" className='shape8'>
                <img src={shadow8} />
                <img className='shape' src={shape8} />
            </div>
            <div className="container">
                <div className="row">
                    <div className='col-lg-4 col-md-12'>
                        <div data-aos="fade-down-right" data-aos-duration="1000" className='fot-logo'>
                            <Logo />
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="1000" className='col-lg-4 col-md-6'>
                        <div className='fot-content text-center'>
                            <h6 className='mb-10'>Find Us On Social Media:</h6>
                        </div>
                        <ul className='social-icons'>
                            <li>
                                <Link ><img src={fb} /></Link>
                            </li>
                            <li>
                                <Link ><img src={twiter} /></Link>
                            </li>
                            <li>
                                <Link ><img src={insta} /></Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                        <div data-aos="fade-down-left" data-aos-duration="1000" className='fot-content text-center'>
                            <h6 className='mb-10'>We’re Always Happy To Help</h6>
                            <Link>uifry@gmail.com</Link>
                        </div>
                    </div>
                    <div className='copyright text-center'>
                        <p>Copyright © 2023 Drizzel</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


