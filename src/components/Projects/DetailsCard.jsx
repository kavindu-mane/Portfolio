import React from "react";
import { BiLink, BiLogoGithub } from "react-icons/bi";

const Card = ({
  imgLink,
  name,
  description,
  link,
  githubLink,
  technologies,
}) => {
  return (
    <React.Fragment>
      <div
        className="my-5 flex h-full min-w-[20rem] max-w-[40rem] flex-col justify-between rounded-lg border-[1px] border-slate-300 bg-emerald-100
       p-4 shadow-md shadow-slate-300  dark:border-slate-500 dark:bg-slate-700 dark:shadow-slate-700 "
      >
        <div className="flex items-center justify-between">
          <img
            src={imgLink}
            alt="logo"
            width={30}
            height={30}
            className="rounded-lg"
          />
          <h2 className="font-kurale text-2xl">{name}</h2>
        </div>
        <p className="mx-2 my-3 italic">{description}</p>

        <div className="flex items-center justify-between">
          <a
            href={link}
            alt={"project link"}
            target="_blank"
            rel="noreferrer"
            className="relative ms-2 flex h-[2.2rem] cursor-pointer items-center rounded-md
            bg-gradient-to-r from-fuchsia-600 to-blue-700 px-4 text-white duration-300 ease-in hover:scale-90"
          >
            <BiLink size={24} className="relative" />
          </a>
          <div className="flex">
            {technologies.map((v) => {
              return (
                <img
                  src={`https://img.shields.io/badge/-%2315720000.svg?style=for-the-badge&logo=${v}&logoColor=black`}
                  alt=""
                  className="-mx-3 h-[2.2rem] scale-125 dark:invert"
                  key={v}
                />
              );
            })}
          </div>
          <a
            className="relative flex h-[2.2rem] cursor-pointer items-center rounded-md bg-gradient-to-r
        from-fuchsia-600 to-blue-700 px-4 text-white duration-300 ease-in hover:scale-90"
            href={githubLink}
            target="_blank"
            rel="noreferrer"
          >
            <BiLogoGithub size={24} className="relative" />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
