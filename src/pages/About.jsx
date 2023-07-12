import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import Breadcrumb from "../components/Breadcrumb";
const HeaderOne = React.lazy(() => import("../components/HeaderOne"));

const Footer = React.lazy(() => import("../components/Footer"));

const About = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          <HeaderOne />
          <main>
            <Breadcrumb title="About US" />
          </main>
          <Footer />
        </Suspense>
      </Fragment>
    </>
  );
};

export default About;
