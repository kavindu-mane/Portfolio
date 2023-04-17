import React from 'react'
import BasicPageStructure from '../BasicPageStructure/BasicPageStructure';
import DetailsCard from './DetailsCard';
import rpb from "./ReactProgressBar/favicon.ico"

const Base = () => {
    return (
      <React.Fragment>
        <BasicPageStructure>
          <div className="mx-2 my-32 grid gap-4 lg:grid-cols-2 justify-items-center sm:mx-5 md:mx-8">
            <DetailsCard
              imgLink={"https://createme.kavindu.me/logo192.png"}
              name={"CreateME"}
              description={
                "Create Amazing GitHub Profile README Without Coding.Show your skills, experience and projects and many more. Generate markdown for your profile with just a few clicks!"
              }
              link={"https://createme.kavindu.me/"}
              githubLink={"https://github.com/kavindu-mane/CreateME"}
            />

            <DetailsCard
              imgLink={rpb}
              name={"React Percentage Bar"}
              description={
                "React Percentage Bar is more Customizable Circular and Linear percentage progress bar for react apps."
              }
              link={"http://kavindu.me/projects/react-percentage-bar"}
              githubLink={
                "https://github.com/kavindu-mane/react-percentage-bar/"
              }
            />
          </div>
        </BasicPageStructure>
      </React.Fragment>
    );
}
 
export default Base;