import React, {useEffect} from 'react'
import TestimonialSlides from './TestimonialSlides'
import shadow6 from "../images/shadow6.png"
import shape6 from "../images/shape6.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Testimonial() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section className='testimonial-sec py-5 position-relative'>
            <div data-aos="fade-up-left" data-aos-duration="3000" className='shape6'>
                <img src={shadow6} />
                <img className='shape' src={shape6} />
            </div>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-lg-12'>
                        <div data-aos="zoom-in-down" data-aos-duration="1000" className='testimonial-content text-center mb-50'>
                            <h5 className='sub-hd mb-20'>Testimonials</h5>
                            <h2 className='primary-hd'>our beloved clients</h2>
                        </div>
                        <ul data-aos="zoom-in-up" data-aos-duration="1000" className='testimonial-list'>
                            <TestimonialSlides />
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial