import React, { lazy } from "react";
const Skills = lazy(() => import("./Skills"));
const Titles = lazy(() => import("../Common/Titles"));

const SkillSection = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center pt-20" id="skills">
        <Titles title={"Skills"} />
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          <Skills percentage={70} icon={"html5"} />
          <Skills percentage={60} icon={"css3"} />
          <Skills percentage={50} icon={"java"} />
          <Skills percentage={55} icon={"javascript"} />
          <Skills percentage={40} icon={"php"} />
          <Skills percentage={60} icon={"bootstrap"} />
          <Skills percentage={70} icon={"tailwindcss"} />
          <Skills percentage={30} icon={"nodejs"} />
          <Skills percentage={75} icon={"react"} />
          <Skills percentage={30} icon={"express"} />
          <Skills percentage={35} icon={"mysql"} />
          <Skills percentage={25} icon={"mongodb"} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SkillSection;
