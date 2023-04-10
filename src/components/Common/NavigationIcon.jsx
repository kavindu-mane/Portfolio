import React from "react";

const setCurrentPage = (value) => {
  const url = window.location.href;
  return url.split("/").pop() === value
    ? " bg-orange-500 rounded-md"
    : " dark:text-slate-800";
};

const NavigationIcon = ({ link, icon, text }) => {
  return (
    <span
      className={
        "remove-highlight material-symbols-outlined cursor-pointer p-1 text-slate-100" +
        setCurrentPage(text)
      }
      onClick={() => window.open(link, "_self")}
    >
      {icon}
    </span>
  );
};

export default NavigationIcon;
