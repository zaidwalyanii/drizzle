import React, {useEffect} from 'react'
import PortfolioSlider from './Slider'
import Button from './Button'
import shape4 from "../images/shape4.png"
import shape5 from "../images/shape5.png"
import shadow4 from "../images/shadow4.png"
import shadow5 from "../images/shadow5.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Portfolio() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section className='portfolio-sec py-5 position-relative'>
            <div data-aos="fade-up-right" data-aos-duration="3000" className='shape4'>
                <img src={shadow4} />
                <img className='shape' src={shape4} />
            </div>
            <div data-aos="fade-up-left" data-aos-duration="3000" className='shape5'>
                <img src={shadow5} />
                <img className='shape' src={shape5} />
            </div>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-10'>
                        <div data-aos="zoom-in-down" data-aos-duration="1000" className='portfolio-content mb-60'>
                            <h5 className='sub-hd mb-20'>portfolio</h5>
                            <h2 className='primary-hd'>our latest projects</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container container-fluid p-0'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <ul data-aos="zoom-in-up" data-aos-duration="1000" className='portfolio-list mb-60'>
                            <PortfolioSlider />
                            <PortfolioSlider />
                        </ul>
                        <div data-aos="zoom-in-down" data-aos-duration="1200" className='portfolio-btn'>
                            <Button content="View More" className="btn-b btn-a" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio