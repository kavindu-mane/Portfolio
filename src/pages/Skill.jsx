import React, { lazy } from "react";
import { PiHexagonLight } from "react-icons/pi";
const SkillItems = lazy(() => import("../components/Skill/SkillItems"));
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

const Skill = () => {
  return (
    <React.Fragment>
      <div
        className="relative flex h-auto min-h-screen flex-col justify-between overflow-hidden"
      >
        <div className="">
          {/* header */}
          <Header />
          {/* title */}
          <Titles titleStart={"My Tech"} titleEnd={"Stack"} />
        </div>
        {/* content area */}
        <div className="flex flex-col items-center justify-center px-10 pb-28">
          <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            <SkillItems text={"html"} iconPattern={[1, 1, 1, 1, 0]} />
            <SkillItems text={"css"} iconPattern={[1, 1, 1, 1, 0]} />
            <SkillItems text={"java"} iconPattern={[1, 1, 1, 0, 0]} />
            <SkillItems text={"c"} iconPattern={[1, 1, 1, 0, 0]} />
            <SkillItems text={"php"} iconPattern={[1, 1, 0, 0, 0]} />
            <SkillItems text={"javascript"} iconPattern={[1, 1, 1, 1, 0]} />
            <SkillItems text={"mysql"} iconPattern={[1, 1, 0, 0, 0]} />
            <SkillItems text={"mongodb"} iconPattern={[1, 1, 0, 0, 0]} />
            <SkillItems text={"node.js"} iconPattern={[1, 1, 1, 0, 0]} />
            <SkillItems text={"react"} iconPattern={[1, 1, 1, 1, 0]} />
            <SkillItems text={"tailwind"} iconPattern={[1, 1, 1, 1, 0]} />
            <SkillItems text={"bootrstrap"} iconPattern={[1, 1, 1, 0, 0]} />
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-10 sm:flex-row">
            <SkillItems text={"express"} iconPattern={[1, 1, 0, 0, 0]} />
            <SkillItems text={"figma"} iconPattern={[1, 1, 1, 0, 0]} />
          </div>
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

export default Skill;
