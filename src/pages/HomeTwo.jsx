import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeroTwo from "../components/HeroTwo";
import TextSliderThree from "../components/TextSliderThree";
import AboutThree from "../components/AboutThree";
import ServiceTwo from "../components/ServiceTwo";
import CounterThree from "../components/CounterThree";
import GalleryOne from "../components/GalleryOne";
import TeamTwo from "../components/TeamTwo";
import WorkProcessOne from "../components/WorkProcessOne";
const HeaderTwo = React.lazy(() => import("../components/HeaderTwo"));

const FooterOne = React.lazy(() => import("../components/FooterOne"));

const HomeTwo = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          <HeaderTwo />
          <main>
            <HeroTwo />
            <TextSliderThree />
            <AboutThree />
            <ServiceTwo />
            <CounterThree />
            <GalleryOne />
            <TeamTwo />
            <WorkProcessOne />
          </main>
          <FooterOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default HomeTwo;
