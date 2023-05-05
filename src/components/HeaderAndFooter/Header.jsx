import React from "react";
import DownloadBtn from "../Common/DownloadBtn";

const Header = () => {
  return (
    <React.Fragment>
      <div className="fixed left-0 right-0 top-0 z-50 flex justify-between border-b border-slate-900/10 px-2 py-2 backdrop-blur-3xl dark:border-slate-50/[0.06] md:px-8 md:py-4">
        <a className="text-default ms-2 font-satisfy text-xl font-bold md:text-2xl" href="/">
          <span className="dark:emerald-400 text-emerald-500">K</span>
          avindu&ensp;
          <span className="dark:emerald-400 text-emerald-500">M</span>anahara
        </a>
        <div className="hidden sm:flex">
          <DownloadBtn />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
