import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeaderOne from "../components/HeaderOne";
import Offcanvas from "../components/Offcanvas";
import HeroOne from "../components/HeroOne";
import AboutOne from "../components/AboutOne";
import ServiceOne from "../components/ServiceOne";
import CounterOne from "../components/CounterOne";
import FaqOne from "../components/FaqOne";
import TeamOne from "../components/TeamOne";
import NewsletterOne from "../components/NewsletterOne";
import WhoWeAreOne from "../components/WhoWeAreOne";
import TextSliderOne from "../components/TextSliderOne";
import BlogOne from "../components/BlogOne";
import ContactOne from "../components/ContactOne";
import BrandOne from "../components/BrandOne";
import Footer from "../components/Footer";
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
