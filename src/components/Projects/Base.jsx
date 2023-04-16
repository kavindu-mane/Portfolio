import React from 'react'
import BasicPageStructure from '../BasicPageStructure/BasicPageStructure';
import Card from './Card';
import rpb from "./ReactProgressBar/favicon.ico"


const Base = () => {
    return (
      <React.Fragment>
        <BasicPageStructure>
          <div className="mx-2 my-20 grid gap-4 md:grid-cols-2 justify-items-center">
            <Card
              imgLink={"https://createme.kavindu.me/logo192.png"}
              name={"CreateME"}
              description={
                "Create Amazing GitHub Profile README Without Coding.Show your skills, experience and projects and many more. Generate markdown for your profile with just a few clicks!"
              }
              link={"https://createme.kavindu.me/"}
              githubLink={"https://github.com/kavindu-mane/CreateME"}
            />

            <Card
              imgLink={rpb}
              name={"React Percentage Bar"}
              description={
                "React Percentage Bar is more Customizable and Circular progress and percentage bar for react apps"
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