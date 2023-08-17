import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import ThemeSwitcher from "./data/ThemeSwitcher";
import { FaSpinner } from "react-icons/fa";
const Skill = lazy(() => import("./pages/Skill"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Home = lazy(() => import("./pages/Home"));
const RPB = lazy(() =>
  import("./components/Projects/ReactProgressBar/ReactProgressBar")
);
const Error = lazy(() => import("./pages/Error"));
const Gradient = lazy(() => import("./components/Common/Gradient"));
const GradientBottom = lazy(() => import("./components/Common/GradientBottom"));

AOS.init();

const linkList = {
  "/": <Home />,
  "/projects/react-percentage-bar": <RPB />,
  "/skills": <Skill />,
  "/projects": <Projects />,
  "/contact": <Contact />,
  "*": <Error />,
};

function App() {
  ThemeSwitcher();
  return (
    <React.Fragment>
      <Helmet>
        <link rel="icon" href="https://www.kavindu.me/favicon.ico" />
        <meta name="url" property="og:url" content="https://www.kavindu.me/" />
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
            <div className="relative overflow-hidden flex h-screen w-screen items-center justify-center bg-slate-900">
              <FaSpinner className="animate-spin text-7xl text-yellow-300" />
              <Gradient />
              <GradientBottom />
            </div>
          }
        >
          <Routes>
            {Object.keys(linkList).map((key) => {
              return <Route key={key} path={key} element={linkList[key]} />;
            })}
          </Routes>
        </Suspense>
      </Router>
    </React.Fragment>
  );
}

export default App;
