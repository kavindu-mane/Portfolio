import React, { lazy } from "react";
import ReactTypingEffect from "react-typing-effect";
import Me from "../assets/me.png";
import Matrix from "../assets/matrix.svg";

const DownloadBtn = lazy(() => import("../components/Common/DownloadBtn"));
const NavigationIsland = lazy(() =>
  import("../components/Common/NavigationIslad")
);
const SocialIcons = lazy(() => import("../components/Home/SocialIcons"));
const Header = lazy(() => import("../components/Common/Header"));
const Gradient = lazy(() => import("../components/Common/Gradient"));

const Home = () => {
  return (
    <React.Fragment>
      {/* hero section  */}
      <div className="flex h-screen min-h-[55rem] w-screen flex-col justify-between overflow-hidden">
        {/* header */}
        <Header />

        {/* image and content */}
        <div className="flex h-full w-screen justify-center px-5 lg:h-auto">
          {/* image */}
          <div className="relative hidden lg:block lg:w-3/5 xl:w-1/2">
            <img
              src={Me}
              alt="me"
              className="h-[90vh] object-cover"
              data-aos="fade-up"
            />
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
          <div className="flex h-full flex-col justify-center py-5 lg:w-2/5 xl:w-1/2">
            <div className="relative text-secondary-blue" data-aos="fade-left">
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
                      <span
                        key={i}
                        className="flex items-center text-sky-600 dark:text-sky-400"
                      >
                        {text}
                      </span>
                    );
                  }}
                />
              </div>

              {/* description text */}
              <p className="mb-7 max-w-2xl italic text-slate-900 dark:text-white">
                I am 23 years old web developer from Sri Lanka.I have front-end
                skills in JavaScript , React , Bootstrap and Tailwind CSS. As
                well as I'm currently learning PHP and Express Js as back-end
                technologies.These days I am reading for a degree in Bachelor of
                Computer Science and Technology degree program at Uva Wellassa
                University in Sri Lanka.
              </p>

              {/* download button */}
              <DownloadBtn />
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
          </div>
        </div>

        {/* top blur effect */}
        <Gradient />
        {/* navigation island */}
        <NavigationIsland />
      </div>
    </React.Fragment>
  );
};

export default Home;
