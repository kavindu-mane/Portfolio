import React, { lazy, useState, useEffect } from "react";
import { RiComputerLine, RiMoonLine, RiSunLine } from "react-icons/ri";
const DownloadBtn = lazy(() => import("../Common/DownloadBtn"));
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

const computer = () => <RiComputerLine className="relative" size={25} />;
const sun = () => <RiSunLine className="relative" size={25} />;
const moon = () => <RiMoonLine className="relative" size={25} />;

const Header = () => {
  const [currentTheme, setCurrentTheme] = useState(
    !("theme" in localStorage)
      ? "computer"
      : localStorage.theme === "dark"
      ? "dark_mode"
      : "flare"
  );

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

  const themeChnager = () => {
    if (currentTheme === "computer") {
      localStorage.theme = "dark";
      setCurrentTheme("dark_mode");
    } else if (currentTheme === "dark_mode") {
      localStorage.theme = "light";
      setCurrentTheme("flare");
    } else {
      localStorage.removeItem("theme");
      setCurrentTheme("computer");
    }
  };

  const themeIconSet = () => {
    switch (currentTheme) {
      case "dark_mode":
        return moon();
      case "flare":
        return sun();
      default:
        return computer();
    }
  };

  useEffect(() => {
    themeSet();
  });

  return (
    <React.Fragment>
      <div className="fixed left-0 right-0 top-0 z-50 flex justify-between border-b border-slate-900/10 bg-slate-100/5 px-2 py-2 backdrop-blur-3xl dark:border-slate-50/[0.06] md:px-8 md:py-4">
        <a
          className="text-default ms-2 font-belleza text-xl font-extrabold md:text-2xl"
          href="/"
        >
          <span className="dark:emerald-400 text-emerald-500">K</span>
          avindu&ensp;
          <span className="dark:emerald-400 text-emerald-500">M</span>anahara
        </a>
        <div className="flex">
          <div className="hidden sm:flex">
            <DownloadBtn />
          </div>
          <span
            className="remove-highlight mx-2 cursor-pointer rounded-md p-1 text-slate-900 hover:bg-sky-500 hover:text-slate-100 dark:text-slate-100"
            onClick={themeChnager}
          >
            {themeIconSet()}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
