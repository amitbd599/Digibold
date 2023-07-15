import React from "react";

const HeroThree = () => {
  return (
    <>
      {/* Hero area start */}
      <section className="hero__area-3">
        <div className="hero__inner-3">
          <div className="hero__gallery">
            <img
              className="image-1 cxufadeUp"
              src="assets/imgs/hero/3/1.png"
              alt="Image"
            />
            <img
              className="image-2 cxufadeUp2"
              src="assets/imgs/hero/3/2.png"
              alt="Image"
            />
            <img
              className="image-3 cxufadeUp3"
              src="assets/imgs/hero/3/3.png"
              alt="Image"
            />
          </div>
          <div className="hero__title-3-wrap">
            <h1 className="hero__title-3 cxufadeUp4">
              {" "}
              <span>Think</span> outside <span>the box</span>{" "}
            </h1>
            <img className="line" src="assets/imgs/shape/line.png" alt="Line" />
          </div>
          <div className="hero__contact-3 cxufadeUp4">
            <a href="about.html"> Get in Touch </a>
          </div>
        </div>
        <img
          className="shape cxuSpin-slow"
          src="assets/imgs/shape/10.png"
          alt="Shape"
        />
        {/* Counter */}
        <div className="counter__area-3-hero">
          <div className="counter__inner">
            <div className="counter__item" data-aos="fade-up">
              <div className="counter__number counter_slow">200+</div>
              <h3 className="counter__title">Happy customer</h3>
            </div>
            <div
              className="counter__item"
              data-aos="fade-up"
              data-aos-delay={600}
            >
              <div className="counter__number counter_slow">300+ </div>
              <h3 className="counter__title">total branches</h3>
            </div>
            <div
              className="counter__item"
              data-aos="fade-up"
              data-aos-delay={900}
            >
              <div className="counter__number counter_slow">550+</div>
              <h3 className="counter__title">Project complete</h3>
            </div>
          </div>
        </div>
      </section>
      {/* Hero area end */}
    </>
  );
};

export default HeroThree;
