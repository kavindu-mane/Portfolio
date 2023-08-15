import React from "react";
import { BiLink, BiLogoGithub } from "react-icons/bi";

const Card = ({
  title,
  description,
  demoActive = true,
  demoLink,
  githubLink,
  image,
  techStack,
}) => {
  return (
    <React.Fragment>
      <div
        data-aos="fade-up"
        className="group max-w-xs overflow-hidden rounded-lg bg-white font-Poppins shadow-lg drop-shadow-2xl hover:bg-zinc-100 dark:bg-zinc-700"
      >
        <div className="h-56 w-full overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt="project cover"
            className="group-hover: h-56 w-full rounded-t-lg object-cover duration-200 ease-in group-hover:scale-110"
          />
        </div>
        {/* details */}

        <div className="p-4">
          {/* top container */}
          <div className="">
            <h2 className="pb-2 font-Poppins text-xl font-semibold text-gray-700 dark:text-gray-200">
              {title}
            </h2>
            <p className="text-md italic text-gray-600 dark:text-gray-300">
              {description}
            </p>
          </div>

          {/* bottom container */}
          <div className="">
            <p className="my-3 text-sm font-semibold text-gray-600 dark:text-gray-300">
              Tech Stack : <span className="font-normal">{techStack}</span>
            </p>
            <div className="mb-2 mt-5 flex items-center justify-between">
              <a
                className={
                  "cursor-pointer text-sm hover:text-primary-green " +
                  (demoActive ? "flex" : "hidden")
                }
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLink className="me-2 h-5 w-5" />
                <span>Live Preview</span>
              </a>
              <a
                className="flex cursor-pointer text-sm hover:text-primary-green"
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View Code</span>
                <BiLogoGithub className="ms-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
