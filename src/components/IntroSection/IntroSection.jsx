import React from "react";
import TypingText from "./TypingText";
import myImage from "../../resources/my-image.webp";
import SocialIcons from "../Common/SocialIcons";
import DownloadBtn from "../Common/DownloadBtn";

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
      <div className="flex min-h-screen flex-col items-center justify-center py-10">
        <img
          src={myImage}
          alt="my-pic"
          className="mb-3 w-2/3 max-w-lg sm:w-1/2"
        />
        <h1 className="font-satisfy text-2xl sm:text-3xl md:text-4xl">
          Kavindu&ensp;Manahara
        </h1>
        <TypingText />
        <div className="mt-10 flex w-full justify-center">
          {Object.keys(socilaList).map((key, i) => {
            return <SocialIcons keyword={key} link={socilaList[key]} key={i} />;
          })}
        </div>
        <div className="mt-10 flex sm:hidden">
          <DownloadBtn />
        </div>
      </div>
    </React.Fragment>
  );
};

export default IntroSection;
