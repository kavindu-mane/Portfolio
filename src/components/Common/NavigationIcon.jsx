import React from "react";

const setCurrentPage = (value) => {
  const url = window.location.href;
  return (url.split("/").pop() === value)
    ? " bg-orange-500 rounded-md"
    : " dark:text-slate-800";
};

const NavigationIcon = ({link, icon , text}) => {
  return (
    <React.Fragment>
      <span
        className={"material-symbols-outlined cursor-pointer p-1 font-bold text-slate-100" + setCurrentPage(text)}
        onClick={() => window.open(link, "_self")}
      >
        {icon}
      </span>
    </React.Fragment>
  );
};

export default NavigationIcon;
