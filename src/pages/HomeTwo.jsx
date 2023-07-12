import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const HeaderOne = React.lazy(() => import("../components/HeaderOne"));

const FooterOne = React.lazy(() => import("../components/FooterOne"));

const HomeTwo = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          <HeaderOne />
          <main></main>
          <FooterOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default HomeTwo;
