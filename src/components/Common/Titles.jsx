import React from "react";

const Titles = ({ title }) => {
  return (
    <React.Fragment>
      <a
        href={"#" + title.toLowerCase()}
        className="group ms-4 pb-5 text-center text-3xl font-bold text-slate-800 dark:text-slate-100 sm:pb-8 md:text-4xl"
      >
        {title}&ensp;
        <span className="text-transparent duration-200 ease-in group-hover:text-sky-400">
          #
        </span>
      </a>
    </React.Fragment>
  );
};

export default Titles;
