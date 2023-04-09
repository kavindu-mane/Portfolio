import React from "react";
import NavigationIcon from "./NavigationIcon";

const navigationBtnClick = () => {
  document.getElementById("nav-btn").classList.add("translate-x-11");
  document.getElementById("nav-select-btn").classList.remove("translate-x-11");
  navigationRestore();
};

const navigationRestore = () => {
  setTimeout(() => {
    const navClasses = document.getElementById("nav-btn").classList;
    if (navClasses.contains("translate-x-11")) {
      navClasses.remove("translate-x-11");
      document.getElementById("nav-select-btn").classList.add("translate-x-11");
    }
  }, 10000);
};

const NavigationIsland = () => {
  const pages = [
    {
      icon: "home",
      link: "/",
      text: "",
    },
    {
      icon: "code",
      link: "/skills",
      text: "skills",
    },
    {
      icon: "work",
      link: "/projects",
      text: "projects",
    },
    {
      icon: "info",
      link: "/about",
      text: "about",
    },
    {
      icon: "send",
      link: "/contact",
      text: "contact",
    },
  ];

  return (
    <React.Fragment>
      <div
        className="fixed bottom-28 right-0 z-50 flex h-10 w-11 cursor-pointer items-center rounded-l-full
            bg-slate-800 pe-2 justify-end drop-shadow-md duration-300 ease-in dark:bg-slate-100"
        id="nav-btn"
        onClick={() => navigationBtnClick()}
      >
        <span className="material-symbols-outlined text-slate-100 dark:text-slate-800">
          {"home"}
        </span>
      </div>

      <div
        className="fixed bottom-7 right-0 z-50 flex h-52 w-11 translate-x-11 flex-col justify-between rounded-l-xl
      bg-slate-800 py-1 pe-1 ps-2 drop-shadow-2xl duration-300 ease-in dark:bg-slate-100"
        id="nav-select-btn"
      >
        {pages.map((page) => {
          return (
            <NavigationIcon
              icon={page.icon}
              link={page.link}
              text={page.text}
              key={page.icon}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default NavigationIsland;
