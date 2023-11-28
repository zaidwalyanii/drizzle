import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import b1 from "../images/b1.png"
import b2 from "../images/b2.png"
import b3 from "../images/b3.png"
import detail from "../images/detail.png"

const blogData = [
    {
        id: 1,
        imageUrl: b1,
        nameDate: "Demi WIlkinson • 16 Jan 2022",
        topic: "PM mental models",
        description: "Mental models are simple expressions of complex processes or relationships.",
        category: "Product",
        category2: "Research",
        category3: "Frameworks",
    },
    {
        id: 2,
        imageUrl: b2,
        nameDate: "Candice Wu • 15 Jan 2022",
        topic: "What is Wireframing?",
        description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        category: "Design",
        category2: "Research",
    },
    {
        id: 3,
        imageUrl: b3,
        nameDate: "Natali Craig • 14 Jan 2022",
        topic: "UX review presentations",
        description: "How do you create compelling presentations that wow your colleagues and impress your...",
        category: "Design",
        category2: "Research",
    },
    {
        id: 1,
        imageUrl: b1,
        nameDate: "Demi WIlkinson • 16 Jan 2022",
        topic: "PM mental models",
        description: "Mental models are simple expressions of complex processes or relationships.",
        category: "Product",
        category2: "Research",
        category3: "Frameworks",
    },
]

const BlogSlides = () => {
    var responsive3 = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
        ]
    };

    return (
        <div>
            <Slider {...responsive3}>
                {blogData.map((item) => (
                    <li>
                        <div className='blog-box' key={item.id}>
                            <div className='blog-box-img mb-20'>
                                <img src={item.imageUrl} />
                            </div>
                            <div className='blog-box-content'>
                                <h6 className='mb-10'>{item.nameDate}</h6>
                                <h4 className='mb-10'>{item.topic} <img src={detail} /></h4>
                                <p className='mb-20'>{item.description}</p>
                                <ul className='categories'>
                                    <li>
                                        <span className='category-btn purple-btn'>{item.category}</span>
                                    </li>
                                    <li>
                                        <span className='category-btn pink-btn'>{item.category2}</span>
                                    </li>
                                    <li>
                                        <span className='category-btn orange-btn'>{item.category3}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                ))}
            </Slider>
        </div >
    );
};

export default BlogSlides;
