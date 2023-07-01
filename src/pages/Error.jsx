import React, { Suspense } from "react";
import { Helmet } from "react-helmet";

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
        <h1 className="flex h-screen items-center justify-center text-2xl md:text-4xl">
          Error 404 | Page Not Found
        </h1>
      </Suspense>
    </React.Fragment>
  );
};

export default Error;
