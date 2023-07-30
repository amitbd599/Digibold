import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const HeaderOne = React.lazy(() => import("../components/HeaderOne"));
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const ServiceDetails = React.lazy(() => import("../components/ServiceDetails"));

const FooterFour = React.lazy(() => import("../components/FooterFour"));

const ServiceDetailsPage = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          <HeaderOne />
          <main>
            <Breadcrumb title="Service Details" />
            <ServiceDetails />
          </main>
          <FooterFour />
        </Suspense>
      </Fragment>
    </>
  );
};

export default ServiceDetailsPage;
