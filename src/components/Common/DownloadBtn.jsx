import React from "react";

const DownloadBtn = () => {
  return (
    <React.Fragment>
      <a
        href="/resume.pdf"
        className="rounded-md bg-slate-600/95 px-2 py-2.5 text-white
      duration-200 ease-in hover:bg-gray-500"
      >
        Download Resume
      </a>
    </React.Fragment>
  );
};

export default DownloadBtn;
