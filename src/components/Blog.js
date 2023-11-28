import React, {useEffect} from 'react'
import BlogSlides from './BlogSlides'
import shadow7 from "../images/shadow7.png"
import shape7 from "../images/shape7.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Blog() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section className='blog-sec py-5 position-relative'>
            <div data-aos="fade-up-right" data-aos-duration="3000" className='shape7'>
                <img src={shadow7} />
                <img className='shape' src={shape7} />
            </div>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-lg-6'>
                        <div data-aos="flip-right" data-aos-duration="1000" className='blog-content mb-50'>
                            <h5 className='sub-hd mb-20'>Testimonials</h5>
                            <h2 className='primary-hd'>our beloved clients</h2>
                        </div>
                    </div>
                    <div className='col-lg-6'>

                    </div>
                    <div className='col-lg-12'>
                        <ul data-aos="flip-down" data-aos-duration="1000" className='blog-list'>
                            <BlogSlides />
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog