import React from "react";
import { useLocation } from "react-router-dom";
import { Tooltip } from "flowbite-react";
import { HiHome, HiCode } from "react-icons/hi";
import { BsFillSendFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";

const NavigationIsland = () => {
  const location = useLocation().pathname;

  const titleCase = (text) => text[0].toUpperCase() + text.substring(1);

  const navigationIcon = (link, icon) => {
    const id = "btn-navigation-" + link;
    return (
      <Tooltip
        key={"key" + link}
        content={link === "" ? "Home" : titleCase(link)}
      >
        <a data-tip="React-Tooltip" href={"/" + link} aria-label={id}>
          <span
            id={id}
            className={
              "remove-highlight relative mx-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md p-1 text-[22px] text-slate-100 duration-300 ease-in hover:bg-sky-500 dark:text-slate-900 dark:hover:text-slate-100 " +
              (link === location.substring(1)
                ? "bg-sky-600 dark:text-white"
                : "")
            }
          >
            {icon}
          </span>
        </a>
      </Tooltip>
    );
  };

  const pages = [
    {
      icon: <HiHome />,
      link: "",
    },
    {
      icon: <HiCode />,
      link: "skills",
    },
    {
      icon: <MdWork />,
      link: "projects",
    },
    // {
    //   icon: <MdFeedback />,
    //   link: "feedback",
    // },
    {
      icon: <BsFillSendFill />,
      link: "contact",
    },
  ];

  return (
    <React.Fragment>
      <div
        data-tooltip-target="tooltip-default"
        className="fixed bottom-16 left-1/2 z-50 flex -translate-x-1/2
      justify-between rounded-full bg-slate-800 px-3 py-2 shadow-xl drop-shadow-xl dark:bg-slate-100"
      >
        {pages.map((page) => {
          return navigationIcon(page.link, page.icon);
        })}
      </div>
    </React.Fragment>
  );
};

export default NavigationIsland;
