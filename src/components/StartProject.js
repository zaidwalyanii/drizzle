import React, {useEffect} from 'react'
import Button from './Button'
import AOS from 'aos';
import 'aos/dist/aos.css';

function StartProject() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section className='start-sec'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-8'>
                        <div data-aos="zoom-in-down" data-aos-duration="1000" className='start-content text-center mb-60'>
                            <h2 className='primary-hd'>Ready to start a project with us?</h2>
                        </div>
                        <form className='start-project-form'>
                            <input data-aos="zoom-in-right" data-aos-duration="1000" placeholder="Enter your email address" type="email" />
                            <button data-aos="zoom-in-left" data-aos-duration="2000" className='btn-a' type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StartProject