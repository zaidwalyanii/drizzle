import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import t1 from "../images/t1.png"
import t2 from "../images/t2.png"
import star from "../images/star.png"

const TestimonialData = [
    {
        id: 1,
        imageUrl: t1,
        review: star,
        description: "“Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein Layout ansieht. Der Punkt, Lorem Ipsum zu nutzen.”",
        name: "Jenny Wilson",
        company: "Grower.io",
    },
    {
        id: 2,
        imageUrl: t2,
        review: star,
        description: "“Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein Layout ansieht. Der Punkt, Lorem Ipsum zu nutzen.”",
        name: "JDevon Lane",
        company: "DLDesign.co",
    },
    {
        id: 1,
        imageUrl: t1,
        review: star,
        description: "“Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein Layout ansieht. Der Punkt, Lorem Ipsum zu nutzen.”",
        name: "Jenny Wilson",
        company: "Grower.io",
    },

]

const TestimonialSlides = () => {
    var responsive = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    return (
        <div>
            <Slider {...responsive}>
                {TestimonialData.map((item) => (
                    <li>
                        <div className='testimonial-box' key={item.id}>
                            <div className='testimonial-box-img'>
                                <img src={item.imageUrl} />
                            </div>
                            <div className='testimonial-box-content'>
                                <img className='mb-10' src={item.review} />
                                <p className='primary-para mb-10'>{item.description}</p>
                                <span>{item.name}</span>
                                <span>{item.company}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </Slider>
        </div >
    );
};

export default TestimonialSlides;
