import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
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
        <Helmet>
          <meta
            name="description"
            content="Portfolio website of Kavindu Manahara. I'm Sri Lankan CS Undergraduate and Tech Enthusiast."
          />

          <meta name="title" content="Kavindu Manahara" />
          <meta name="copyright" content="Kavindu Manahara" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.kavindu.me/" />
          <meta property="og:title" content="Kavindu Manahara" />
          <meta
            property="og:description"
            content="Portfolio website of Kavindu Manahara. I'm Sri Lankan CS Undergraduate and Tech Enthusiast."
          />
          <meta
            property="og:image"
            itemprop="image"
            content="https://www.kavindu.me/webimg.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://www.kavindu.me/" />
          <meta name="twitter:creator" content="@kavindu_mane" />
          <meta name="twitter:title" content="Kavindu Manahara" />
          <meta
            name="twitter:description"
            content="Portfolio website of Kavindu Manahara. I'm Sri Lankan CS Undergraduate and Tech Enthusiast."
          />
          <meta
            property="twitter:image"
            content="https://www.kavindu.me/webimg.png"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Kurale&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Alkatra&display=swap"
            rel="stylesheet"
          />
          <title>Kavindu Manahara</title>
        </Helmet>
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
