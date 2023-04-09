import React from "react";

const SocialIcons = ({ link, keyword }) => {
  return (
    <React.Fragment>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div
          className="group mx-2 rounded-md bg-slate-900 p-2 duration-200 ease-in hover:-translate-y-2 
          hover:scale-125 hover:bg-emerald-600 dark:bg-slate-50 dark:hover:bg-emerald-600"
        >
          <img
            src={`https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/${keyword}.svg`}
            alt={keyword}
            className="w-[1.2rem] invert group-hover:invert dark:filter-none sm:w-[1.5rem]"
          />
        </div>
      </a>
    </React.Fragment>
  );
};

export default SocialIcons;
