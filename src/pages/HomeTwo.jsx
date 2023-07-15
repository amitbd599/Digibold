import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const HeaderTwo = React.lazy(() => import("../components/HeaderTwo"));
const HeroTwo = React.lazy(() => import("../components/HeroTwo"));
const TextSliderThree = React.lazy(() =>
  import("../components/TextSliderThree")
);
const AboutThree = React.lazy(() => import("../components/AboutThree"));
const ServiceTwo = React.lazy(() => import("../components/ServiceTwo"));
const CounterThree = React.lazy(() => import("../components/CounterThree"));
const GalleryOne = React.lazy(() => import("../components/GalleryOne"));
const TeamTwo = React.lazy(() => import("../components/TeamTwo"));
const WorkProcessOne = React.lazy(() => import("../components/WorkProcessOne"));
const TextSliderTwo = React.lazy(() => import("../components/TextSliderTwo"));
const BlogTwo = React.lazy(() => import("../components/BlogTwo"));
const ContactTwo = React.lazy(() => import("../components/ContactTwo"));
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
