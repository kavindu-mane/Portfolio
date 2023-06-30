import React, { lazy } from "react";
const Titles = lazy(() => import("../Common/Titles"));

const AboutSection = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center pt-20" id="about">
        <Titles title={"About"} />
        <p className="text-lg my-5 w-3/4 sm:w-2/3 text-center">
          Hi There! I am <b>Kavindu Manahara</b> from Sri lanka.I am 22 years
          old.I have front-end skills in <b>JavaScript</b> , <b>React</b> ,{" "}
          <b>Bootstrap</b> and <b>Tailwind CSS</b>. As well as I'm currently
          learning <b>PHP</b> and <b>Express Js</b> as backend
          technologies.These days I am reading for a degree in Bachelor of
          Computer Science and Technology degree program at Uva Wellassa
          University in Sri Lanka.
        </p>
      </div>
    </React.Fragment>
  );
};

export default AboutSection;
