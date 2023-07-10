import React from "react";

const HeaderOne = () => {
  return (
    <>
      {/* Header area start */}
      <header className="header__area pos-abs plr-100">
        <div className="header__inner">
          <div className="header__logo">
            <a href="">
              <img src="/assets/imgs/logo/logo.png" alt="Site Logo" />
            </a>
          </div>
          <div className="header__menu">
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
          <div className="header__others">
            <div className="header__search">
              <button className="search-icon">
                <i className="fa-solid fa-magnifying-glass" />
              </button>
              <button className="search-close">
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <div className="header__offcanvas">
              <button className="menu_icon">
                <img src="/assets/imgs/icon/menu.png" alt="Menu Icon" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderOne;
