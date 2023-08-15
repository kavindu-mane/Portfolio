import React, { lazy } from "react";
import { PiHexagonLight } from "react-icons/pi";
import ProjectData from "../data/ProjectData";
import images from "../data/ImageLoader";
const NavigationIsland = lazy(() =>
  import("../components/Common/NavigationIslad")
);
const Header = lazy(() => import("../components/Common/Header"));
const Footer = lazy(() => import("../components/Common/Footer"));
const Gradient = lazy(() => import("../components/Common/Gradient"));
const GradientBottom = lazy(() =>
  import("../components/Common/GradientBottom")
);
const Titles = lazy(() => import("../components/Common/Titles"));
const DetailsCard = lazy(() => import("../components/Projects/DetailsCard"));

const Projects = () => {
  return (
    <React.Fragment>
      <div className="relative flex h-auto min-h-screen flex-col justify-between overflow-hidden">
        <div className="">
          {/* header */}
          <Header />
          {/* title */}
          <Titles titleStart={"My"} titleEnd={"Projects"} />
        </div>
        {/* content area */}
        <div className="flex flex-wrap justify-center gap-10 px-10 pb-28 pt-16">
          {ProjectData.map((project, key) => {
            return (
              <DetailsCard
                key={key}
                title={project.title}
                image={images[project.image]}
                description={project.description}
                techStack={project.techStack}
                githubLink={project.githubLink}
                demoActive={project.demoActive}
                demoLink={project.demoLink}
              />
            );
          })}
        </div>
        {/* top gradient */}
        <Gradient />
        {/* navigation island */}
        <NavigationIsland />
        {/* botom gradient efferc */}
        <GradientBottom />
        {/* footer */}
        <Footer />
        {/* hexagens */}
        <PiHexagonLight className="absolute bottom-2 end-3 -z-50 h-60 w-60 text-primary-green opacity-30 dark:opacity-10" />
        <PiHexagonLight className="absolute bottom-60 end-40 -z-50 h-40 w-40 text-primary-green opacity-30 dark:opacity-10" />
        <PiHexagonLight className="absolute bottom-40 end-80 -z-50 h-20 w-20 text-primary-green opacity-30 dark:opacity-10" />
      </div>
    </React.Fragment>
  );
};

export default Projects;
