import React, { lazy, useState, useEffect } from "react";
// import Wave from "../resources/wave.svg";
// const IntroBg = lazy(() => import("../components/Common/IntroBg"));
// const ContactSection = lazy(() =>
//   import("../components/ContactSection/ContactSection")
// );
// const SkillSection = lazy(() =>
//   import("../components/SkillSection/SkillSection")
// );
// const AboutSection = lazy(() =>
//   import("../components/AboutSection/AboutSection")
// );
// const Header = lazy(() => import("../components/HeaderAndFooter/Header"));
// const Footer = lazy(() => import("../components/HeaderAndFooter/Footer"));
// const Gradient = lazy(() => import("../components/Common/Gradient"));
// const IntroSection = lazy(() =>
//   import("../components/IntroSection/IntroSection")
// );
// const ProjectSection = lazy(() =>
//   import("../components/Projects/ProjectSection")
// );
import { Dropdown } from "flowbite-react";
import ReactTypingEffect from "react-typing-effect";
import { MdDarkMode, MdComputer, MdSunny } from "react-icons/md";
import Me from "../assets/me.png";
import Matrix from "../assets/matrix.svg";

const NavigationIsland = lazy(() =>
  import("../components/Common/NavigationIslad")
);
const SocialIcons = lazy(() => import("../components/Homepage/SocialIcons"));

// theme icons
const themeIcons = {
  dark: <MdDarkMode className="h-5 w-5" />,
  light: <MdSunny className="h-5 w-5" />,
  default: <MdComputer className="h-5 w-5" />,
};

const Home = () => {
  // theme status
  const [currentTheme, setCurrentTheme] = useState(
    !("theme" in localStorage)
      ? "default"
      : localStorage.theme === "dark"
      ? "dark"
      : "light"
  );

  useEffect(() => {
    // theme changers
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [currentTheme]);
  return (
    <React.Fragment>
      {/* <IntroBg />
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
      </div> */}

      {/* hero section  */}
      <div className="flex min-h-screen w-screen flex-col justify-between">
        {/* header */}
        <div className="flex items-center justify-between px-8 pt-4">
          {/* logo */}
          <a
            href="/"
            className="font-belanosima text-2xl text-secondary-blue md:text-3xl"
          >
            <span className="text-primary-green">K</span>avindu&ensp;
            <span className="text-primary-green">M</span>anahara
          </a>

          {/* theme button */}
          <Dropdown
            label={themeIcons[currentTheme]}
            placement="top"
            size="xs"
            arrowIcon={false}
          >
            <Dropdown.Item
              onClick={() => {
                setCurrentTheme("dark");
                localStorage.theme = "dark";
              }}
            >
              {themeIcons.dark} &ensp;Dark
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCurrentTheme("light");
                localStorage.theme = "light";
              }}
            >
              {themeIcons.light} &ensp;Light
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCurrentTheme("default");
                localStorage.removeItem("theme");
              }}
            >
              {themeIcons.default} &ensp;Default
            </Dropdown.Item>
          </Dropdown>
        </div>

        {/* image and content */}
        <div className="flex w-screen justify-center">
          {/* image */}
          <div className="relative w-1/2">
            <img src={Me} alt="me" className="h-[90vh]" />
            {/* middle matrix */}
            <img
              src={Matrix}
              alt="lower matrix"
              className="absolute start-0 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60 dark:opacity-40"
            />
            {/* blur effect */}
            <div className="absolute start-[15%] top-1/3 -z-50 h-2/3 w-2/3 bg-primary-green opacity-60 blur-[500px] dark:opacity-30"></div>
          </div>

          {/* content */}
          <div className="flex w-1/2 flex-col justify-center">
            <div className="relative text-secondary-blue">
              {/* hello text */}
              <h4 className="my-2 text-lg uppercase tracking-widest">hello,</h4>

              {/* name text */}
              <h1 className="font-belanosima text-4xl font-bold md:text-5xl xl:text-6xl">
                I'm{" "}
                <span className=" font-outline text-transparent">
                  Kavindu Manahara
                </span>
              </h1>

              {/* position text */}
              <div className="md:text-4 mb-1 flex h-14 items-center text-3xl xl:text-4xl">
                {/* react typing effect */}
                <ReactTypingEffect
                  speed={100}
                  eraseSpeed={100}
                  typingDelay={500}
                  eraseDelay={1000}
                  text={[
                    "Undergraduate...",
                    "IT Enthusiastic...",
                    "Front-end Developer...",
                  ]}
                  displayTextRenderer={(text, i) => {
                    return (
                      <span key={i} className="flex items-center text-sky-400">
                        {text}
                      </span>
                    );
                  }}
                />
              </div>

              {/* description text */}
              <p className="mb-7 max-w-xl italic text-slate-900 dark:text-white xl:max-w-2xl">
                I am 22 years old web developer from Sri Lanka.I have front-end
                skills in JavaScript , React , Bootstrap and Tailwind CSS. As
                well as I'm currently learning PHP and Express Js as back-end
                technologies.These days I am reading for a degree in Bachelor of
                Computer Science and Technology degree program at Uva Wellassa
                University in Sri Lanka.
              </p>

              {/* download button */}
              <a
                href="/resume.pdf"
                className="rounded-md bg-orange-500 px-3 py-2.5 font-bold text-white duration-300 ease-in"
              >
                Download Resume
              </a>
              {/* social icons */}
              <SocialIcons />

              {/* upper mattrix */}
              <img
                src={Matrix}
                alt="upper mattrix"
                className="absolute -start-40 -top-40 animate-upDown opacity-40 dark:opacity-30"
              />

              {/* lower matrix */}
              <img
                src={Matrix}
                alt="lower matrix"
                className="animation-delay absolute -bottom-20 end-40 animate-upDown opacity-30 dark:opacity-20"
              />

              {/* top rotated matrix */}
              <img
                src={Matrix}
                alt="lower matrix"
                className="absolute -top-40 end-48 animate-upDownRotate opacity-30 dark:opacity-20"
              />
            </div>

            {/* top blur effect */}
            <div className="absolute -end-1/3 -top-1/4 -z-50 h-2/3 w-2/3 bg-sky-500 opacity-50 blur-[500px] dark:opacity-30"></div>
          </div>
        </div>
      </div>

      <NavigationIsland />
    </React.Fragment>
  );
};

export default Home;
