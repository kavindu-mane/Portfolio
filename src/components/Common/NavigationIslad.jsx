import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Tooltip } from "flowbite-react";
import { HiHome, HiCode } from "react-icons/hi";
import { BsFillSendFill, BsInfoCircleFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";

const NavigationIsland = () => {
  const location = useLocation().hash;
  const [prevActive, setPrevActive] = useState(
    "btn-navigation-" + (location === "" ? "" : location.substring(1))
  );

  const titleCase = (text) => {
    return text[0].toUpperCase() + text.substring(1);
  };

  const navigationIcon = (link, icon) => {
    const subLink = link.substring(1);
    const id = "btn-navigation-" + subLink;
    return (
      <Tooltip
        key={"key" + subLink}
        content={subLink === "" ? "Home" : titleCase(subLink)}
      >
        <a data-tip="React-Tooltip" href={link}>
          <div
            id={id}
            className={
              "remove-highlight relative mx-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md p-1 text-slate-100 duration-300 ease-in hover:bg-sky-500 dark:text-slate-900 dark:hover:text-slate-100"
            }
          >
            {icon}
          </div>
        </a>
      </Tooltip>
    );
  };

  const pages = [
    {
      icon: <HiHome size={22} className="relative" />,
      link: "/",
    },
    {
      icon: <HiCode size={22} className="relative" />,
      link: "#skills",
    },
    {
      icon: <MdWork size={22} className="relative" />,
      link: "#projects",
    },
    {
      icon: <BsInfoCircleFill size={22} className="relative" />,
      link: "#about",
    },
    {
      icon: <BsFillSendFill size={22} className="relative" />,
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
  }, [location, prevActive]);

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
