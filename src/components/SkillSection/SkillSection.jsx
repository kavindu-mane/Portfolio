import React, { lazy } from "react";
import * as SiIcon from "react-icons/si";
import { FaJava } from "react-icons/fa";
const Skills = lazy(() => import("./Skills"));
const Titles = lazy(() => import("../Common/Titles"));

const SkillSection = () => {
  return (
    <React.Fragment>
      <div className="relative flex flex-col items-center pt-20" id="skills">
        <Titles title={"Skills"} />
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          <Skills
            percentage={70}
            icon={"html5"}
            logo={<SiIcon.SiHtml5 className="relative h-12 w-12" />}
          />
          <Skills
            percentage={60}
            icon={"css3"}
            logo={<SiIcon.SiCss3 className="relative h-12 w-12" />}
          />
          <Skills
            percentage={50}
            icon={"java"}
            logo={<FaJava className="relative h-12 w-12" />}
          />
          <Skills
            percentage={55}
            icon={"javascript"}
            logo={<SiIcon.SiJavascript className="relative h-12 w-12" />}
          />
          <Skills
            percentage={40}
            icon={"php"}
            logo={<SiIcon.SiPhp className="relative h-12 w-12" />}
          />
          <Skills
            percentage={60}
            icon={"bootstrap"}
            logo={<SiIcon.SiBootstrap className="relative h-12 w-12" />}
          />
          <Skills
            percentage={70}
            icon={"tailwindcss"}
            logo={<SiIcon.SiTailwindcss className="relative h-12 w-12" />}
          />
          <Skills
            percentage={30}
            icon={"nodejs"}
            logo={<SiIcon.SiNodedotjs className="relative h-12 w-12" />}
          />
          <Skills
            percentage={75}
            icon={"react"}
            logo={<SiIcon.SiReact className="relative h-12 w-12" />}
          />
          <Skills
            percentage={30}
            icon={"express"}
            logo={<SiIcon.SiExpress className="relative h-12 w-12" />}
          />
          <Skills
            percentage={35}
            icon={"mysql"}
            logo={<SiIcon.SiMysql className="relative h-12 w-12" />}
          />
          <Skills
            percentage={25}
            icon={"mongodb"}
            logo={<SiIcon.SiMongodb className="relative h-12 w-12" />}
          />
        </div>
        {/* <div className="absolute h-full w-full -z-30">
          
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default SkillSection;
