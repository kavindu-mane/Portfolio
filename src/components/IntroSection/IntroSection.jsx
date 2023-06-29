import React, { lazy, Suspense } from "react";
import myImage from "../../resources/my-image.jpg";
import IntroBkg from "../../resources/into-bkg.svg";
import { Card } from "flowbite-react";
const TypingText = lazy(() => import("./TypingText"));
const SocialIcons = lazy(() => import("../Common/SocialIcons"));
const DownloadBtn = lazy(() => import("../Common/DownloadBtn"));

const IntroSection = () => {
  const socilaList = {
    facebook: "https://facebook.com/mane.on.fb",
    instagram: "https://instagram.com/kavindu_m_wanniarachchi",
    twitter: "https://twitter.com/kavindu_mane",
    github: "https://github.com/kavindu-mane",
    linkedin: "https://www.linkedin.com/in/kavindu-wanniarachchi",
  };
  return (
    <React.Fragment>
      <Suspense
        fallback={
          <p className="flex h-screen items-center justify-center text-lg italic">
            Loading please wait...
          </p>
        }
      >
        <div
          className="mb-10 grid h-auto min-h-screen grid-cols-1 justify-center overflow-hidden px-10 pb-8 pt-28 lg:grid-cols-2"
          style={{
            backgroundImage: `url(${IntroBkg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="flex items-center justify-center lg:me-32 lg:justify-end lg:pb-20">
            <img
              src={myImage}
              alt="my-pic"
              className="mb-10 h-[200px] w-[200px] animate-profileBorder rounded-full border-2 sm:mb-20 sm:h-[300px] sm:w-[300px] lg:mb-0"
            />
          </div>

          <div className="flex flex-col items-center justify-start lg:items-start lg:justify-center lg:pb-20">
            <h1 className="font-belleza text-2xl sm:text-3xl md:text-4xl">
              Kavindu&ensp;Manahara
            </h1>

            <TypingText />
            <div className="mt-10 flex justify-center">
              {Object.keys(socilaList).map((key, i) => {
                return (
                  <SocialIcons keyword={key} link={socilaList[key]} key={i} />
                );
              })}
            </div>
            <div className="mt-10 flex sm:hidden">
              <DownloadBtn />
            </div>
          </div>
        </div>
      </Suspense>
    </React.Fragment>
  );
};

export default IntroSection;
