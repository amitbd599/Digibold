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
import TextSliderTwo from "../components/TextSliderTwo";
import BlogTwo from "../components/BlogTwo";
import ContactTwo from "../components/ContactTwo";
const HeaderTwo = React.lazy(() => import("../components/HeaderTwo"));

const FooterTwo = React.lazy(() => import("../components/FooterTwo"));

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
            <TextSliderTwo />
            <BlogTwo />
            <ContactTwo />
          </main>
          <FooterTwo />
        </Suspense>
      </Fragment>
    </>
  );
};

export default HomeTwo;
