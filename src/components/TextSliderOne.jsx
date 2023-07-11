import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const TextSliderOne = () => {
  return (
    <>
      {/* Text Slider area start */}
      <section className="textslider__area">
        <div className="textslider__inner">
          <div className="swiper textslider__active">
            <div className="swiper-wrapper">
              <Swiper
                loop={true}
                // navigation={true}
                effect="fade"
                slidesPerView={3}
                spaceBetween={30}
              >
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="textslider__slide">
                      <h2 className="textslider__text">
                        Creative<span>*</span>
                      </h2>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="textslider__slide">
                      <h2 className="textslider__text">
                        Digital<span>*</span>
                      </h2>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="textslider__slide">
                      <h2 className="textslider__text">
                        Creative<span>*</span>
                      </h2>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="textslider__slide">
                      <h2 className="textslider__text">
                        Corporate<span>*</span>
                      </h2>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="textslider__slide">
                      <h2 className="textslider__text">
                        Creative<span>*</span>
                      </h2>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/* Text Slider area end */}
    </>
  );
};

export default TextSliderOne;
