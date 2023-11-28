import React, {useEffect} from 'react';
import Header from './components/Header';
import AchievementNumbers from './components/AchievementNumbers';
import bannerImg from "./images/banner-img.png"
import shape1 from "./images/shape1.png"
import shadow1 from "./images/shadow2.png"
import shape2 from "./images/shape2.png"
import shadow3 from "./images/shadow1.png"
import shadow from "./images/shadow3.png"
import poly1 from "./images/1.png"
import poly2 from "./images/2.png"
import ServiceHeadline from './components/ServiceHeadline';
import OurClients from './components/OurClients';
import Portfolio from './components/Portfolio';
import YourComponent from './components/Slider';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonial from './components/Testimonial';
import Blog from './components/Blog';
import StartProject from './components/StartProject';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Header />
      <section className='hero-banner'>
        <div data-aos="fade-up-right" data-aos-duration="1000" className='shape1'>
          <img src={shadow1} />
          <img className='shape' src={shape1} />
        </div>
        <div data-aos="slide-up" data-aos-duration="3000" className='shape2'>
          <img className='shape' src={shadow} />
        </div>
        <div data-aos="fade-up-left" data-aos-duration="2000" className='shape3'>
          <img src={shape2} className='shape' />
          <img src={shadow3} />
        </div>
        <div data-aos="zoom-out-down" data-aos-duration="2000" className='poly1'>
          <img src={poly1} />
        </div>
        <div data-aos="zoom-out-down" data-aos-duration="2000" className='poly2'>
          <img src={poly2} />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div data-aos="zoom-in" data-aos-duration="1000" className='banner-content'>
                <span>Drizzel Creative Agency</span>
                <h1>digital agency with solid design</h1>
              </div>
              <ul className='achievement-list' data-aos="zoom-in" data-aos-duration="2000">
                <li>
                  <AchievementNumbers number="13+" description="years of experience" />
                </li>
                <li>
                  <AchievementNumbers number="74k+" description="Project Completed" />
                </li>
                <li>
                  <AchievementNumbers number="9.2k+" description="Trusted Companies" />
                </li>
              </ul>
              <div className='banner-img'>
                <img src={bannerImg} alt='this is banner image' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceHeadline />
      <OurClients />
      <Portfolio />
      <WhyChooseUs />
      <Testimonial />
      <Blog />
      <StartProject />
      <Footer />
    </>
  );
};

export default Home;