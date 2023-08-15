import React from "react";
import { BsHexagonFill } from "react-icons/bs";

const SkillItems = ({ text, iconPattern }) => {
  return (
    <React.Fragment>
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        className="flex flex-col items-center px-4 py-3 sm:items-start"
      >
        <h1 className="font-Poppins text-2xl font-semibold tracking-widest text-slate-700 dark:text-white">
          {text.toUpperCase()}
        </h1>
        <div className="mt-2 flex gap-2 text-xl">
          {iconPattern.map((i, key) => {
            if (i === 1)
              return (
                <BsHexagonFill
                  className="relative text-primary-green"
                  key={key}
                />
              );
            return (
              <BsHexagonFill
                className="relative text-slate-900/20 dark:text-white/40"
                key={key}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SkillItems;
