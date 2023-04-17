import React, { lazy, Suspense } from "react";
import myImage from "../../resources/my-image.webp";
const TypingText = lazy(() => import("./TypingText"));
// const myImage = lazy(() => import("../../resources/my-image.webp"));
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
        <div className="flex min-h-screen flex-col items-center justify-center py-10">
          <img
            src={myImage}
            alt="my-pic"
            className="mb-3 w-80 md:w-[450px] md:h-[450px] sm:w-96"
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
