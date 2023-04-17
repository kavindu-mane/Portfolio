import React, { useState } from "react";
import { LinearProgressBar } from "react-percentage-bar";
import Card from "./Card";
import MultipleObserver from "./MultipleObserver";

const codes = {
  default: `<LinearProgressBar />`,
  stroke_color: `<LinearProgressBar  
  color={"#57C5B6"}
/>`,
  track_color: `<CircularProgressBar  
  trackColor={"#00ff0088"}
/>`,
  percentage: `<LinearProgressBar 
  percentage={90} 
/>`,
  duration: `<LinearProgressBar 
  duration={1000} 
/>`,
  text: `<LinearProgressBar 
  text={"React"}
/>`,
  show_percentage: ` <LinearProgressBar 
  showPercentage={false} 
/>`,
  text_style: `<LinearProgressBar
  text={"React"}
  textStyle={{
    fontSize:"1rem",
    color: "black",
    fontStyle: "italic",
  }}
/>`,
  animation: `<LinearProgressBar 
  animation={false} 
/>`,
  p_animation: `<LinearProgressBar 
  percentageAnimation={false} 
/>`,
  linecap: `<LinearProgressBar 
  roundLineCap={false} 
/>`,
  p_color: `LinearProgressBar 
  percentageColor={"red"} 
/>`,
  width: `<LinearProgressBar 
  width={"17rem"} 
/>`,
  height: `LinearProgressBar 
  height={"0.5rem"} 
/>`,
  position: `<LinearProgressBar 
  percentagePosition={"onright"} 
/>`,
  direction: `<LinearProgressBar 
  startDirection={"right"} 
/>`,
  example_1: `<LinearProgressBar
  width={"15rem"}
  color={["#fc2947", "#7149c6"]}
  text={"React"}
  textStyle={{
    textAlign: "center",
    fontSize: "1.3rem",
    fontStyle: "italic",
  }}
/>`,
  example_2: `<LinearProgressBar
  width={"15rem"}
  color={["#fc2947", "#7149c6"]}
  percentagePosition = {"onleft"}
  percentageColor = {"white"}
  startDirection = {"right"}
  trackColor = {"#cbcbcb"}
  text={"React"}
  textStyle={{
    textAlign: "center",
    fontSize: "1.3rem",
    fontStyle: "italic",
  }}
/>`,
  example_3: `<LinearProgressBar
  width={"15rem"}
  color={["#fc2947", "#7149c6"]}
  startDirection={"right"}
  trackColor={
    "linear-gradient(
        to left , #B6E2A1 ,#9EA1D4)"
  }
  text={"React"}
  textStyle={{
    textAlign: "left",
    fontSize: "1.3rem",
    fontStyle: "italic",
    marginLeft: "0.8rem",
    marginBottom: "0.4rem",
  }}
/>`,
};

const Linear = () => {
  const [length, setLength] = useState(1);
  return (
    <React.Fragment>
      <h1 className="mb-10 text-3xl">Basic Usage</h1>
      <div className="grid gap-4 gap-y-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <Card
          current={length}
          showVal={1}
          text={codes.default}
          title={"Default"}
        >
          <MultipleObserver>
            <LinearProgressBar width={"15rem"} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={1}
          text={codes.stroke_color}
          title={"Stroke color"}
        >
          <MultipleObserver>
            <LinearProgressBar color={"#57C5B6"} width={"15rem"} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={1}
          text={codes.track_color}
          title={"Track color"}
        >
          <MultipleObserver>
            <LinearProgressBar trackColor={"#00ff0088"} width={"15rem"} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={1}
          text={codes.percentage}
          title={"Percentage"}
        >
          <MultipleObserver>
            <LinearProgressBar percentage={90} width={"15rem"} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={1}
          text={codes.duration}
          title={"Duration"}
        >
          <MultipleObserver>
            <LinearProgressBar duration={1000} width={"15rem"} />
          </MultipleObserver>
        </Card>

        <Card current={length} showVal={1} text={codes.text} title={"Text"}>
          <MultipleObserver>
            <LinearProgressBar text={"React"} width={"15rem"} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={1}
          text={codes.show_percentage}
          title={"Percentage"}
        >
          <MultipleObserver>
            <LinearProgressBar showPercentage={false} width={"15rem"} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={1}
          text={codes.text_style}
          title={"Custom text style"}
        >
          <MultipleObserver>
            <LinearProgressBar
              text={"React"}
              textStyle={{
                fontSize: "1rem",
                color: "black",
                fontStyle: "italic",
              }}
              width={"15rem"}
            />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={1}
          text={codes.linecap}
          title={"Linecap"}
        >
          <MultipleObserver>
            <LinearProgressBar roundLineCap={false} width={"15rem"} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={1}
          text={codes.animation}
          title={"Animation"}
        >
          <MultipleObserver>
            <LinearProgressBar animation={false} width={"15rem"} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={1}
          text={codes.p_animation}
          title={"Percentage animation"}
        >
          <MultipleObserver>
            <LinearProgressBar percentageAnimation={false} width={"15rem"} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={1}
          text={codes.p_color}
          title={"Percentage color"}
        >
          <MultipleObserver>
            <LinearProgressBar percentageColor={"red"} width={"15rem"} />
          </MultipleObserver>
        </Card>

        <Card current={length} showVal={2} text={codes.width} title={"Width"}>
          <MultipleObserver>
            <LinearProgressBar width={"17rem"} />
          </MultipleObserver>
        </Card>

        <Card current={length} showVal={2} text={codes.height} title={"Height"}>
          <MultipleObserver>
            <LinearProgressBar height={"0.5rem"} width={"15rem"} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={2}
          text={codes.position}
          title={"Percentage Position"}
        >
          <MultipleObserver>
            <LinearProgressBar percentagePosition={"onright"} width={"15rem"} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={2}
          text={codes.direction}
          title={"Start Direction"}
        >
          <MultipleObserver>
            <LinearProgressBar startDirection={"right"} width={"15rem"} />
          </MultipleObserver>
        </Card>
      </div>

      <h1 className={(length >= 3 ? "block" : "hidden") + " my-10 text-3xl"}>
        Advance Usage
      </h1>
      <div className="grid gap-4 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
        <Card
          current={length}
          showVal={3}
          text={codes.example_1}
          title={"Sample - 1"}
        >
          <MultipleObserver>
            <LinearProgressBar
              width={"15rem"}
              color={["#fc2947", "#7149c6"]}
              text={"React"}
              textStyle={{
                textAlign: "center",
                fontSize: "1.3rem",
                fontStyle: "italic",
              }}
            />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={3}
          text={codes.example_2}
          title={"Sample - 2"}
        >
          <MultipleObserver>
            <LinearProgressBar
              width={"15rem"}
              color={["#fc2947", "#7149c6"]}
              percentagePosition={"onleft"}
              percentageColor={"white"}
              startDirection={"right"}
              trackColor={"#cbcbcb"}
              text={"React"}
              textStyle={{
                textAlign: "center",
                fontSize: "1.3rem",
                fontStyle: "italic",
              }}
            />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={3}
          text={codes.example_3}
          title={"Sample - 3"}
        >
          <MultipleObserver>
            <LinearProgressBar
              width={"15rem"}
              color={["#fc2947", "#7149c6"]}
              startDirection={"right"}
              trackColor={"linear-gradient(to left , #B6E2A1 ,#9EA1D4)"}
              text={"React"}
              textStyle={{
                textAlign: "left",
                fontSize: "1.3rem",
                fontStyle: "italic",
                marginLeft: "0.8rem",
                marginBottom: "0.4rem",
              }}
            />
          </MultipleObserver>
        </Card>
      </div>

      {/* add button */}
      <button
        className={
          length === 3
            ? "hidden"
            : "flex" +
              " ms-2 mt-5 h-[2.2rem] cursor-pointer items-center rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-700 px-4 text-white duration-300 ease-in hover:scale-90"
        }
        onClick={() => setLength((prev) => ++prev)}
      >
        <span className="material-symbols-outlined">add</span>
      </button>
    </React.Fragment>
  );
};

export default Linear;
