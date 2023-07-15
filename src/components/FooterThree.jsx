import React from "react";

const FooterThree = () => {
  return (
    <>
      {/* Footer area start */}
      <footer className="footer__area-3">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="footer__top-3">
                <li>
                  <span>
                    <i className="fa-solid fa-phone-volume" />
                  </span>
                  <p>
                    Call us Today For your Free Quote - Your Agency <br />{" "}
                    <a href="tel:(603)555-0123">(603) 555-0123</a>
                  </p>
                </li>
                <div>
                  <a className="db-btn-primary" href="contact.html">
                    <i className="fa-solid fa-shield" /> Free Touch Here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__widgets-3">
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="footer__logo-3">
                  <img
                    src="assets/imgs/logo/logo-light.png"
                    alt="Footer Logo"
                  />
                  <p>
                    Conditions Terms of Use Ours feturesin Services ew Guests
                    LisitThe Team List Guests LisitThe Team List
                  </p>
                  <div className="footer__social-3">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="footer__link-3">
                  <h2 className="footer__title">Quick links</h2>
                  <ul>
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="service-details.html">Service</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog Post</a>
                    </li>
                    <li>
                      <a href="about.html">Team Members</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="footer__address-3">
                  <h2 className="footer__title">Contact now</h2>
                  <ul>
                    <li>
                      <span>
                        <i className="fa-solid fa-location-dot" />
                      </span>
                      <p>
                        Burmsille Street, MN 55337, <br />
                        United States
                      </p>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-phone" />
                      </span>
                      <div>
                        <a href="tel:+88014420420">+(1) 123 456 7890</a>
                        <a href="tel:+88014420420">+(1) 098 765 4321</a>
                      </div>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-envelope" />
                      </span>
                      <div>
                        <a href="mailto:info@driller.com">info@driller.com</a>
                        <a href="mailto:info.example@driller.com">
                          info.example@driller.com
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="footer__gallery-3">
                  <div className="footer__title">Gallery posts</div>
                  <ul className="gallery">
                    <li>
                      <a href="project.html">
                        <img
                          src="assets/imgs/blog/3/footer/1.png"
                          alt="Thumbnail"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="project.html">
                        <img
                          src="assets/imgs/blog/3/footer/2.png"
                          alt="Thumbnail"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="project.html">
                        <img
                          src="assets/imgs/blog/3/footer/3.png"
                          alt="Thumbnail"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="project.html">
                        <img
                          src="assets/imgs/blog/3/footer/4.png"
                          alt="Thumbnail"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="project.html">
                        <img
                          src="assets/imgs/blog/3/footer/5.png"
                          alt="Thumbnail"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="project.html">
                        <img
                          src="assets/imgs/blog/3/footer/6.png"
                          alt="Thumbnail"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__btm-3-wrap">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="footer__btm-3">
                  <div className="footer__copyright-3">
                    <p>
                      Copyright @2023 IT Company Template. All Rights Reserved.
                    </p>
                  </div>
                  <div className="footer__menu-3">
                    <ul>
                      <li>
                        <a href="about.html">Privacy Policy.</a>
                      </li>
                      <li>
                        <a href="about.html">Terms Of Condition</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer area end */}
    </>
  );
};

export default FooterThree;
