import React from "react";

let timeOut;

const navigationBtnClick = () => {
  document.getElementById("nav-btn").classList.add("translate-x-11");
  document.getElementById("nav-select-btn").classList.remove("translate-x-11");
  navigationRestore();
};

const navigationRestore = () => {
  timeOut = setTimeout(() => {
    const navClasses = document.getElementById("nav-btn").classList;
    if (navClasses.contains("translate-x-11")) {
      navClasses.remove("translate-x-11");
      document.getElementById("nav-select-btn").classList.add("translate-x-11");
    }
  }, 10000);
};

const setCurrentPage = (value) => {
  const url = window.location.href;
  return url.split("/").pop() === value
    ? " bg-orange-500 rounded-md"
    : " dark:text-slate-800";
};

const navigated = (link) => {
  document.getElementById("nav-btn").classList.remove("translate-x-11");
  document.getElementById("nav-select-btn").classList.add("translate-x-11");
  clearTimeout(timeOut);
  window.open(link, "_self");
};

const navigationIcon = (link, icon, text) => {
  return (
    <span
      className={
        "remove-highlight material-symbols-outlined cursor-pointer p-1 text-slate-100" +
        setCurrentPage(text)
      }
      onClick={() => navigated(link)}
      key={icon}
    >
      {icon}
    </span>
  );
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

  const currentPage = () => {
    let currentIcon;
    const url = window.location.href;
    pages.forEach((page) => {
      if ("/" + url.split("/").pop() === page.link) {
        currentIcon = page.icon;
        return;
      }
    });

    return currentIcon;
  };

  return (
    <React.Fragment>
      <div
        className="remove-highlight fixed bottom-28 right-0 z-50 flex h-10 w-11 cursor-pointer items-center
            justify-end rounded-l-full bg-slate-800 pe-2 drop-shadow-md duration-300 ease-in dark:bg-slate-100"
        id="nav-btn"
        onClick={() => navigationBtnClick()}
      >
        <span className="material-symbols-outlined text-slate-100 dark:text-slate-800">
          {currentPage()}
        </span>
      </div>

      <div
        className="fixed bottom-7 right-0 z-50 flex h-52 w-11 translate-x-11 flex-col justify-between rounded-l-xl
      bg-slate-800 py-1 pe-1 ps-2 drop-shadow-2xl duration-300 ease-in dark:bg-slate-100"
        id="nav-select-btn"
      >
        {pages.map((page) => {
          return navigationIcon(page.link, page.icon, page.text);
        })}
      </div>
    </React.Fragment>
  );
};

export default NavigationIsland;
