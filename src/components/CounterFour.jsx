import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const CounterFour = () => {
  return (
    <>
      {/* Counter area start */}
      <section className="counter__area-3 pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xx-7 col-xl-7 col-lg-7">
              <div className="counter__list-3">
                <div className="counter__item-3" data-aos="fade-up">
                  <div className="counter__number-3 counter_fast">550+</div>
                  <h2 className="counter__title-3">Project complete</h2>
                </div>
                <div
                  className="counter__item-3"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="counter__number-3 counter_fast">200+</div>
                  <h2 className="counter__title-3">Happy customer</h2>
                </div>
                <div
                  className="counter__item-3"
                  data-aos="fade-up"
                  data-aos-delay={600}
                >
                  <div className="counter__number-3 counter_fast">300+</div>
                  <h2 className="counter__title-3">Total Branches</h2>
                </div>
                <div
                  className="counter__item-3"
                  data-aos="fade-up"
                  data-aos-delay={900}
                >
                  <div className="counter__number-3 counter_fast">100+</div>
                  <h2 className="counter__title-3">Award Winner</h2>
                </div>
              </div>
            </div>
            <div className="col-xx-5 col-xl-5 col-lg-5">
              <div
                className="counter__content-3"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                <h3 className="sec-title text-capitalize text-white">
                  Designing the future one pixel at a time
                </h3>
                <p className="text-white">
                  There are many variations of passages of Lorem Ipsum available
                  ours this is but the majority have suffered alteration in some
                  form design by injected humour companys randomised words
                </p>
                <ul>
                  <li>How to improve your busines for Helping us </li>
                  <li>making this the first true generator on the Internet</li>
                  <li>Creative this the first true generator on the designe</li>
                </ul>
                <a className="db-btn-border" href="about.html">
                  read more <i className="fa-solid fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Counter area end */}
    </>
  );
};

export default CounterFour;
