import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const HeaderFive = React.lazy(() => import("../components/HeaderFive"));
const HeroFive = React.lazy(() => import("../components/HeroFive"));
const ServiceFive = React.lazy(() => import("../components/ServiceFive"));
const HistoryOne = React.lazy(() => import("../components/HistoryOne"));
const GalleryThree = React.lazy(() => import("../components/GalleryThree"));
const NewsletterTwo = React.lazy(() => import("../components/NewsletterTwo"));
const TeamFour = React.lazy(() => import("../components/TeamFour"));
const PricingOne = React.lazy(() => import("../components/PricingOne"));
const TestimonialTwo = React.lazy(() => import("../components/TestimonialTwo"));
const FooterSix = React.lazy(() => import("../components/FooterSix"));

const HomeFive = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          <HeaderFive />
          <main className="digibold-five">
            <HeroFive />
            <ServiceFive />
            <HistoryOne />
            <GalleryThree />
            <NewsletterTwo />
            <TeamFour />
            <PricingOne />
            <TestimonialTwo />
          </main>
          <FooterSix />
        </Suspense>
      </Fragment>
    </>
  );
};

export default HomeFive;
