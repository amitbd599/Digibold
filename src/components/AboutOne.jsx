import React from "react";

const AboutOne = () => {
  return (
    <>
      {/* About area start */}
      <section className="about__area pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-xl-6 col-md-6">
              <div className="about__imgs" data-aos="fade-up">
                <div className="image-1">
                  <img src="assets/imgs/about/1.png" alt="Image" />
                  <a
                    className="play popup-link"
                    href="https://www.youtube.com/watch?v=FYpsf0ACkmI"
                  >
                    <i className="fa-solid fa-play" />
                  </a>
                </div>
                <div className="image-2">
                  <img src="assets/imgs/about/2.png" alt="Image" />
                </div>
                <div className="bell">
                  <span>
                    <i className="fa-regular fa-bell" />
                  </span>
                </div>
                <div className="projects">
                  <img src="assets/imgs/icon/medal.png" alt="Medal Icon" />
                  <p>
                    <span className="counter_fast">230+</span>Project Complete
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-xl-6 col-md-6">
              <div
                className="about__content"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <h2 className="sec-subtitle">
                  ABOUT US <span>About Us</span>
                </h2>
                <h3 className="sec-title">
                  Innovative solutions for a digital world
                </h3>
                <p>
                  Which is the same as saying through shrinking from toil and
                  pain. These cases are many perfectly simple and easy to
                  distinguish. In a free hour this when our power of choice is
                  untrammelled and when nothing prevents
                </p>
                <ul>
                  <li>How to improve your busines for Helping us </li>
                  <li>making this the first true generator on the Internet</li>
                  <li>Creative this the first true generator on the designe</li>
                </ul>
                <a className="db-btn-arrow" href="about.html">
                  Read More <i className="fa-solid fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          src="assets/imgs/shape/6.png"
          alt="Zigzag Shape"
          className="shape"
        />
      </section>
      {/* About area end */}
    </>
  );
};

export default AboutOne;
