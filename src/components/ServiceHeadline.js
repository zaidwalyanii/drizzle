import React, {useEffect} from 'react'
import poly from "../images/poly.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

function ServiceHeadline() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="flip-down" data-aos-duration="1000" className='services-headline'>
            <div className='container-fluid container p-0'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='healines'>
                            <marquee behavior="scroll" direction="left">
                                <h3>web design<img src={poly} />app design<img src={poly} />logo design<img src={poly} />ui/ux design<img src={poly} /></h3>
                            </marquee>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceHeadline