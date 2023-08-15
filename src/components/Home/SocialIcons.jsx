import React, { lazy } from "react";
const SocialIcon = lazy(() => import("./SocialIcon"));

const SocialIcons = () => {
  const socilaList = {
    facebook: "https://facebook.com/mane.on.fb",
    instagram: "https://instagram.com/kavindu_m_wanniarachchi",
    twitter: "https://twitter.com/kavindu_mane",
    github: "https://github.com/kavindu-mane",
    linkedin: "https://www.linkedin.com/in/kavindu-wanniarachchi",
  };
  return (
    <div>
      <div className="mt-10 flex">
        {Object.keys(socilaList).map((key ,i) => {
          return <SocialIcon icon={key} link={socilaList[key]} key={i} />;
        })}
      </div>
      
    </div>
  );
};

export default SocialIcons;
