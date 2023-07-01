import React from "react";
import IntroImg from "../../resources/intro-bg.svg";

const IntroBg = () => {
  return (
    <React.Fragment>
      <img
        src={IntroImg}
        alt="intro background"
        className="absolute top-0 -z-50 h-screen object-cover lg:h-auto lg:w-screen"
      />
    </React.Fragment>
  );
};

export default IntroBg;
