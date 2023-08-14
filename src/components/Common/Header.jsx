import React, { useState, useEffect } from "react";
import { MdDarkMode, MdComputer, MdSunny } from "react-icons/md";
import { Dropdown } from "flowbite-react";
import ThemeSwitcher from "../../data/ThemeSwitcher"

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
  useEffect(() => {ThemeSwitcher()}, [currentTheme]);

  return (
    <React.Fragment>
      <div className="flex items-center justify-between px-5 pt-4 lg:px-10 w-full">
        {/* logo */}
        <a
          href="/"
          className="font-belanosima text-2xl text-slate-800/80 dark:text-white/70 md:text-3xl"
        >
          <span className="text-primary-green">K</span>avindu&ensp;
          <span className="text-primary-green">M</span>anahara
        </a>

        {/* theme button */}
        <div className="dark:bg-sky-500 bg-sky-700 p-2 rounded-lg text-white">
          <Dropdown
            label={themeIcons[currentTheme]}
            placement="bottom"
            size="xs"
            inline
            arrowIcon={false}
          >
            <Dropdown.Item
              onClick={() => {
                setCurrentTheme("dark");
                localStorage.theme = "dark";
              }}
            >
              {themeIcons.dark} &emsp;Dark
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCurrentTheme("light");
                localStorage.theme = "light";
              }}
            >
              {themeIcons.light} &emsp;Light
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCurrentTheme("default");
                localStorage.removeItem("theme");
              }}
            >
              {themeIcons.default} &emsp;Default
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
