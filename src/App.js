import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Error from "./pages/Error";

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
          <Routes>
            {Object.keys(linkList).map((key) => {
              return <Route key={key} path={key} element={linkList[key]} />;
            })}
            {<Route path="*" element={<Error />} />}
          </Routes>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
