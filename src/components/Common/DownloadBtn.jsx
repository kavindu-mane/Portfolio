import React from "react";

const DownloadBtn = () => {
  return (
    <React.Fragment>
      <a
        href="/resume.pdf"
        className="rounded-md bg-slate-900 dark:bg-white px-2 py-2.5 text-white dark:text-slate-900
      duration-200 ease-in hover:bg-gray-600 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        Download Resume
      </a>
    </React.Fragment>
  );
};

export default DownloadBtn;
