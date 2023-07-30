import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const HeaderOne = React.lazy(() => import("../components/HeaderOne"));
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const BlogDetails = React.lazy(() => import("../components/BlogDetails"));

const FooterFour = React.lazy(() => import("../components/FooterFour"));

const BlogDetailsPage = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          <HeaderOne />
          <main>
            <Breadcrumb title="Blog Details" />
            <BlogDetails />
          </main>
          <FooterFour />
        </Suspense>
      </Fragment>
    </>
  );
};

export default BlogDetailsPage;
