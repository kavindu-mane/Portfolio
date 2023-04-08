import React from "react";
import ReactTypingEffect from "react-typing-effect";

const TypingText = () => {
  return (
    <React.Fragment>
      <h1 className="py-1 text-center font-kurale text-2xl font-semibold text-slate-800 dark:text-white md:text-4xl ">
        I'm{" "}
        <span className="text-lime-400">
          <ReactTypingEffect
            text={["Undergraduate...", "IT Enthusiastic...", "Developer..."]}
          />
        </span>
      </h1>
    </React.Fragment>
  );
};

export default TypingText;
