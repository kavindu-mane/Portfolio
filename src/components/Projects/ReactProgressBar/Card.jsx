import React from "react";
import CodeArea from "./CodeArea";
import Title from "./Title";

const Card = ({ children, text, title }) => {
  return (
    <React.Fragment>
      <div
        className="mx-2 mt-4 flex max-w-md
        flex-col items-center justify-between rounded-xl bg-white 
        shadow-2xl duration-300 ease-in hover:-translate-y-5 hover:bg-sky-50 sm:mx-4"
      >
        <Title title={title} />
        {children}
        <CodeArea value={text} />
      </div>
    </React.Fragment>
  );
};

export default Card;
