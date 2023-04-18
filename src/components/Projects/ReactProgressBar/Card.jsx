import React, { lazy, Suspense } from "react";
const CodeArea = lazy(() => import("./CodeArea"));
const Title = lazy(() => import("./Title"));

const Card = ({ children, text, title, current, showVal }) => {
  return (
    <React.Fragment>
      <Suspense
        fallback={
          <p className="text-md flex h-screen max-h-[15rem] min-w-[25rem] items-center justify-center italic">
            Loading...
          </p>
        }
      >
        <div
          className={
            (current >= showVal ? "flex" : "hidden") +
            " mx-2 mt-4 max-w-md flex-col items-center justify-between rounded-xl bg-white shadow-2xl duration-300 ease-in hover:-translate-y-5 hover:bg-sky-50 sm:mx-4"
          }
        >
          <Title title={title} />
          {children}
          <CodeArea value={text} />
        </div>
      </Suspense>
    </React.Fragment>
  );
};

export default Card;
