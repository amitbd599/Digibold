import React from "react";
import { Link } from "react-router-dom";

const ServiceFive = () => {
  return (
    <>
      {/* service area start */}
      <section className="service__area-5">
        <div className="container">
          <div className="digibold-section-wrapper-5 text-center">
            <h2 className="section-subtitle-5 heading-animation">
              best service
            </h2>
            <h3 className="section-title-5 heading-animation">
              Crafting Digital Experiences <br /> That Inspire
            </h3>
          </div>
          <div className="service__items-5">
            <div className="service__item-5">
              <div className="service__thumb-5">
                <img src="assets/imgs/home-5/s1.png" alt="service-icon" />
              </div>
              <div className="service__content-5">
                <a href="#">
                  <h3 className="service__item-title">Pixel Perfect Design</h3>
                </a>
                <p>
                  Health and medical is a encompasses a wide <br />
                  range of topics related to health
                </p>
                <div className="hero__btn-wrapper-5 service-btn">
                  <a className="db-btn-arrow" href="about.html">
                    Read More <i className="fa-solid fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="service__item-5">
              <div className="service__thumb-5">
                <img src="assets/imgs/home-5/s2.png" alt="service-icon" />
              </div>
              <div className="service__content-5">
                <a href="#">
                  <h3 className="service__item-title">Pixel Perfect Design</h3>
                </a>
                <p>
                  Health and medical is a encompasses a wide <br />
                  range of topics related to health
                </p>
                <div className="hero__btn-wrapper-5 service-btn">
                  <a className="db-btn-arrow" href="about.html">
                    Read More <i className="fa-solid fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="service__item-5">
              <div className="service__thumb-5">
                <img src="assets/imgs/home-5/s3.png" alt="service-icon" />
              </div>
              <div className="service__content-5">
                <a href="#">
                  <h3 className="service__item-title">Pixel Perfect Design</h3>
                </a>
                <p>
                  Health and medical is a encompasses a wide <br />
                  range of topics related to health
                </p>
                <div className="hero__btn-wrapper-5 service-btn">
                  <a className="db-btn-arrow" href="about.html">
                    Read More <i className="fa-solid fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* service area end */}
    </>
  );
};

export default ServiceFive;
