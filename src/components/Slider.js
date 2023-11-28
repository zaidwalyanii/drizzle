import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import p1 from "../images/p1.jpg"
import p2 from "../images/p2.jpg"
import p3 from "../images/p3.jpg"
import p4 from "../images/p4.jpg"

const portfolioData = [
    {
        id: 1,
        imageUrl: p1,
    },
    {
        id: 2,
        imageUrl: p2,
    },
    {
        id: 3,
        imageUrl: p3,
    },
    {
        id: 4,
        imageUrl: p4,
    },
    {
        id: 5,
        imageUrl: p1,
    },
]

const PortfolioSlider = () => {
    var responsive = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: true,
        centerPadding: "200px",
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "40px",
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
        ]
    };

    return (
        <div>
            <Slider {...responsive}>
                {portfolioData.map((item) => (
                    <li>
                        {console.log(item)}
                        <div className='portfolio-img' key={item.id}>
                            <img src={item.imageUrl} />
                        </div>
                    </li>
                ))}
            </Slider>
        </div >
    );
};

export default PortfolioSlider;
