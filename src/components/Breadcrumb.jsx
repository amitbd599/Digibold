import React from "react";

const Breadcrumb = ({ title }) => {
  return (
    <>
      {/* Breadcrumb area start */}
      <section className="breadcrumb__area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__inner">
                <div className="breadcrumb__left">
                  <h1 className="breadcrumb__title">{title}</h1>
                </div>
                <div className="breadcrumb__right">
                  <ul>
                    <li>
                      {" "}
                      <a href="">home</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="">about</a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb area end */}
    </>
  );
};

export default Breadcrumb;
