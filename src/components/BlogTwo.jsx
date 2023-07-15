import React from "react";

const BlogTwo = () => {
  return (
    <>
      {/* blog  */}
      <section className="blog__area-2">
        <div
          className="service__sectiontitle pb-70 text-center"
          data-aos="fade-up"
        >
          <span>Latest Blog</span>
          <h2 className="title text-dark">
            Unlocking the potential <br /> of your brand
          </h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div
                className="blog__item-2"
                data-aos="fade-right"
                data-aos-delay={300}
              >
                <div className="blog__thumb-2">
                  <a href="blog-details.html">
                    <img src="assets/imgs/home-2/blog-1.jpg" alt="thumb" />
                  </a>
                  <span className="blog__meta-2">December 23,2023</span>
                </div>
                <div className="blog__content-2">
                  <a className="blog__title-2" href="blog-details.html">
                    Social Media Management
                  </a>
                  <p>
                    It is a long established fact that a reader will be
                    distracted byi the readable desi content of a page when
                    looking at its layout
                  </p>
                  <a className="blog__btn-2" href="blog-details.html">
                    Read more{" "}
                    <img src="assets/imgs/home-2/arrow-down.png" alt="thumb" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="blog__item-2"
                data-aos="fade-left"
                data-aos-delay={300}
              >
                <div className="blog__thumb-2">
                  <a href="blog-details.html">
                    <img src="assets/imgs/home-2/blog-2.jpg" alt="thumb" />
                  </a>
                  <span className="blog__meta-2">December 23,2023</span>
                </div>
                <div className="blog__content-2">
                  <a className="blog__title-2" href="blog-details.html">
                    Environmental Design digital
                  </a>
                  <p>
                    It is a long established fact that a reader will be
                    distracted byi the readable desi content of a page when
                    looking at its layout
                  </p>
                  <a className="blog__btn-2" href="blog-details.html">
                    Read more{" "}
                    <img src="assets/imgs/home-2/arrow-down.png" alt="thumb" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /blog  */}
    </>
  );
};

export default BlogTwo;
