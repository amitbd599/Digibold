import React from "react";
import { Link } from "react-router-dom";

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
                  <Link to="#">Home</Link>
                  <ul>
                    <li>
                      <Link to="/">home one</Link>
                    </li>
                    <li>
                      <Link to="/index-2">home two</Link>
                    </li>
                    <li>
                      <Link to="/index-3">home three</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="#">Service</Link>
                  <ul>
                    <li>
                      <Link to="/service-details">Service details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">portfolio</Link>
                  <ul>
                    <li>
                      <Link to="/project">portfolio</Link>
                    </li>
                    <li>
                      <Link to="/project-details">portfolio details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">team</Link>
                  <ul>
                    <li>
                      <Link to="/team">team</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">blog</Link>
                  <ul>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/blog-details">Blog details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">others</Link>
                  <ul>
                    <li>
                      <Link to="/about">about</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
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
                    <Link to="tel:+88014420420">+(1) 123 456 7890</Link>
                    <Link to="tel:+88014420420">+(1) 098 765 4321</Link>
                  </div>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-envelope" />
                  </span>
                  <div>
                    <Link to="mailto:info@driller.com">info@driller.com</Link>
                    <Link to="mailto:info.example@driller.com">
                      info.example@driller.com
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <div className="footer__social-3">
              <ul>
                <li>
                  <Link to="#">
                    <i className="fa-brands fa-facebook-f" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa-brands fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa-brands fa-instagram" />
                  </Link>
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
