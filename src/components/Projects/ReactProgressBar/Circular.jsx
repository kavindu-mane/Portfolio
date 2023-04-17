import React, { useState, lazy } from "react";
import { CircularProgressBar } from "react-percentage-bar";
const MultipleObserver = lazy(() => import("./MultipleObserver"));
const Card = lazy(() => import("./Card"));

const codes = {
  default: `<CircularProgressBar />`,
  stroke_color: `<CircularProgressBar  
  color={"#57C5B6"}
/>`,
  track_color: `<CircularProgressBar  
  trackColor={"#00ff0088"}
/>`,
  radius: `<CircularProgressBar 
  radius={"7rem"} 
/>`,
  solid: `<CircularProgressBar 
  styles={"solid"} 
/>`,
  separators: ` <CircularProgressBar 
  styles={"separators"} 
/>`,
  pie_chart: `<CircularProgressBar 
  styles={"pie-chart"} 
/>`,
  size: `<CircularProgressBar 
  size={"0.5rem"} 
/>`,
  percentage: `<CircularProgressBar 
  percentage={90} 
/>`,
  duration: `<CircularProgressBar 
  duration={1000} 
/>`,
  start_position: `<CircularProgressBar 
  startPosition={"90"} 
/>`,
  shadow: `<CircularProgressBar 
  shadow = {true} 
/>`,
  inner_shadow: `<CircularProgressBar
  shadow={true}
  innerShadowStyle={{
    boxShadow: 
      "5px 5px 10px #4F455788",
  }}
/>`,
  outer_shadow: `<CircularProgressBar
  shadow={true}
  outerShadowStyle={{
    boxShadow: 
      "5px 5px 10px #4F455788",
  }}
/>`,
  text: `<CircularProgressBar 
  text={"React"}
/>`,
  show_percentage: ` <CircularProgressBar 
  showPercentage={false} 
/>`,
  percentage_style: ` <CircularProgressBar
  percentageStyle={{
    fontSize: "1.8rem",
    fontWeight: "600",
    color: "#22c55e",
    fontStyle:"italic",
  }}
/>`,
  text_style: `<CircularProgressBar
  text={"React"}
  textStyle={{
    fontSize:"1rem",
    color: "black",
    fontStyle: "italic",
    margin: "-5px",
  }}
/>`,
  childrens: `<CircularProgressBar 
  showPercentage={false}>
  <img
    src="https://kavindu.me/
    logo192.png"
    alt="fortpolio logo"
    style={{
      width: "3rem",
      height: "3rem",
      borderRadius: "0.2rem",
    }}
/>
</CircularProgressBar>`,
  linecap: `<CircularProgressBar 
  roundLineCap={false} 
/>`,
  animation: `<CircularProgressBar 
  animation={false} 
/>`,
  p_animation: `<CircularProgressBar 
  percentageAnimation={false} 
/>`,
  reverse: `<CircularProgressBar 
  reverse={false} 
/>`,
  r_duration: `<CircularProgressBar 
  reverseDuration={1000} 
/>`,
  loop_w_r: `<CircularProgressBar 
  loopCount={5} 
/>`,
  loop_wo_r: `<CircularProgressBar 
  loopCount={5} 
  reverse={false} 
/>`,
  start_delay: ` <CircularProgressBar 
  startDelay={1000} 
  loopCount ={5} 
/>`,
  reverse_delay: `<CircularProgressBar 
  reverseDelay={1000} 
  loopCount={5} 
/>`,
  anticlockwise: `<CircularProgressBar 
  antiClockWise={true} 
/>`,
  background: `<CircularProgressBar 
  backgroundColor={"#bbd6b8"} 
/>`,
  padding: `<CircularProgressBar 
  padding={"1rem"} 
  backgroundColor= {"#bbd6b8"}
/>`,
  separators_style: `<CircularProgressBar 
  styles={"separators"} 
  separator={[5, 8, "white"]} 
  roundLineCap = {false}
/>`,
  pie_chart_style: `<CircularProgressBar
  styles={"pie-chart"}
  chartValue = {{
    10:"red",
    30:"blue",
    80:"green",
    100:"yellow"
  }}
/>`,
  sample_1: `<CircularProgressBar
  color={["#fc2947", "#7149c6"]}
  trackColor={"#D8D8D866"}
  shadow = {true}
  loopCount = {Infinity}
  startDelay = {10}
  reverseDelay = {500}
  reverseDuration = {800}
/>`,
  sample_2: `<CircularProgressBar
  shadow={true}
  color={["#7149c6", "#fc2947"]}
  loopCount={Infinity}
  text = {"Km/h"}
  showPercentage={false}
  startPosition={-135}
  roundLineCap={false}
  styles={"separators"}
/>`,
  sample_3: `<CircularProgressBar
  color={["#fc2947", "#7149c6"]}
  showPercentage={false}
  size={"0.7rem"}
  text={"Loading..."}
  textStyle={{
    fontSize: "1rem",
    fontStyle: "italic",
  }}
  trackColor={"transparent"}
  percentage={200}
  loopCount={Infinity}
  startDelay={0}
  reverseDelay={0}
  reverse={false}
/>`,
  sample_4: `<CircularProgressBar
  color={["#fc2947", "#7149c6"]}
  trackColor={"#D8D8D866"}
  shadow={true}
  loopCount={Infinity}
  startDelay={10}
  reverseDelay={500}
  reverseDuration={800}
  radius={"6rem"}
  showPercentage = {false}>

  <CircularProgressBar
    color={["#fc2947", "#7149c6"]}
    trackColor={"#D8D8D866"}
    shadow={true}
    loopCount={Infinity}
    startDelay={10}
    reverseDelay={500}
    reverseDuration={800}
    radius={"4.5rem"}
  />

</CircularProgressBar>`,
  sample_5: ` <CircularProgressBar
  color={["#fc2947", "#7149c6"]}
  trackColor={"#D8D8D866"}
  shadow={true}
  loopCount={Infinity}
  startDelay={10}
  reverseDelay={500}
  reverseDuration={800}
  radius={"6rem"}
  showPercentage={false}>

  <CircularProgressBar
    color={["#fc2947", "#7149c6"]}
    trackColor={"#D8D8D866"}
    shadow={true}
    loopCount={Infinity}
    startDelay={10}
    reverseDelay={500}
    reverseDuration={800}
    radius={"4.5rem"}
    antiClockWise={true}
  />
    
</CircularProgressBar>`,
};

const Circular = () => {
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
            <CircularProgressBar />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={1}
          text={codes.stroke_color}
          title={"Stroke color"}
        >
          <MultipleObserver>
            <CircularProgressBar color={"#57C5B6"} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={1}
          text={codes.track_color}
          title={"Track color"}
        >
          <MultipleObserver>
            <CircularProgressBar trackColor={"#00ff0088"} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={1}
          text={codes.radius}
          title={"Radius value"}
        >
          <MultipleObserver>
            <CircularProgressBar radius={"7rem"} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={1}
          text={codes.solid}
          title={"Style : Solid"}
        >
          <MultipleObserver>
            <CircularProgressBar styles={"solid"} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={1}
          text={codes.separators}
          title={"Style : Separators"}
        >
          <MultipleObserver>
            <CircularProgressBar styles={"separators"} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={1}
          text={codes.pie_chart}
          title={"Style : Pie-Chart"}
        >
          <MultipleObserver>
            <CircularProgressBar styles={"pie-chart"} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={1}
          text={codes.size}
          title={"Stroke size"}
        >
          <MultipleObserver>
            <CircularProgressBar size={"0.5rem"} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={1}
          text={codes.percentage}
          title={"Percentage"}
        >
          <MultipleObserver>
            <CircularProgressBar percentage={90} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={1}
          text={codes.duration}
          title={"Duration"}
        >
          <MultipleObserver>
            <CircularProgressBar duration={1000} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={1}
          text={codes.start_position}
          title={"Start position"}
        >
          <MultipleObserver>
            <CircularProgressBar startPosition={90} />
          </MultipleObserver>
        </Card>

        <Card 
        current={length} 
        showVal={1} 
        text={codes.shadow} 
        title={"Shadow"}>
          <MultipleObserver>
            <CircularProgressBar shadow={true} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={2}
          text={codes.inner_shadow}
          title={"Custom inner shadow"}
        >
          <MultipleObserver>
            <CircularProgressBar
              shadow={true}
              innerShadowStyle={{
                boxShadow: "5px 5px 10px #4F455788",
              }}
            />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={2}
          text={codes.outer_shadow}
          title={"Custom outer shadow"}
        >
          <MultipleObserver>
            <CircularProgressBar
              shadow={true}
              outerShadowStyle={{
                boxShadow: "5px 5px 10px #4F455788",
              }}
            />
          </MultipleObserver>
        </Card>

        <Card current={length} showVal={2} text={codes.text} title={"Text"}>
          <MultipleObserver>
            <CircularProgressBar text={"React"} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={2}
          text={codes.show_percentage}
          title={"Percentage"}
        >
          <MultipleObserver>
            <CircularProgressBar showPercentage={false} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={2}
          text={codes.percentage_style}
          title={"Custom percentage style"}
        >
          <MultipleObserver>
            <CircularProgressBar
              percentageStyle={{
                fontSize: "1.8rem",
                fontWeight: "600",
                color: "#22c55e",
                fontStyle: "italic",
              }}
            />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={2}
          text={codes.text_style}
          title={"Custom text style"}
        >
          <MultipleObserver>
            <CircularProgressBar
              text={"React"}
              textStyle={{
                fontSize: "1rem",
                color: "black",
                fontStyle: "italic",
                margin: "-5px",
              }}
            />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={2}
          text={codes.childrens}
          title={"Childrens"}
        >
          <MultipleObserver>
            <CircularProgressBar showPercentage={false}>
              <img
                src="https://kavindu.me/logo192.png"
                alt="fortpolio logo"
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "0.2rem",
                }}
              />
            </CircularProgressBar>
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={2}
          text={codes.linecap}
          title={"Linecap"}
        >
          <MultipleObserver>
            <CircularProgressBar roundLineCap={false} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={2}
          text={codes.animation}
          title={"Animation"}
        >
          <MultipleObserver>
            <CircularProgressBar animation={false} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={2}
          text={codes.p_animation}
          title={"Percentage animation"}
        >
          <MultipleObserver>
            <CircularProgressBar percentageAnimation={false} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={2}
          text={codes.reverse}
          title={"Reverse"}
        >
          <MultipleObserver>
            <CircularProgressBar reverse={false} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={2}
          text={codes.r_duration}
          title={"Reverse duration"}
        >
          <MultipleObserver>
            <CircularProgressBar reverseDuration={1000} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={3}
          text={codes.loop_w_r}
          title={"Loop with reverse"}
        >
          <MultipleObserver>
            <CircularProgressBar loopCount={5} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={3}
          text={codes.loop_wo_r}
          title={"Loop without reverse"}
        >
          <MultipleObserver>
            <CircularProgressBar loopCount={5} reverse={false} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={3}
          text={codes.start_delay}
          title={"Start delay"}
        >
          <MultipleObserver>
            <CircularProgressBar startDelay={1000} loopCount={5} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={3}
          text={codes.reverse_delay}
          title={"Reverse delay"}
        >
          <MultipleObserver>
            <CircularProgressBar reverseDelay={1000} loopCount={5} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={3}
          text={codes.anticlockwise}
          title={"Forward direction"}
        >
          <MultipleObserver>
            <CircularProgressBar antiClockWise={true} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={3}
          text={codes.background}
          title={"Background color"}
        >
          <MultipleObserver>
            <CircularProgressBar backgroundColor={"#BBD6B8"} />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={3}
          text={codes.padding}
          title={"Padding"}
        >
          <MultipleObserver>
            <CircularProgressBar
              padding={"1rem"}
              backgroundColor={"#BBD6B8"}
              shadow={true}
              outerShadowStyle={{
                paddingTop: "0.001rem",
              }}
              innerShadowStyle={{
                boxShadow: "none",
              }}
            />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={3}
          text={codes.separators_style}
          title={"Customize separators"}
        >
          <MultipleObserver>
            <CircularProgressBar
              styles={"separators"}
              separator={[5, 8, "white"]}
              roundLineCap={false}
            />
          </MultipleObserver>
        </Card>

        <Card
          current={length}
          showVal={3}
          text={codes.pie_chart_style}
          title={"Customize pie-chart"}
        >
          <MultipleObserver>
            <CircularProgressBar
              styles={"pie-chart"}
              chartValue={{
                10: "red",
                30: "blue",
                80: "green",
                100: "yellow",
              }}
            />
          </MultipleObserver>
        </Card>
      </div>

      <h1 className={(length >= 4 ? "block" : "hidden") + " my-10 text-3xl"}>Advance Usage</h1>
      <div className="grid gap-4 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
        <Card
          current={length}
          showVal={4}
          text={codes.sample_1}
          title={"Sample - 1"}
        >
          <CircularProgressBar
            color={["#fc2947", "#7149c6"]}
            trackColor={"#D8D8D866"}
            shadow={true}
            loopCount={Infinity}
            startDelay={10}
            reverseDelay={500}
            reverseDuration={800}
          />
        </Card>

        <Card
          current={length}
          showVal={4}
          text={codes.sample_2}
          title={"Sample - 2"}
        >
          <CircularProgressBar
            shadow={true}
            color={["#7149c6", "#fc2947"]}
            loopCount={Infinity}
            text={"Km/h"}
            showPercentage={false}
            startPosition={-135}
            roundLineCap={false}
            styles={"separators"}
          />
        </Card>

        <Card
          current={length}
          showVal={4}
          text={codes.sample_3}
          title={"Sample - 3"}
        >
          <CircularProgressBar
            color={["#fc2947", "#7149c6"]}
            showPercentage={false}
            size={"0.7rem"}
            text={"Loading..."}
            textStyle={{
              fontSize: "1rem",
              fontStyle: "italic",
            }}
            trackColor={"transparent"}
            percentage={200}
            loopCount={Infinity}
            startDelay={0}
            reverseDelay={0}
            reverse={false}
          />
        </Card>

        <Card
          current={length}
          showVal={4}
          text={codes.sample_4}
          title={"Sample - 4"}
        >
          <CircularProgressBar
            color={["#fc2947", "#7149c6"]}
            trackColor={"#D8D8D866"}
            shadow={true}
            loopCount={Infinity}
            startDelay={10}
            reverseDelay={500}
            reverseDuration={800}
            radius={"6rem"}
            showPercentage={false}
          >
            <CircularProgressBar
              color={["#fc2947", "#7149c6"]}
              trackColor={"#D8D8D866"}
              shadow={true}
              loopCount={Infinity}
              startDelay={10}
              reverseDelay={500}
              reverseDuration={800}
              radius={"4.5rem"}
            />
          </CircularProgressBar>
        </Card>

        <Card
          current={length}
          showVal={4}
          text={codes.sample_5}
          title={"Sample - 5"}
        >
          <CircularProgressBar
            color={["#fc2947", "#7149c6"]}
            trackColor={"#D8D8D866"}
            shadow={true}
            loopCount={Infinity}
            startDelay={10}
            reverseDelay={500}
            reverseDuration={800}
            radius={"6rem"}
            showPercentage={false}
          >
            <CircularProgressBar
              color={["#fc2947", "#7149c6"]}
              trackColor={"#D8D8D866"}
              shadow={true}
              loopCount={Infinity}
              startDelay={10}
              reverseDelay={500}
              reverseDuration={800}
              radius={"4.5rem"}
              antiClockWise={true}
            />
          </CircularProgressBar>
        </Card>
      </div>

      {/* add button */}
      <button
        className={
          length === 4
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

export default Circular;
