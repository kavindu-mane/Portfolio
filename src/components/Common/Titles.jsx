import React from "react";

const Titles = ({ titleStart, titleEnd }) => {
  return (
    <React.Fragment>
      <h1
        data-aos="fade-down"
        data-aos-duration="800"
        className="my-10 text-center font-Poppins text-3xl font-semibold text-slate-800 dark:text-white md:text-4xl"
      >
        {titleStart}
        <span className="ms-2 text-primary-green">{titleEnd}</span>
      </h1>
    </React.Fragment>
  );
};

export default Titles;
