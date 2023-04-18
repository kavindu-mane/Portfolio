import React, { lazy, Suspense } from "react";
import myImage from "../../resources/my-image.jpg";
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
        <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden py-14">
          <img
            src={myImage}
            alt="my-pic"
            className="mb-10 h-[200px] w-[200px] animate-profileBorder rounded-full border-2 sm:mb-20 sm:h-[300px] sm:w-[300px]"
          />

          <h1 className="font-satisfy text-2xl sm:text-3xl md:text-4xl">
            Kavindu&ensp;Manahara
          </h1>

          <TypingText />
          <div className="mt-10 flex w-full justify-center">
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
      </Suspense>
    </React.Fragment>
  );
};

export default IntroSection;
