import React, { lazy } from "react";
import rpb from "./ReactProgressBar/favicon.ico";
const Titles = lazy(() => import("../Common/Titles"));
const DetailsCard = lazy(() => import("./DetailsCard"));

const ProjectSection = () => {
  return (
    <React.Fragment>
      <div
        className="mt-10 flex flex-col items-center bg-amber-400 pb-32 pt-20 dark:bg-slate-950"
        id="projects"
      >
        <Titles title={"Projects"} />
        <div className="py-15 mx-2 grid justify-items-center gap-4 sm:mx-5 md:mx-8 lg:grid-cols-2">
          <DetailsCard
            imgLink={"https://createme.kavindu.me/logo192.png"}
            name={"CreateME"}
            description={
              "Create Amazing GitHub Profile README Without Coding.Show your skills, experience and projects and many more. Generate markdown for your profile with just a few clicks!"
            }
            link={"https://createme.kavindu.me/"}
            githubLink={"https://github.com/kavindu-mane/CreateME"}
            technologies={["react", "bootstrap", "css3"]}
          />

          <DetailsCard
            imgLink={rpb}
            name={"React Percentage Bar"}
            description={
              "React Percentage Bar is more Customizable Circular and Linear percentage progress bar package for react apps."
            }
            link={"https://kavindu.me/projects/react-percentage-bar"}
            githubLink={"https://github.com/kavindu-mane/react-percentage-bar/"}
            technologies={["react", "css3", "npm"]}
          />

          <DetailsCard
            imgLink={"https://www.ieeeopendayuwu.tech/favicon.ico"}
            name={"IEEE Openday UWU 2023 Website"}
            description={
              "Uva Wellassa University IEEE Openday 2023 official website. This website help to get an idea about IEEE and register event for undergraduates."
            }
            link={"https://www.ieeeopendayuwu.tech"}
            githubLink={"https://github.com/SasanDilantha/IEEE_Openday_2023"}
            technologies={["react", "tailwindcss", "google-sheets"]}
          />

          <DetailsCard
            imgLink={"https://www.kavindu.me/favicon.ico"}
            name={"Github Visitors Counter"}
            description={
              "Github Visitors Counter is couter that calculate github profile viwers and show that value as badge."
            }
            link={"https://github.com/kavindu-mane/Visitors-Counter"}
            githubLink={"https://github.com/kavindu-mane/Visitors-Counter"}
            technologies={["mongodb", "express"]}
          />

          <div className="lg:col-span-2">
            <DetailsCard
              imgLink={"https://www.kavindu.me/favicon.ico"}
              name={"WhatsSender"}
              description={
                "WhatsSender is a android app for open WhatsApp chat non-contacts phone numbers. Also this app support WhatsApp , WhatsApp Business and other modified versions."
              }
              link={"https://github.com/kavindu-mane/WhatsSender"}
              githubLink={"https://github.com/kavindu-mane/WhatsSender"}
              technologies={["android", "openjdk"]}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectSection;
