import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const ReactProgressBar = lazy(() =>
  import("../components/Projects/ReactProgressBar/ReactProgressBar")
);
const Base = lazy(() => import("../components/Projects/Base"));
const Error = lazy(() => import("./Error"));

const Projects = () => {
  return (
    <React.Fragment>
      <Suspense
        fallback={
          <p className="flex h-screen items-center justify-center text-lg italic">
            Loading please wait...
          </p>
        }
      >
        <Routes>
          <Route path="/react-percentage-bar" element={<ReactProgressBar />} />
          <Route path="/" element={<Base />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </React.Fragment>
  );
};

export default Projects;
