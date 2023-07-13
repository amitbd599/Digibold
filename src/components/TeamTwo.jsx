import React from "react";

const TeamTwo = () => {
  return (
    <>
      {/* team  */}
      <section className="team__area-2">
        <div className="container">
          <div className="team__wrapper-2" data-aos="fade-up">
            <div className="service__sectiontitle text-center">
              <span>The team</span>
              <h2 className="title text-dark">
                Inspiring Creativity <br /> Delivering Results
              </h2>
            </div>
          </div>
          <div className="team__items-2">
            <div
              className="team__item-2"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="team__thumb-2">
                <div className="shine">
                  <a href="about.html">
                    <img src="assets/imgs/home-2/team-1.png" alt="thumb" />
                  </a>
                </div>
                <ul className="team__social-2">
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
              <div className="team__content-2">
                <a href="about.html">
                  <h3 className="team__name">Ralph Edwards</h3>
                </a>
                <p className="team__post">Merketing Department</p>
              </div>
            </div>
            <div
              className="team__item-2"
              data-aos="fade-up"
              data-aos-delay={600}
            >
              <div className="team__thumb-2">
                <div className="shine">
                  <a href="about.html">
                    <img src="assets/imgs/home-2/team-2.png" alt="thumb" />
                  </a>
                </div>
                <ul className="team__social-2">
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
              <div className="team__content-2">
                <a href="about.html">
                  <h3 className="team__name">Annette Black</h3>
                </a>
                <p className="team__post">Development Department</p>
              </div>
            </div>
            <div
              className="team__item-2"
              data-aos="fade-up"
              data-aos-delay={900}
            >
              <div className="team__thumb-2">
                <div className="shine">
                  <a href="about.html">
                    <img src="assets/imgs/home-2/team-3.png" alt="thumb" />
                  </a>
                </div>
                <ul className="team__social-2">
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
              <div className="team__content-2">
                <a href="about.html">
                  <h3 className="team__name">Savannah Nguyen</h3>
                </a>
                <p className="team__post">Design Department</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /team  */}
    </>
  );
};

export default TeamTwo;
