import React, { Suspense , lazy } from "react";
import { Helmet } from "react-helmet";
import ErrorImg from "../assets/404.svg";
const Header = lazy(() => import("../components/Common/Header"));
const Gradient = lazy(() => import("../components/Common/Gradient"));
const Footer = lazy(() => import("../components/Common/Footer"));

const Error = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>404 | Page not found</title>
      </Helmet>
      <Suspense
        fallback={
          <p className="flex h-screen items-center justify-center text-lg italic">
            Loading please wait...
          </p>
        }
      >
        <div className="flex h-screen min-h-[55rem] w-screen flex-col items-center justify-between">
          {/* header */}
          <Header />
          {/* content */}
          <div className="flex h-full w-full flex-col items-center justify-center">
            <img src={ErrorImg} alt="404" className="w-full max-w-3xl" />
            <h1 className="my-20 text-3xl md:text-5xl">404 | Page Not Found</h1>
          </div>
          {/* footer */}
          <Footer />
        </div>
      </Suspense>
      {/* gradient */}
      <Gradient />
    </React.Fragment>
  );
};

export default Error;
