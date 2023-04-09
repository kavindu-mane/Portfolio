import React from 'react'
import ThemeButton from '../Common/ThemeButtom';
import Header from '../HeaderAndFooter/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationIsland from '../Common/NavigationIslad';
import Footer from '../HeaderAndFooter/Footer';
import Home from '../../pages/Home';
import Contacts from '../../pages/Contacts';
import Skills from '../../pages/Skills';
import About from '../../pages/About';
import Projects from '../../pages/Projects';
import Error from "../../pages/Error"
import Gradient from "../Common/Gradient"

const linkList = {
  "/": <Home />,
  "/contact": <Contacts />,
  "/skills": <Skills />,
  "/about": <About />,
  "/projects": <Projects />,
};

const BasicPageStructure = () => {
    return (
      <React.Fragment>
        <Header />
        <ThemeButton />
        <Gradient />
        <Router>
          <Routes>
            {Object.keys(linkList).map((key) => {
              return <Route key={key} path={key} element={linkList[key]} />;
            })}
            {
              <Route
                path="*"
                element={<Error />}
              />
            }
          </Routes>
        </Router>
        <NavigationIsland />
        <Footer />
      </React.Fragment>
    );
}
 
export default BasicPageStructure;