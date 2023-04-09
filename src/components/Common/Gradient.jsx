import React from "react";

const Gradient = () => {
  return (
    <React.Fragment>
      <div
        className="fixed -right-[24rem] -top-[24rem] -z-50 h-[48rem] w-[48rem] rounded-full bg-gradient-radial from-indigo-900 to-sky-400 
    opacity-40 blur-3xl xl:right-[-48rem] xl:top-[-48rem] xl:h-[96rem] xl:w-[96rem]"
      ></div>
    </React.Fragment>
  );
};

export default Gradient;
