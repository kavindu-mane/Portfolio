import React from "react";

const DownloadBtn = () => {
  return (
    <React.Fragment>
      <button
        className="me-2 hidden rounded-md bg-[#334155ee] px-2 py-[5px] text-white
      duration-100 ease-in hover:bg-orange-600 dark:bg-[#94a3b870] hover:dark:bg-orange-500 sm:flex"
      >
        Download Resume
      </button>
    </React.Fragment>
  );
};

export default DownloadBtn;
