import { Card } from "flowbite-react";
import React from "react";
import { CircularProgressBar } from "react-percentage-bar";

const Skills = ({ icon, percentage , logo}) => {
  return (
    <React.Fragment>
      <Card className="mx-5 my-5 w-80 bg-white shadow-xl drop-shadow-xl duration-300 ease-in hover:bg-teal-100 dark:bg-gray-900 dark:hover:bg-gray-800">
        <div className="flex flex-col items-center justify-center">
          <CircularProgressBar
            percentage={percentage}
            showPercentage={false}
            color={["#fc2947", "#7149c6"]}
            trackColor={"#cbd5e120"}
          >
            {logo}
          </CircularProgressBar>
        </div>
        <p className="text-center font-bold text-slate-900 dark:text-slate-100">
          {icon.toUpperCase()}
        </p>
      </Card>
    </React.Fragment>
  );
};

export default Skills;
