import React, { useState, useEffect } from "react";
import { MdDarkMode, MdComputer, MdSunny } from "react-icons/md";
import ThemeSwitcher from "../../data/ThemeSwitcher";

// theme icons
const themeIcons = {
  dark: <MdDarkMode className="h-5 w-5" />,
  light: <MdSunny className="h-5 w-5" />,
  default: <MdComputer className="h-5 w-5" />,
};

const Header = () => {
  // theme status
  const [currentTheme, setCurrentTheme] = useState(
    !("theme" in localStorage)
      ? "default"
      : localStorage.theme === "dark"
      ? "dark"
      : "light"
  );

  // theme changers
  useEffect(() => {
    ThemeSwitcher();
  }, [currentTheme]);

  const themeChenger = () => {
    if (currentTheme === "default") {
      localStorage.setItem("theme", "dark");
      setCurrentTheme("dark");
    } else if (currentTheme === "dark") {
      localStorage.setItem("theme", "light");
      setCurrentTheme("light");
    } else {
      localStorage.removeItem("theme");
      setCurrentTheme("default");
    }
  };

  return (
    <React.Fragment>
      <div className="flex w-full items-center justify-between px-5 pt-4 lg:px-10">
        {/* logo */}
        <a
          href="/"
          className="font-belanosima text-2xl text-slate-800/80 dark:text-white/70 md:text-3xl"
        >
          <span className="text-primary-green">K</span>avindu&ensp;
          <span className="text-primary-green">M</span>anahara
        </a>

        {/* theme button */}
        <div
          onClick={themeChenger}
          className="cursor-pointer rounded-lg bg-sky-700 p-2 text-white dark:bg-sky-500"
        >
          {themeIcons[currentTheme]}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
