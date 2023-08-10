import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
const PortfolioOne = () => {
  const swiperParams = {
    spaceBetween: 20,
    slidesPerView: 1,
    modules: [Autoplay],
    loop: true,
    autoplay: [
      {
        delay: 500,
        disableOnInteraction: true,
      },
    ],
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
    },
  };
  return (
    <>
      {/* Portfolio area start */}
      <section className="portfolio__area-4 pt-100 line-cols-3">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrap">
                <h2
                  className="sec-subtitle"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  Portfolio
                </h2>
                <h3 className="sec-title text-white heading-animation">
                  Transforming ideas into <br /> digital reality
                </h3>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="portfolio__list-4">
                <div className="swiper portfolio__slider-4">
                  <Swiper {...swiperParams}>
                    <SwiperSlide>
                      <div className="swiper-slide" data-speed="0.9">
                        <div
                          className="portfolio__item-4"
                          data-aos="fade-up"
                          data-aos-delay={200}
                        >
                          <a href="">
                            <img
                              src="assets/imgs/portfolio/1.jpg"
                              alt="Thumbnail"
                            />
                          </a>
                          <div className="portfolio__content-4">
                            <p>Lorem Ipsum is simply</p>
                            <a href="">
                              <h2 className="portfolio__title-4">
                                Content Creation Services
                              </h2>
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide" data-speed="0.92">
                        <div
                          className="portfolio__item-4"
                          data-aos="fade-up"
                          data-aos-delay={300}
                        >
                          <a href="">
                            <img
                              src="assets/imgs/portfolio/2.jpg"
                              alt="Thumbnail"
                            />
                          </a>
                          <div className="portfolio__content-4">
                            <p>Lorem Ipsum is simply</p>
                            <a href="">
                              <h2 className="portfolio__title-4">
                                Content Creation Services
                              </h2>
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide" data-speed="0.9">
                        <div
                          className="portfolio__item-4"
                          data-aos="fade-up"
                          data-aos-delay={400}
                        >
                          <a href="">
                            <img
                              src="assets/imgs/portfolio/3.jpg"
                              alt="Thumbnail"
                            />
                          </a>
                          <div className="portfolio__content-4">
                            <p>Lorem Ipsum is simply</p>
                            <a href="">
                              <h2 className="portfolio__title-4">
                                Content Creation Services
                              </h2>
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide" data-speed="0.9">
                        <div
                          className="portfolio__item-4"
                          data-aos="fade-up"
                          data-aos-delay={500}
                        >
                          <a href="">
                            <img
                              src="assets/imgs/portfolio/4.jpg"
                              alt="Thumbnail"
                            />
                          </a>
                          <div className="portfolio__content-4">
                            <p>Lorem Ipsum is simply</p>
                            <a href="">
                              <h2 className="portfolio__title-4">
                                Content Creation Services
                              </h2>
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide" data-speed="0.9">
                        <div
                          className="portfolio__item-4"
                          data-aos="fade-up"
                          data-aos-delay={600}
                        >
                          <a href="">
                            <img
                              src="assets/imgs/portfolio/5.jpg"
                              alt="Thumbnail"
                            />
                          </a>
                          <div className="portfolio__content-4">
                            <p>Lorem Ipsum is simply</p>
                            <a href="">
                              <h2 className="portfolio__title-4">
                                Content Creation Services
                              </h2>
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide" data-speed="0.9">
                        <div
                          className="portfolio__item-4"
                          data-aos="fade-up"
                          data-aos-delay={200}
                        >
                          <a href="">
                            <img
                              src="assets/imgs/portfolio/6.jpg"
                              alt="Thumbnail"
                            />
                          </a>
                          <div className="portfolio__content-4">
                            <p>Lorem Ipsum is simply</p>
                            <a href="">
                              <h2 className="portfolio__title-4">
                                Content Creation Services
                              </h2>
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide" data-speed="0.9">
                        <div
                          className="portfolio__item-4"
                          data-aos="fade-up"
                          data-aos-delay={200}
                        >
                          <a href="">
                            <img
                              src="assets/imgs/portfolio/7.jpg"
                              alt="Thumbnail"
                            />
                          </a>
                          <div className="portfolio__content-4">
                            <p>Lorem Ipsum is simply</p>
                            <a href="">
                              <h2 className="portfolio__title-4">
                                Content Creation Services
                              </h2>
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide" data-speed="0.9">
                        <div
                          className="portfolio__item-4"
                          data-aos="fade-up"
                          data-aos-delay={200}
                        >
                          <a href="">
                            <img
                              src="assets/imgs/portfolio/8.jpg"
                              alt="Thumbnail"
                            />
                          </a>
                          <div className="portfolio__content-4">
                            <p>Lorem Ipsum is simply</p>
                            <a href="">
                              <h2 className="portfolio__title-4">
                                Content Creation Services
                              </h2>
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide" data-speed="0.9">
                        <div
                          className="portfolio__item-4"
                          data-aos="fade-up"
                          data-aos-delay={200}
                        >
                          <a href="">
                            <img
                              src="assets/imgs/portfolio/9.jpg"
                              alt="Thumbnail"
                            />
                          </a>
                          <div className="portfolio__content-4">
                            <p>Lorem Ipsum is simply</p>
                            <a href="">
                              <h2 className="portfolio__title-4">
                                Content Creation Services
                              </h2>
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio area end */}
    </>
  );
};

export default PortfolioOne;
