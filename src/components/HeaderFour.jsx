import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const HeaderFour = () => {
  const [search, setSearch] = useState(false);
  const [offCanvas, setOffCanvas] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    var offCanvasNav = document.getElementById("offcanvas-navigation");
    var offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    var menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    var numMenuExpand = menuExpand.length;

    function sideMenuExpand() {
      if (this.parentElement.classList.contains("active") === true) {
        this.parentElement.classList.remove("active");
      } else {
        for (let i = 0; i < numMenuExpand; i++) {
          menuExpand[i].parentElement.classList.remove("active");
        }
        this.parentElement.classList.add("active");
      }
    }

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", sideMenuExpand);
    }
  }, []);

  const searchControl = () => {
    setSearch(!search);
  };
  const offCanvasControl = () => {
    setSearch(false);
    setOffCanvas(!offCanvas);
  };
  return (
    <>
      {/* Offcanvas area start */}
      <div
        className={!offCanvas ? "offcanvas__area" : "offcanvas__area showed"}
      >
        <div className="offcanvas__inner">
          <div className="offcanvas__top">
            <img src="assets/imgs/logo/logo-light.png" alt="Logo" />
            <button id="offcanvas_close" onClick={offCanvasControl}>
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          <div className="offcanvas__search pb-4">
            <form action="#">
              <input type="text" placeholder="Search..." name="s" />
            </form>
          </div>
          <div className="offcanvas__menu">
            <nav className="offcanvas-navigation" id="offcanvas-navigation">
              <ul>
                <li className="menu-item-has-children">
                  <Link to="/">HOME</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/">Home One</Link>
                    </li>
                    <li>
                      <Link to="/index-2">Home Two</Link>
                    </li>
                    <li>
                      <Link to="/index-3">Home Three</Link>
                    </li>
                    <li>
                      <Link to="/index-4">home Four</Link>
                    </li>
                    <li>
                      <Link to="/index-5">home Five</Link>
                    </li>
                  </ul>
                </li>

                <li className="menu-item-has-children">
                  <Link to="/services">Services</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/services">Service Page</Link>
                    </li>
                    <li>
                      <Link to="/services-details">Services Details</Link>
                    </li>
                  </ul>
                </li>

                <li className="menu-item-has-children">
                  <Link to="/about">Pages</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/team">Team</Link>
                    </li>
                    <li>
                      <Link to="/team-details">Team Details</Link>
                    </li>
                    <li>
                      <Link to="/project">Projects</Link>
                    </li>
                    <li>
                      <Link to="/project-details">Projects Details</Link>
                    </li>
                    <li>
                      <Link to="/pricing">Pricing Page</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ Page</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <Link to="/blog">Blog</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/blog-details">Blog Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/contact">CONTACT</Link>{" "}
                </li>
              </ul>
            </nav>
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

      <>
        {/* Header area start */}
        <header className="header__area-4 pos-abs plr-100">
          <div className="header__inner-4">
            <div className="header__logo">
              <a href="">
                <img src="assets/imgs/logo/logo-light-3.png" alt="Site Logo" />
              </a>
            </div>
            <div className="header__right-4">
              <div className="header__menu-4">
                <nav className="main-menu">
                  <ul>
                    <li className="has-dropdown">
                      <a href="#">Home</a>
                      <ul className="main-dropdown">
                        <li>
                          <a href="index.html">home one</a>
                        </li>
                        <li>
                          <a href="index-2.html">home two</a>
                        </li>
                        <li>
                          <a href="index-3.html">home three</a>
                        </li>
                        <li>
                          <Link to="/index-4">home Four</Link>
                        </li>
                        <li>
                          <Link to="/index-5">home Five</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li className="has-dropdown">
                      <a href="#">Service</a>
                      <ul className="main-dropdown">
                        <li>
                          <a href="service-details.html">Service details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-megamenu">
                      <a href="#">pages</a>
                      <div className="mega-menu">
                        <ul>
                          <li>home</li>
                          <li>
                            <a href="index.html">home one</a>
                          </li>
                          <li>
                            <a href="index-2.html">home two</a>
                          </li>
                          <li>
                            <a href="index-3.html">home three</a>
                          </li>
                          <li>
                            <Link to="/index-4">home Four</Link>
                          </li>
                          <li>
                            <Link to="/index-5">home Five</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>service</li>
                          <li>
                            <a href="service-details.html">Service details</a>
                          </li>
                        </ul>
                        <ul>
                          <li>portfolio</li>
                          <li>
                            <a href="project.html">portfolio</a>
                          </li>
                          <li>
                            <a href="project-details.html">portfolio details</a>
                          </li>
                        </ul>
                        <ul>
                          <li>Blog</li>
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog details</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="has-dropdown">
                      <a href="#">blog</a>
                      <ul className="main-dropdown">
                        <li className="has-dropdown">
                          <a href="blog.html">Blog</a>
                          <ul className="sub-dropdown">
                            <li>
                              <a href="blog-details.html">blog details</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header__others-4">
                <div className="header__offcanvas-4">
                  <button className="menu_icon" onClick={offCanvasControl}>
                    <img src="assets/imgs/icon/menu-2.png" alt="Menu Icon" />
                  </button>
                </div>
                <div className="header__quote-4">
                  <a href="">
                    Get a quote <i className="fa-solid fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Header area end */}
      </>
    </>
  );
};

export default HeaderFour;