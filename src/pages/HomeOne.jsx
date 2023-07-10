import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeaderOne from "../components/HeaderOne";
import Offcanvas from "../components/Offcanvas";
import HeroOne from "../components/HeroOne";
import AboutOne from "../components/AboutOne";
// const BannerOne = React.lazy(() => import("../components/BannerOne"));

const HomeOne = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          <HeaderOne />
          <Offcanvas />
          <main>
            <HeroOne />
            <AboutOne />
          </main>
        </Suspense>
      </Fragment>
    </>
  );
};

export default HomeOne;
