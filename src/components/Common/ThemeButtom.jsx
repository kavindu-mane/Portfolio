import React, { useState } from "react";

const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
let timeOut;

const themeBtnClick = () => {
  document.getElementById("theme-btn").classList.add("-translate-x-11");
  document
    .getElementById("theme-setting-btn")
    .classList.remove("-translate-x-11");
  themeRestore();
};

const themeRestore = () => {
  timeOut = setTimeout(() => { 
  const themeClasses = document.getElementById("theme-btn").classList;
  if (themeClasses.contains("-translate-x-11")) {
    themeClasses.remove("-translate-x-11");
    document
      .getElementById("theme-setting-btn")
      .classList.add("-translate-x-11");
  }
} , 10000);
};

const themeSet = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && darkQuery.matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const themeSettingBtnClick = (choice, setCurrentTheme) => {
  document.getElementById("theme-setting-btn").classList.add("-translate-x-11");
  document.getElementById("theme-btn").classList.remove("-translate-x-11");

  if (choice === "flare") {
    localStorage.theme = "light";
    setCurrentTheme("flare");
  } else if (choice === "dark_mode") {
    localStorage.theme = "dark";
    setCurrentTheme("dark_mode");
  } else {
    localStorage.removeItem("theme");
    setCurrentTheme("computer");
  }

  clearTimeout(timeOut);
  themeSet();
};

const selectedTheme = (theme, currentTheme) => {
  return currentTheme === theme
    ? " bg-orange-500 rounded-md"
    : " dark:text-slate-800";
};

darkQuery.addEventListener("change", () => themeSet()); // for browser default theme changes

const ThemeButton = () => {
  const [currentTheme, setCurrentTheme] = useState(
    !("theme" in localStorage)
      ? "computer"
      : localStorage.theme === "dark"
      ? "dark_mode"
      : "flare"
  );
  const returnIconSpan = (icon) => {
    return (
      <span
        className={
          "remove-highlight material-symbols-outlined cursor-pointer p-1 text-slate-100" +
          selectedTheme(icon, currentTheme)
        }
        onClick={() => themeSettingBtnClick(icon, setCurrentTheme)}
      >
        {icon}
      </span>
    );
  };

  themeSet(); // set theme in loading

  return (
    <React.Fragment>
      <div
        className="remove-highlight fixed bottom-28 left-0 z-50 flex h-10 w-11 cursor-pointer items-center
            rounded-r-full bg-slate-800 ps-2 drop-shadow-md duration-300 ease-in dark:bg-slate-100 "
        id="theme-btn"
        onClick={() => themeBtnClick()}
      >
        <span className="material-symbols-outlined text-slate-100 dark:text-slate-800">
          {currentTheme}
        </span>
      </div>

      <div
        className="fixed bottom-17 left-0 z-50 flex h-32 w-11 -translate-x-11 flex-col justify-between rounded-r-xl bg-slate-800
            py-1 pe-2 ps-1 drop-shadow-2xl duration-300 ease-in dark:bg-slate-100"
        id="theme-setting-btn"
      >
        {returnIconSpan("flare")}
        {returnIconSpan("computer")}
        {returnIconSpan("dark_mode")}
      </div>
    </React.Fragment>
  );
};

export default ThemeButton;
