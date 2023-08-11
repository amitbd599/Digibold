import React from "react";

import { Link } from "react-router-dom";
const HeroFive = () => {
  return (
    <>
      {/* hero area start */}
      <section className="hero__area-5">
        <div className="container">
          <div className="hero__content-5">
            <h2 className="hero__title-5 heading-animation">
              Unleash the <br /> potential of your <br />
              space
            </h2>
            <p className="hero__dis-5 p-animation">
              Outsourcing can provide corporate businesses with several
              advantages, including cost <br /> savings, access to specialized
              expertise, increased efficiency,{" "}
            </p>
            <div className="hero__btn-wrapper-5">
              <a className="db-btn-arrow" href="about.html">
                Read More <i className="fa-solid fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="hero__shape-wrapper">
          <img src="assets/imgs/home-5/hero-shape.png" alt="shape-icon" />
        </div>
      </section>
      {/* hero area end */}
    </>
  );
};

export default HeroFive;
