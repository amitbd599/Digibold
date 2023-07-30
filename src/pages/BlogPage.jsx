import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const HeaderOne = React.lazy(() => import("../components/HeaderOne"));
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const BlogGroup = React.lazy(() => import("../components/BlogGroup"));

const FooterFour = React.lazy(() => import("../components/FooterFour"));

const BlogPage = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          <HeaderOne />
          <main>
            <Breadcrumb title="Blog" />
            <BlogGroup />
          </main>
          <FooterFour />
        </Suspense>
      </Fragment>
    </>
  );
};

export default BlogPage;
