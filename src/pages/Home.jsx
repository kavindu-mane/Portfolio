import React, { lazy } from "react";
import Wave from "../resources/wave.svg";
const IntroBg = lazy(() => import("../components/Common/IntroBg"));
const ContactSection = lazy(() =>
  import("../components/ContactSection/ContactSection")
);
const SkillSection = lazy(() =>
  import("../components/SkillSection/SkillSection")
);
const AboutSection = lazy(() =>
  import("../components/AboutSection/AboutSection")
);
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
      <IntroBg />
      <Header />
      <Gradient />
      <IntroSection />
      <SkillSection />

      <ProjectSection />
      <div className="relative">
        <img
          src={Wave}
          alt="wave"
          className="absolute bottom-0 -z-50 h-full object-cover opacity-70 dark:opacity-60"
        />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
      <NavigationIsland />
    </React.Fragment>
  );
};

export default Home;
