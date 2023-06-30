import React, { lazy } from "react";
import myImage from "../../resources/my-image.jpg";
import { Card } from "flowbite-react";
import IntroBg from "../../resources/intro-bg.svg";
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
      <div
        className="mb-10 flex h-auto min-h-screen items-center justify-center overflow-hidden pb-8 pt-28"
        style={{
          backgroundImage: `url(${IntroBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          fill:"red"
        }}
      >
        <Card className="h-fit min-w-[18rem] sm:w-[25rem] md:w-[35rem] lg:w-[62rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex items-center justify-center lg:me-32 lg:justify-end lg:pb-20">
              <img
                src={myImage}
                alt="my-pic"
                className="mb-10 h-[200px] w-[200px] animate-profileBorder rounded-full border-2 sm:my-20 sm:h-[250px] sm:w-[250px] lg:mb-0"
              />
            </div>

            <div className="flex flex-col items-center justify-start lg:items-start lg:justify-center lg:py-20">
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
        </Card>
      </div>
    </React.Fragment>
  );
};

export default IntroSection;
