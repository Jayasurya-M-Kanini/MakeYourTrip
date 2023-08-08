import React from 'react';
import aboutus from "../images/about.jpg"
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Contact = () => {
  return (
    <div>
        <div style={{marginTop:"5rem"}}>
            <Navbar/>
        </div>
      {/* About Section */}
      <section className="general-section" id="about">
        <div className="section-title">
          <h2>about <span>us</span></h2>
        </div>
        <div className="section-center about-center">
          <article className="about-img">
            <img src={aboutus} className="about-photo" alt="about-img" />
          </article>
          <article className="about-info">
            <h3>explore the difference</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              excepturi quibusdam minima, quis accusantium delectus eligendi illo,
              maiores, nisi iusto ratione magni. Consequatur.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus excepturi corporis, enim labore iure ex, non deleniti maiores eum quae iste neque hic rerum.</p>
            <a href="#" className="btn">read more</a>
          </article>
        </div>
      </section>

      {/* Services Section */}
      <section className="general-section services" id="services">
        <div className="section-title">
          <h2>our <span>services</span></h2>
        </div>
        <div className="section-center services-center">
          <article className="service">
            <span className="service-icon">
              <i className="fas fa-plane-departure"></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">comfortable journey</h4>
              <p className="service-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, sequi sunt! Ipsum temporibus earum illo.
              </p>
            </div>
          </article>
          <article className="service">
            <span className="service-icon">
              <i className="fas fa-globe-americas"></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">travel guide</h4>
              <p className="service-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, sequi sunt! Ipsum temporibus earum illo.
              </p>
            </div>
          </article>
          <article className="service">
            <span className="service-icon">
              <i className="fas fa-solid fa-hotel"></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">luxurious hotels</h4>
              <p className="service-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, sequi sunt! Ipsum temporibus earum illo.
              </p>
            </div>
          </article>
        </div>
      </section>'
      <div style={{marginTop:"5rem"}}>
            <Footer/>
        </div>
    </div>
  );
}

export default Contact;
