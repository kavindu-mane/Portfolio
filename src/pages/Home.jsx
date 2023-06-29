import React, { lazy } from "react";
import SkillSection from "../components/SkillSection/SkillSection";
const Header = lazy(() => import("../components/HeaderAndFooter/Header"));
const Footer = lazy(() => import("../components/HeaderAndFooter/Footer"));
const Gradient = lazy(() => import("../components/Common/Gradient"));
const IntroSection = lazy(() =>
  import("../components/IntroSection/IntroSection")
);
const NavigationIsland = lazy(() =>
  import("../components/Common/NavigationIslad")
);
const ProjectSection = lazy(() =>
  import("../components/Projects/ProjectSection")
);

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Gradient />
      <IntroSection />
      <NavigationIsland />
      <SkillSection />
      <ProjectSection />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
