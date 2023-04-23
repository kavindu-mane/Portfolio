import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
const BasicPageStructure = lazy(() =>
  import("../components/BasicPageStructure/BasicPageStructure")
);

const Error = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Error 404 | Page not found</title>
      </Helmet>
            <Suspense
        fallback={
          <p className="flex h-screen items-center justify-center text-lg italic">
            Loading please wait...
          </p>
        }
      >
      <BasicPageStructure>
        <h1 className="mt-24">Error</h1>
      </BasicPageStructure>
      </Suspense>
    </React.Fragment>
  );
};

export default Error;
