import React, {useEffect} from 'react'
import c1 from "../images/c1.png"
import c2 from "../images/c2.png"
import c3 from "../images/c3.png"
import c4 from "../images/c4.png"
import c5 from "../images/c5.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const clientlogo = [
    {
        id: 1,
        imageUrl: c1,
    },
    {
        id: 2,
        imageUrl: c2,
    },
    {
        id: 3,
        imageUrl: c3,
    },
    {
        id: 4,
        imageUrl: c4,
    },
    {
        id: 5,
        imageUrl: c5,
    },
];

function OurClients() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="flip-up" data-aos-duration="1000" className='our-clients'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <ul className='clients-logo'>
                            {clientlogo.map((item) => (
                                <li>
                                    <div key={item.id}>
                                        <img src={item.imageUrl} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurClients