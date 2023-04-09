import React from "react";
import DownloadBtn from "../Common/DownloadBtn";

const Header = () => {
  return (
    <React.Fragment>
      <div className="fixed left-0 right-0 top-0 z-50 flex justify-between border-b border-slate-900/10 px-2 py-2 backdrop-blur-3xl dark:border-slate-50/[0.06] md:px-8 md:py-4">
        <h1 className="ms-2 font-satisfy text-xl font-bold text-default md:text-2xl">
          <span className="dark:emerald-400 text-emerald-500">K</span>
          avindu&ensp;
          <span className="dark:emerald-400 text-emerald-500">M</span>anahara
        </h1>
        <DownloadBtn />
      </div>
    </React.Fragment>
  );
};

export default Header;
