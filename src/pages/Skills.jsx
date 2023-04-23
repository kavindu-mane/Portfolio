import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
const BasicPageStructure = lazy(() =>
  import("../components/BasicPageStructure/BasicPageStructure")
);

const Skills = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Kavindu Manahara | Skills</title>
      </Helmet>
      <Suspense
        fallback={
          <p className="flex h-screen items-center justify-center text-lg italic">
            Loading please wait...
          </p>
        }
      >
        <BasicPageStructure>
          <h1 className="mt-24">Skills</h1>
        </BasicPageStructure>
      </Suspense>
    </React.Fragment>
  );
};

export default Skills;
