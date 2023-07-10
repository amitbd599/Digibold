import React from "react";

const Offcanvas = () => {
  return (
    <>
      {/* Offcanvas area start */}
      <div className="offcanvas__area">
        <div className="offcanvas__inner">
          <div className="offcanvas__top">
            <img src="assets/imgs/logo/logo-light.png" alt="Logo" />
            <button id="offcanvas_close">
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          <div className="offcanvas__search">
            <form action="#">
              <input type="text" placeholder="Search..." name="s" />
            </form>
          </div>
          <div className="offcanvas__menu">
            <div className="offcanvas-menu">
              <ul>
                <li>
                  <a href="#">Home</a>
                  <ul>
                    <li>
                      <a href="index.html">home one</a>
                    </li>
                    <li>
                      <a href="index-2.html">home two</a>
                    </li>
                    <li>
                      <a href="index-3.html">home three</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="#">Service</a>
                  <ul>
                    <li>
                      <a href="service-details.html">Service details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">portfolio</a>
                  <ul>
                    <li>
                      <a href="project.html">portfolio</a>
                    </li>
                    <li>
                      <a href="project-details.html">portfolio details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">team</a>
                  <ul>
                    <li>
                      <a href="team.html">team</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">blog</a>
                  <ul>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">others</a>
                  <ul>
                    <li>
                      <a href="about.html">about</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQs</a>
                    </li>
                    <li>
                      <a href="404.html">404</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="offcanvas__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1511.2499674845235!2d-73.99553882767792!3d40.75102778252164!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1686536419224!5m2!1sen!2sbd"
              loading="lazy"
            />
          </div>
          <div className="offcanvas__btm">
            <div className="footer__address-3">
              <ul>
                <li>
                  <span>
                    <i className="fa-solid fa-location-dot" />
                  </span>
                  <p className="text-white">
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
      </div>
      {/* Offcanvas area end */}
    </>
  );
};

export default Offcanvas;
