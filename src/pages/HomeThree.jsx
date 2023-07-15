import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const HeaderThree = React.lazy(() => import("../components/HeaderThree"));
const HeroThree = React.lazy(() => import("../components/HeroThree"));
const AboutFour = React.lazy(() => import("../components/AboutFour"));
const ServiceThree = React.lazy(() => import("../components/ServiceThree"));
const GalleryTwo = React.lazy(() => import("../components/GalleryTwo"));
const CounterFour = React.lazy(() => import("../components/CounterFour"));
const WorkProcessTwo = React.lazy(() => import("../components/WorkProcessTwo"));
const TestimonialOne = React.lazy(() => import("../components/TestimonialOne"));
const TeamThree = React.lazy(() => import("../components/TeamThree"));
const FaqTwo = React.lazy(() => import("../components/FaqTwo"));
const BlogThree = React.lazy(() => import("../components/BlogThree"));
const FooterThree = React.lazy(() => import("../components/FooterThree"));

const HomeThree = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          <HeaderThree />
          <main>
            <HeroThree />
            <AboutFour />
            <ServiceThree />
            <GalleryTwo />
            <CounterFour />
            <WorkProcessTwo />
            <TestimonialOne />
            <TeamThree />
            <FaqTwo />
            <BlogThree />
          </main>
          <FooterThree />
        </Suspense>
      </Fragment>
    </>
  );
};

export default HomeThree;
