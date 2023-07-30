import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const HeaderOne = React.lazy(() => import("../components/HeaderOne"));
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const ProjectGroup = React.lazy(() => import("../components/ProjectGroup"));

const FooterFour = React.lazy(() => import("../components/FooterFour"));

const ProjectPage = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          <HeaderOne />
          <main>
            <Breadcrumb title="Project" />
            <ProjectGroup />
          </main>
          <FooterFour />
        </Suspense>
      </Fragment>
    </>
  );
};

export default ProjectPage;
