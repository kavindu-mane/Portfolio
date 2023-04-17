import React from "react";
import { Route, Routes } from "react-router-dom";
import ReactProgressBar from "../components/Projects/ReactProgressBar/ReactProgressBar";
import Base from "../components/Projects/Base";
import Error from "./Error"

const Projects = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/react-percentage-bar" element={<ReactProgressBar />} />
        <Route path="/" element={<Base />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </React.Fragment>
  );
};

export default Projects;
