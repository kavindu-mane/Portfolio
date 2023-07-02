import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
const Home = lazy(() => import("./pages/Home"));
const RPB = lazy(() =>
  import("./components/Projects/ReactProgressBar/ReactProgressBar")
);
const Error = lazy(() => import("./pages/Error"));

AOS.init();

const linkList = {
  "/": <Home />,
  "/react-percentage-bar": <RPB />,
};

const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
const themeSet = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && darkQuery.matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

class App extends Component {
  render() {
    themeSet();
    return (
      <React.Fragment>
        <Helmet>
          <link rel="icon" href="https://www.kavindu.me/favicon.ico" />
          <meta
            name="url"
            property="og:url"
            content="https://www.kavindu.me/"
          />
          <meta name="title" property="og:title" content="Kavindu Manahara" />
          <meta
            name="description"
            property="og:description"
            content="Portfolio website of Sri Lankan Computer Science Undergraduate , Developer and IT Enthusiast Kavindu Manahara."
          />
          <meta
            property="og:image"
            itemprop="image"
            content="https://www.kavindu.me/webimg.png"
          />

          <meta name="twitter:url" content="https://www.kavindu.me/" />
          <meta
            name="twitter:description"
            content="Portfolio website of Sri Lankan Computer Science Undergraduate , Developer and IT Enthusiast Kavindu Manahara."
          />
          <meta
            property="twitter:image"
            content="https://www.kavindu.me/webimg.png"
          />
        </Helmet>
        <Router>
          <Suspense
            fallback={
              <p className="flex h-screen items-center justify-center text-lg italic">
                Loading please wait...
              </p>
            }
          >
            <Routes>
              {Object.keys(linkList).map((key) => {
                return <Route key={key} path={key} element={linkList[key]} />;
              })}
              {<Route path="*" element={<Error />} />}
            </Routes>
          </Suspense>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
