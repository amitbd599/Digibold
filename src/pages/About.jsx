import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const HeaderOne = React.lazy(() => import("../components/HeaderOne"));
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const AboutTwo = React.lazy(() => import("../components/AboutTwo"));
const CounterTwo = React.lazy(() => import("../components/CounterTwo"));
const WhoWeAreTwo = React.lazy(() => import("../components/WhoWeAreTwo"));
const TextSliderOne = React.lazy(() => import("../components/TextSliderOne"));
const BrandTwo = React.lazy(() => import("../components/BrandTwo"));
const FooterFour = React.lazy(() => import("../components/FooterFour"));

const About = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          <HeaderOne />
          <main>
            <Breadcrumb title="About US" />
            <AboutTwo />
            <CounterTwo />
            <WhoWeAreTwo />
            <TextSliderOne />
            <BrandTwo />
          </main>
          <FooterFour />
        </Suspense>
      </Fragment>
    </>
  );
};

export default About;
