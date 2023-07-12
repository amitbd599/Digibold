import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const HeaderOne = React.lazy(() => import("../components/HeaderOne"));
const HeroOne = React.lazy(() => import("../components/HeroOne"));
const AboutOne = React.lazy(() => import("../components/AboutOne"));
const ServiceOne = React.lazy(() => import("../components/ServiceOne"));
const CounterOne = React.lazy(() => import("../components/CounterOne"));
const FaqOne = React.lazy(() => import("../components/FaqOne"));
const TeamOne = React.lazy(() => import("../components/TeamOne"));
const NewsletterOne = React.lazy(() => import("../components/NewsletterOne"));
const WhoWeAreOne = React.lazy(() => import("../components/WhoWeAreOne"));
const TextSliderOne = React.lazy(() => import("../components/TextSliderOne"));
const BlogOne = React.lazy(() => import("../components/BlogOne"));
const ContactOne = React.lazy(() => import("../components/ContactOne"));
const BrandOne = React.lazy(() => import("../components/BrandOne"));
const Footer = React.lazy(() => import("../components/Footer"));

const HomeOne = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          <HeaderOne />
          <main>
            <HeroOne />
            <AboutOne />
            <ServiceOne />
            <CounterOne />
            <FaqOne />
            <TeamOne />
            <NewsletterOne />
            <WhoWeAreOne />
            <TextSliderOne />
            <BlogOne />
            <ContactOne />
            <BrandOne />
          </main>
          <Footer />
        </Suspense>
      </Fragment>
    </>
  );
};

export default HomeOne;
