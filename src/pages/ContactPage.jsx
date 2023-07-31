import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const HeaderOne = React.lazy(() => import("../components/HeaderOne"));
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const Contact = React.lazy(() => import("../components/Contact"));

const FooterFour = React.lazy(() => import("../components/FooterFour"));

const ContactPage = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          <HeaderOne />
          <main>
            <Breadcrumb title="Contact" />
            <Contact />
          </main>
          <FooterFour />
        </Suspense>
      </Fragment>
    </>
  );
};

export default ContactPage;
