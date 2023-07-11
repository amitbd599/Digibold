import React from "react";
const TextSliderOne = () => {
  return (
    <>
      {/* Text Slider area start */}
      <section className="textslider__area">
        <div className="textslider__inner">
          <div className="swiper textslider__active">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="textslider__slide">
                  <h2 className="textslider__text">
                    Creative<span>*</span>
                  </h2>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="textslider__slide">
                  <h2 className="textslider__text">
                    Digital<span>*</span>
                  </h2>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="textslider__slide">
                  <h2 className="textslider__text">
                    Creative<span>*</span>
                  </h2>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="textslider__slide">
                  <h2 className="textslider__text">
                    Corporate<span>*</span>
                  </h2>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="textslider__slide">
                  <h2 className="textslider__text">
                    Creative<span>*</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Text Slider area end */}
    </>
  );
};

export default TextSliderOne;
