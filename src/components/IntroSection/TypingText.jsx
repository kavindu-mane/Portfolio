import React from "react";
import ReactTypingEffect from "react-typing-effect";

const getColourValue = (start) => {
  return start + Math.floor((Math.random() * 1000) % (255 - start));
};
const colorGenerate = () => {
  let colorVal = [];
  let colorCode = "#";
  if (document.documentElement.classList.contains("dark")) {
    colorVal[0] = getColourValue(80);
    colorVal[1] = getColourValue(80);
    colorVal[2] = getColourValue(130);
  } else {
    colorVal[0] = getColourValue(0);
    colorVal[1] = getColourValue(0);
    colorVal[2] = Math.floor((Math.random() * 100) / 2);
  }

  colorVal.forEach((element) => {
    colorCode += element.toString(16).padStart(2, "0");
  });
  return colorCode;
};

const TypingText = () => {
  let textColor;
  return (
    <React.Fragment>
      <h1 className="py-2 text-center font-kurale text-2xl font-semibold text-slate-800 dark:text-white sm:text-3xl md:text-5xl">
        I'm{" "}
        <span>
          <ReactTypingEffect
            speed={100}
            eraseSpeed={100}
            typingDelay={500}
            eraseDelay = {1000}
            text={["Undergraduate...", "IT Enthusiastic...", "Developer..."]}
            displayTextRenderer={(text, i) => {
              if(text === "") textColor = colorGenerate();
              return (
                <span key={i} style={{ color: textColor }}>
                  {text}
                </span>
              );
            }}
          />
        </span>
      </h1>
    </React.Fragment>
  );
};

export default TypingText;
