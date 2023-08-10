import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const HeaderFour = React.lazy(() => import("../components/HeaderFour"));
const HeroFour = React.lazy(() => import("../components/HeroFour"));
const FooterThree = React.lazy(() => import("../components/FooterThree"));
const TextSliderFour = React.lazy(() => import("../components/TextSliderFour"));
const AboutFive = React.lazy(() => import("../components/AboutFive"));
const ServiceFour = React.lazy(() => import("../components/ServiceFour"));
const CounterFive = React.lazy(() => import("../components/CounterFive"));
const PortfolioOne = React.lazy(() => import("../components/PortfolioOne"));
const BlogFour = React.lazy(() => import("../components/BlogFour"));
const ContactThree = React.lazy(() => import("../components/ContactThree"));
const BrandThree = React.lazy(() => import("../components/BrandThree"));
const FooterFive = React.lazy(() => import("../components/FooterFive"));
const WorkProcessThree = React.lazy(() =>
  import("../components/WorkProcessThree")
);

const HomeFour = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          <HeaderFour />
          <main>
            <HeroFour />
            <TextSliderFour />
            <AboutFive />
            <ServiceFour />
            <WorkProcessThree />
            <CounterFive />
            <PortfolioOne />
            <BlogFour />
            <ContactThree />
            <BrandThree />
            <FooterFive />
          </main>
          <FooterThree />
        </Suspense>
      </Fragment>
    </>
  );
};

export default HomeFour;
