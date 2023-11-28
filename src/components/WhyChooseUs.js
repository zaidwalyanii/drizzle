import React, {useEffect} from 'react'
import why from "../images/why.png"
import ChoosePoints from './ChoosePoints'
import w1 from "../images/w1.png"
import w2 from "../images/w2.png"
import w3 from "../images/w3.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

function WhyChooseUs() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section className='why-choose-us-sec py-5'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-lg-6'>
                        <div data-aos="fade-up-right" data-aos-duration="1000" className='why-choose-us-img mb-60'>
                            <img src={why} />
                        </div>
                    </div>
                    <div data-aos="fade-up-left" data-aos-duration="1500" className='col-lg-6'>
                        <div className='why-choose-us-content mb-50'>
                            <h5 className='sub-hd mb-20'>why choose us</h5>
                            <h2 className='primary-hd mb-20'>creating beatiful design based on client needs</h2>
                            <p className='primary-para'>Es ist ein lang erwiesener Fakt, dass ein Leser vom Text wird, wenn er sich ein Layout ansieht.</p>
                        </div>
                        <ChoosePoints url={w1} title="Amazing Designs" description="Es ist ein lang erwiesener Fakt, dass ein Leser vom Text wird, wenn er sich ein Layout ansieht." />
                        <ChoosePoints url={w2} title="Dedicated Team" description="Es ist ein lang erwiesener Fakt, dass ein Leser vom Text wird, wenn er sich ein Layout ansieht." />
                        <ChoosePoints url={w3} title="24/7 Support" description="Es ist ein lang erwiesener Fakt, dass ein Leser vom Text wird, wenn er sich ein Layout ansieht." />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs