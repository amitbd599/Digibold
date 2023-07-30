import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
const TeamThree = () => {
  return (
    <>
      {/* Team area start */}
      <section className="team__area-3">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrap" data-aos="fade-up">
                <h3 className="sec-title text-capitalize">
                  Meet Our <br /> Professional Team
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="team__list-3 plr-100">
          <div className="swiper team__slider-3">
            <div className="swiper-wrapper">
              <Swiper
                slidesPerView={4}
                spaceBetween={20}
                modules={[Autoplay]}
                autoplay={{
                  delay: 500,
                  disableOnInteraction: true,
                }}
                loop
              >
                <SwiperSlide>
                  <div
                    className="team__member-3"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <div className="team__image-3">
                      <a href="about.html">
                        <img
                          src="assets/imgs/team/3/1.png"
                          alt="Member Image"
                        />
                      </a>
                    </div>
                    <div className="team__content-3">
                      <ul className="social-media">
                        <li>
                          <a href="">
                            <i className="fa-brands fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa-brands fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa-brands fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                      <a href="about.html">
                        <h5 className="team__title-3">Annette Black</h5>
                      </a>
                      <p>Finance Assistant</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="team__member-3"
                    data-aos="fade-up"
                    data-aos-delay={400}
                  >
                    <div className="team__image-3">
                      <a href="about.html">
                        <img
                          src="assets/imgs/team/3/2.png"
                          alt="Member Image"
                        />
                      </a>
                    </div>
                    <div className="team__content-3">
                      <ul className="social-media">
                        <li>
                          <a href="">
                            <i className="fa-brands fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa-brands fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa-brands fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                      <a href="about.html">
                        <h5 className="team__title-3">Christaine Eve</h5>
                      </a>
                      <p> Founder &amp; CEO </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="team__member-3"
                    data-aos="fade-up"
                    data-aos-delay={600}
                  >
                    <div className="team__image-3">
                      <a href="about.html">
                        <img
                          src="assets/imgs/team/3/3.png"
                          alt="Member Image"
                        />
                      </a>
                    </div>
                    <div className="team__content-3">
                      <ul className="social-media">
                        <li>
                          <a href="">
                            <i className="fa-brands fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa-brands fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa-brands fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                      <a href="about.html">
                        <h5 className="team__title-3">Annette Black</h5>
                      </a>
                      <p>Finance Assistant</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="team__member-3"
                    data-aos="fade-up"
                    data-aos-delay={800}
                  >
                    <div className="team__image-3">
                      <a href="about.html">
                        <img
                          src="assets/imgs/team/3/4.png"
                          alt="Member Image"
                        />
                      </a>
                    </div>
                    <div className="team__content-3">
                      <ul className="social-media">
                        <li>
                          <a href="">
                            <i className="fa-brands fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa-brands fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa-brands fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                      <a href="about.html">
                        <h5 className="team__title-3">Jhon Adam</h5>
                      </a>
                      <p>Lead Developer</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="team__member-3"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <div className="team__image-3">
                      <a href="about.html">
                        <img
                          src="assets/imgs/team/3/1.png"
                          alt="Member Image"
                        />
                      </a>
                    </div>
                    <div className="team__content-3">
                      <ul className="social-media">
                        <li>
                          <a href="">
                            <i className="fa-brands fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa-brands fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa-brands fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                      <a href="about.html">
                        <h5 className="team__title-3">Annette Black</h5>
                      </a>
                      <p>Finance Assistant</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="team__member-3"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <div className="team__image-3">
                      <a href="about.html">
                        <img
                          src="assets/imgs/team/3/1.png"
                          alt="Member Image"
                        />
                      </a>
                    </div>
                    <div className="team__content-3">
                      <ul className="social-media">
                        <li>
                          <a href="">
                            <i className="fa-brands fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa-brands fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa-brands fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                      <a href="about.html">
                        <h5 className="team__title-3">Annette Black</h5>
                      </a>
                      <p>Finance Assistant</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="team__member-3"
                    data-aos="fade-up"
                    data-aos-delay={400}
                  >
                    <div className="team__image-3">
                      <a href="about.html">
                        <img
                          src="assets/imgs/team/3/2.png"
                          alt="Member Image"
                        />
                      </a>
                    </div>
                    <div className="team__content-3">
                      <ul className="social-media">
                        <li>
                          <a href="">
                            <i className="fa-brands fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa-brands fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa-brands fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                      <a href="about.html">
                        <h5 className="team__title-3">Christaine Eve</h5>
                      </a>
                      <p> Founder &amp; CEO </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/* Team area end */}
    </>
  );
};

export default TeamThree;
