import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
const Contacts = lazy(() => import("./pages/Contacts"));
const Skills = lazy(() => import("./pages/Skills"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Error = lazy(() => import("./pages/Error"));

const linkList = {
  "/": <Home />,
  "/contact": <Contacts />,
  "/skills": <Skills />,
  "/about": <About />,
  "/projects/*": <Projects />,
};

class App extends Component {
  render() {
    return (
      <React.Fragment>
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
