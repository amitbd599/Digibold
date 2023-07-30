import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const HeaderOne = React.lazy(() => import("../components/HeaderOne"));
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const ProjectDetails = React.lazy(() => import("../components/ProjectDetails"));

const FooterFour = React.lazy(() => import("../components/FooterFour"));

const ProjectDetailsPage = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          <HeaderOne />
          <main>
            <Breadcrumb title="Project Details" />
            <ProjectDetails />
          </main>
          <FooterFour />
        </Suspense>
      </Fragment>
    </>
  );
};

export default ProjectDetailsPage;
