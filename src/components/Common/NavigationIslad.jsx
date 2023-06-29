import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Tooltip } from "flowbite-react";

const NavigationIsland = () => {
  const location = useLocation().hash;
  const [prevActive, setPrevActive] = useState(
    "btn-navigation-" + (location === "" ? "" : location.substring(1))
  );

  const titleCase = (text) => {
    return text[0].toUpperCase() + text.substring(1);
  };

  const navigationIcon = (link, icon) => {
    const id = "btn-navigation-" + link.substring(1);
    return (
      <Tooltip
        key={icon}
        content={
          link.substring(1) === "" ? "Home" : titleCase(link.substring(1))
        }
      >
        <a
          data-tip="React-Tooltip"
          href={link}
          className={
            "remove-highlight material-symbols-outlined mx-2 cursor-pointer rounded-md p-1 text-slate-100 duration-300 ease-in hover:bg-sky-500 dark:text-slate-900 dark:hover:text-slate-100"
          }
          id={id}
        >
          {icon}
        </a>
      </Tooltip>
    );
  };

  const pages = [
    {
      icon: "home",
      link: "/",
    },
    {
      icon: "code",
      link: "#skills",
    },
    {
      icon: "work",
      link: "#projects",
    },
    {
      icon: "info",
      link: "#about",
    },
    {
      icon: "send",
      link: "#contact",
    },
  ];

  useEffect(() => {
    const id =
      "btn-navigation-" + (location === "" ? "" : location.substring(1));
    const current = document.getElementById(id).classList;
    const prev = document.getElementById(prevActive).classList;
    current.add("bg-sky-600");
    current.remove("dark:text-slate-900");
    if (id !== prevActive) {
      prev.remove("bg-sky-600");
      prev.add("dark:text-slate-900");
      setPrevActive(id);
    }
  }, [location , prevActive]);

  return (
    <React.Fragment>
      <div
        data-tooltip-target="tooltip-default"
        className="fixed bottom-16 left-1/2 z-50 flex -translate-x-1/2
      justify-between rounded-full bg-slate-800 px-4 py-2 shadow-xl drop-shadow-xl dark:bg-slate-100"
      >
        {pages.map((page) => {
          return navigationIcon(page.link, page.icon);
        })}
      </div>
    </React.Fragment>
  );
};

export default NavigationIsland;
