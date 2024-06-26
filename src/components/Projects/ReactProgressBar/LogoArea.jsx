import React from "react";
import { CircularProgressBar } from "react-percentage-bar";
import { LinearProgressBar } from "react-percentage-bar";

const LogoArea = () => {
  return (
    <React.Fragment>
      <div
        className="items-center flex h-40 w-screen flex-col justify-center 
        bg-gradient-to-r from-rose-700 to-purple-900 sm:h-60"
      >
        <div className="flex scale-50 flex-col items-center sm:scale-75">
          <CircularProgressBar
            styles="separators"
            antiClockWise={true}
            roundLineCap={false}
            percentage={70}
            shadow={false}
            loopCount={Infinity}
            reverseDelay={800}
            trackColor={"transparent"}
            color={"white"}
            percentageStyle={{
              color: "white",
              fontSize: "1.5rem",
              fontWeight: "600",
            }}
          />
          <h1 className="mt-6 font-kurale text-4xl font-bold text-white">
            React Percentage Bar
          </h1>
          <LinearProgressBar
            showPercentage={false}
            height={"0.2rem"}
            percentage={100}
            roundLineCap={false}
            trackColor={"transparent"}
            duration={3000}
            color={"white"}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default LogoArea;
